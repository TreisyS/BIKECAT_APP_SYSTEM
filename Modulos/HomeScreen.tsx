import React from 'react';
import { View, Text, StyleSheet, Image, Alert, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { RootParamList } from '../Modulos/ModuloAlquiler/RoomParamList'; // Asegúrate de que este archivo exista
import TopBar from '../Modulos/ModuloEstaciones/Components/barrasuperior';  // Asegúrate de la ruta correcta
import BottomNavigation from '../Modulos/ModuloEstaciones/Components/barrainferior'; // Asegúrate de la ruta correcta

const HomeScreen: React.FC = () => {
  const navigation = useNavigation<NavigationProp<RootParamList>>();

  // Handlers de navegación
  const handleViewBikes = () => {
    Alert.alert('Navegando a la pantalla de bicicletas');
    navigation.navigate('Catalogo');
  };

  const handleViewStations = () => {
    Alert.alert('Navegar a la pantalla de estaciones');
    navigation.navigate('Estacion');
  };

  const handleMakeReservation = () => {

    Alert.alert('Navegar a la pantalla de reservas');
    navigation.navigate('Detalle');
  };

  // Lógica para manejar el tab presionado
  const handleTabPress = (tab: string) => {
    console.log(`Tab seleccionado: ${tab}`);
    // Aquí puedes agregar lógica según la tab seleccionada, como navegar a diferentes pantallas
    switch (tab) {
      case 'home':
        navigation.navigate('Home');
        break;
      case 'support':
        // Lógica para la pestaña de soporte
        break;
      case 'bikes':
        // Lógica para la pestaña de bicicletas
        navigation.navigate('Catalogo'); // Ejemplo de navegación
        break;
      case 'discounts':
        // Lógica para la pestaña de descuentos
        break;
      case 'profile':
        // Lógica para la pestaña de perfil
        break;
      default:
        break;
    }
  };

  return (
    <View style={{ flex: 1 }}>
      {/* Barra superior */}
      <TopBar onSettingsPress={() => console.log('Configuración presionada')} />

      {/* Contenido principal */}
      <ScrollView style={styles.container}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerTitle}>StartCat</Text>
          <Text style={styles.userDetails}>Cédula: 000-00000000-0</Text>
          <Text style={styles.userDetails}>Reserva: 0099</Text>
        </View>
        <View style={styles.bannerContainer}>
          <Image source={require('./images/Justoloquenecesitas.png')} style={styles.bannerImage} />
          <Text style={styles.bannerText}>Justo lo que tu Salud necesita</Text>
          <Text style={styles.bannerDescription}>
            Sistema multiplataforma para reservar bicicletas en el parque mirador sur, Santo Domingo, que permite mejorar el control y la eficiencia de la empresa Bike Club.
          </Text>
        </View>
        <View style={styles.buttonsContainer}>
          <TouchableOpacity style={styles.button} onPress={handleViewBikes}>
            <Image source={require('./images/bike.png')} style={styles.buttonIcon} />
            <Text style={styles.buttonText}>Ver Bicicletas</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={handleViewStations}>
            <Image source={require('./images/estaciones.png')} style={styles.buttonIcon} />
            <Text style={styles.buttonText}>Estaciones de Bicicletas</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={handleMakeReservation}>
            <Image source={require('./images/reserva.png')} style={styles.buttonIcon} />
            <Text style={styles.buttonText}>Haz tu Reserva</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.reservationsContainer}>
          <Text style={styles.reservationsTitle}>Reservas Activas</Text>
          <View style={styles.reservationCard}>
            <Text style={styles.reservationText}>Aro 16</Text>
            <Text style={styles.reservationTime}>Salida: 8:00am</Text>
          </View>
          <View style={styles.reservationCard}>
            <Text style={styles.reservationText}>Aro 12</Text>
            <Text style={styles.reservationTime}>Salida: 2:00pm</Text>
          </View>
          <TouchableOpacity style={styles.addReservationCard} onPress={() => navigation.navigate('Catalogo')}>
            <Text style={styles.addText}>+</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* Barra inferior */}
      <BottomNavigation onTabPress={handleTabPress} />
    </View>
  );
};

// Estilos de los componentes de la pantalla principal
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1c1c1e',
  },
  headerContainer: {
    padding: 20,
    backgroundColor: '#000',
  },
  headerTitle: {
    fontSize: 28,
    color: '#fff',
    fontWeight: 'bold',
  },
  userDetails: {
    fontSize: 14,
    color: '#d3d3d3',
  },
  bannerContainer: {
    alignItems: 'center',
    marginVertical: 20,
    paddingHorizontal: 20,
  },
  bannerImage: {
    width: '100%',
    height: 150,
    resizeMode: 'cover',
    marginBottom: 10,
  },
  bannerText: {
    fontSize: 22,
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  bannerDescription: {
    fontSize: 12,
    color: '#d3d3d3',
    textAlign: 'center',
    marginTop: 10,
  },
  buttonsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  button: {
    width: '30%',
    backgroundColor: '#333',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonIcon: {
    width: 40,
    height: 40,
    marginBottom: 10,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
  },
  reservationsContainer: {
    paddingHorizontal: 20,
    marginTop: 20,
  },
  reservationsTitle: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 20,
  },
  reservationCard: {
    backgroundColor: '#333',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
  },
  reservationText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  reservationTime: {
    color: '#d3d3d3',
    fontSize: 14,
  },
  addReservationCard: {
    backgroundColor: '#555',
    padding: 40,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  addText: {
    color: '#fff',
    fontSize: 36,
    fontWeight: 'bold',
  },
});

export default HomeScreen;
