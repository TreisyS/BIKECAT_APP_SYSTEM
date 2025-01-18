import React, { useState, useEffect, useRef } from "react";
import MapView, { Marker, Polyline } from "react-native-maps";
import { StyleSheet, View, Image, Animated } from "react-native";
import Geolocation from "react-native-geolocation-service";
import { getDirections } from "./utils/directions";
import BottomPanel from "./Components/BottomPanel";
import TopBar from "./Components/barrasuperior";

// Define el tipo para las coordenadas
interface Coordinate {
  latitude: number;
  longitude: number;
}

const MapScreen = () => {
  const mapRef = useRef<MapView>(null);

  const [routeCoordinates, setRouteCoordinates] = useState<Coordinate[]>([]);
  const [origin, setOrigin] = useState("18.457199,-69.945068");
  const [destination, setDestination] = useState("18.450066,-69.936202");
  const [userLocation, setUserLocation] = useState<Coordinate>({
    latitude: 18.4455500, // Cerca del BikeClub
    longitude: -69.935500,
  });

  // Coordenadas del BikeClub en el Parque Mirador Sur
   const stations = [
    { latitude: 18.4505, longitude: -69.9355 }, // Parque Mirador Sur 1
    { latitude: 18.456, longitude: -69.936 }, // Parque Mirador Sur 2
  ];

  const [currentStationIndex, setCurrentStationIndex] = useState(0);

  //animacion de reubicacion 
 const [glowAnim] = useState(new Animated.Value(1)); 

  // Obtener la ubicación actual del usuario
 useEffect(() => {
  const getUserLocation = () => {
    Geolocation.getCurrentPosition(
      (position) => {
        setUserLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      },
      (error) => {
        console.error("Error obteniendo ubicación:", error);
      },
      { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
    );
  };

  getUserLocation();
  const locationInterval = setInterval(getUserLocation, 10000); // Actualiza cada 10 segundos

  return () => clearInterval(locationInterval);
}, []);


 // Alternar destino entre estaciones
  const handleSwitchStation = async () => {
    const nextIndex = (currentStationIndex + 1) % stations.length;
    setCurrentStationIndex(nextIndex);

    try {
      const route = await getDirections(
        `${userLocation.latitude},${userLocation.longitude}`,
        `${stations[nextIndex].latitude},${stations[nextIndex].longitude}`
      );
      setRouteCoordinates(route);
    } catch (error) {
      console.error("Error obteniendo la ruta:", error);
    }
  };

  const handleGetDirections = async () => {
    try {
      const route = await getDirections(origin, destination);
      setRouteCoordinates(route); // route debe ser de tipo Coordinate[]
    } catch (error) {
      console.error("Error obteniendo la ruta:", error);
    }
  };
 // Función para reubicar el mapa
const [highlightUser, setHighlightUser] = useState(false);

const handleFocusUserLocation = () => {
  if (mapRef.current && userLocation.latitude && userLocation.longitude) {
    setHighlightUser(true); // Cambiar el estado para resaltar el marcador
    mapRef.current.animateToRegion({
      ...userLocation,
      latitudeDelta: 0.01,
      longitudeDelta: 0.01,
    });
    setTimeout(() => setHighlightUser(false), 2000); // Remover el resaltado después de 2 segundos
  } else {
    console.error("Ubicación del usuario no disponible o `mapRef` no configurado.");
  }
};
const stationsRef = useRef(stations);

useEffect(() => {
  const initializeRoute = async () => {
    try {
      const initialRoute = await getDirections(
        `${userLocation.latitude},${userLocation.longitude}`,
        `${stationsRef.current[0].latitude},${stationsRef.current[0].longitude}`
      );
      setRouteCoordinates(initialRoute);
    } catch (error) {
      console.error("Error al calcular la ruta inicial:", error);
    }
  };

  initializeRoute();
}, [userLocation]);

   // Efecto de brillo animado
  useEffect(() => {
  if (highlightUser) {
    const animation = Animated.loop(
      Animated.sequence([
        Animated.timing(glowAnim, {
          toValue: 1.5, // Incrementa el brillo
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(glowAnim, {
          toValue: 1, // Regresa al brillo normal
          duration: 1000,
          useNativeDriver: true,
        }),
      ])
    );

    animation.start();

    const timeout = setTimeout(() => {
      setHighlightUser(false); // Desactiva el highlight después de 2 segundos
      animation.stop(); // Detén la animación
    }, 2000);

    return () => {
      clearTimeout(timeout);
      animation.stop(); // Detén la animación si el componente se desmonta
    };
  }
}, [highlightUser, glowAnim]);


  const mapStyle = [
    {
      elementType: "geometry",
      stylers: [
        {
          color: "#191E24",
        },
      ],
    },
    {
      elementType: "labels.icon",
      stylers: [
        {
          visibility: "off",
        },
      ],
    },
    {
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#b0b0b0",
        },
      ],
    },
    {
      elementType: "labels.text.stroke",
      stylers: [
        {
          color: "#212121",
        },
      ],
    },
    {
      featureType: "administrative",
      elementType: "geometry.fill",
      stylers: [
        {
          color: "#191E24",
        },
      ],
    },
    {
      featureType: "poi",
      elementType: "geometry",
      stylers: [
        {
          color: "#191E24",
        },
      ],
    },
    {
      featureType: "road",
      elementType: "geometry",
      stylers: [
        {
          color: "#20242C",
        },
      ],
    },
    {
      featureType: "road",
      elementType: "geometry.stroke",
      stylers: [
        {
          color: "#191F26", // Verde azulado para las carreteras
        },
      ],
    },
    {
      featureType: "landscape",
      elementType: "geometry",
      stylers: [
        {
          color: "#191E24",
        },
      ],
    },
    {
      featureType: "water",
      elementType: "geometry",
      stylers: [
        {
          color: "#304f5c", // Verde azulado para el agua
        },
      ],
    },
  ];

  return (
    <View style={styles.container}>
      {/* TopBar */}
      <TopBar onSettingsPress={() => console.log("Configuración presionada")} />

    <MapView
  ref={mapRef}
  style={styles.map}
  initialRegion={{
    latitude: userLocation.latitude,
    longitude: userLocation.longitude,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  }}
  customMapStyle={mapStyle}
>

        {/* Marcador de la ubicación del usuario */}
    <Marker coordinate={userLocation}>
  <View style={styles.markerContainer}>
    {highlightUser && ( // Solo muestra el brillo si highlightUser es true
      <Animated.View
        style={[
          styles.glowEffect,
          {
            transform: [{ scale: glowAnim }], // Escala animada
            opacity: glowAnim.interpolate({
              inputRange: [1, 1.5],
              outputRange: [0.3, 1], // Cambia opacidad para dar efecto de brillo
            }),
          },
        ]}
      />
    )}
    <Image
      source={require("../images/iiii.png")} // Ruta a tu imagen
      style={styles.markerImage}
      resizeMode="contain"
    />
  </View>
</Marker>


  <Marker coordinate={stations[currentStationIndex]}>
    <Image
        source={require("../images/estacion.png")}
        style={{ width: 40, height: 35 }}
        resizeMode="contain"
    />
</Marker>
   

        {/* Ruta */}
    <Polyline coordinates={routeCoordinates} strokeColor="#00FFFF" strokeWidth={5} />
    </MapView>

      {/* Panel inferior */}
<BottomPanel
  origin={origin}
  destination={destination}
  setOrigin={setOrigin}
  setDestination={setDestination}
  onCalculateRoute={handleGetDirections}
  onFocusUserLocation={handleFocusUserLocation}
  onSwitchStation={handleSwitchStation}
  currentStationIndex={currentStationIndex} // Pasa el índice actual
/>





    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
  markerContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  glowEffect: {
    position: "absolute",
    width: 50,
    height: 50,
    backgroundColor: "rgba(17, 71, 141, 0.349)", // Color amarillo con opacidad
    borderRadius: 25,
  },
  markerImage: {
    width: 30,
    height: 30,
  },
});

export default MapScreen;
