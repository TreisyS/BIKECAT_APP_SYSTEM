import React, { useState, useEffect } from 'react';
import { View, Text, Button, Platform, PermissionsAndroid } from 'react-native';
import Geolocation from 'react-native-geolocation-service';

const LocationComponent = () => {
  const [userLocation, setUserLocation] = useState<{ latitude: number; longitude: number } | null>(null);

  useEffect(() => {
    const requestLocationPermission = async () => {
      if (Platform.OS === 'android') {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
          {
            title: 'Acceso a la ubicación',
            message: 'Esta aplicación necesita acceder a tu ubicación.',
            buttonNegative: 'Cancelar',
            buttonPositive: 'Aceptar',
          }
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          console.log('Permiso de ubicación concedido');
          getUserLocation();
        } else {
          console.log('Permiso de ubicación denegado');
        }
      } else {
        Geolocation.requestAuthorization('whenInUse');
      }
    };

    const getUserLocation = () => {
      Geolocation.getCurrentPosition(
        (position) => {
          setUserLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
        },
        (error) => {
          console.error('Error obteniendo ubicación:', error);
        },
        { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
      );
    };

    requestLocationPermission();
  }, []);

  return (
    <View>
      <Text>Ubicación del usuario:</Text>
      {userLocation ? (
        <Text>
          Latitud: {userLocation.latitude}, Longitud: {userLocation.longitude}
        </Text>
      ) : (
        <Text>Cargando ubicación...</Text>
      )}
      <Button title="Obtener ubicación" onPress={() => Geolocation.requestAuthorization('whenInUse')} />
    </View>
  );
};

export default LocationComponent;
