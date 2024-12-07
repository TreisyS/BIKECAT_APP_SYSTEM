
//Modulos/ModuloEstaciones/Estaciones.tsx

import React, { useState } from "react";
import MapView, { Marker, Polyline } from "react-native-maps";
import { StyleSheet, View } from "react-native";
import { getDirections } from "./utils/directions";
import BottomPanel from "./Components/BottomPanel";

// Define el tipo para las coordenadas
interface Coordinate {
  latitude: number;
  longitude: number;
}

const MapScreen = () => {
  // Especifica que routeCoordinates es un arreglo de objetos Coordinate
  const [routeCoordinates, setRouteCoordinates] = useState<Coordinate[]>([]);
  const [origin, setOrigin] = useState("18.457199,-69.945068");
  const [destination, setDestination] = useState("18.450066,-69.936202");

  const handleGetDirections = async () => {
    try {
      const route = await getDirections(origin, destination);
      setRouteCoordinates(route); // route debe ser de tipo Coordinate[]
    } catch (error) {
      console.error("Error obteniendo la ruta:", error);
    }
  };

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 18.457199,
          longitude: -69.945068,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
      >
        {/* Marcadores */}
        <Marker coordinate={{ latitude: 18.457199, longitude: -69.945068 }} />
        <Marker coordinate={{ latitude: 18.450066, longitude: -69.936202 }} />

        {/* Ruta */}
        <Polyline coordinates={routeCoordinates} strokeColor="#021c29" strokeWidth={5} />
      </MapView>

      {/* Panel inferior */}
      <BottomPanel
        origin={origin}
        destination={destination}
        setOrigin={setOrigin}
        setDestination={setDestination}
        onCalculateRoute={handleGetDirections}
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
});

export default MapScreen;
