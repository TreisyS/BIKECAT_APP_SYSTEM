import React from 'react';
import { View, Text, StyleSheet, Alert, Image, TouchableOpacity, ScrollView, FlatList } from 'react-native';

import TopBar from '../ModuloEstaciones/Components/barrasuperior'; // Asegúrate de la ruta correcta
import BottomNavigation from '../ModuloEstaciones/Components/barrainferior'; // Asegúrate de la ruta correcta
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { RootParamList } from '../ModuloAlquiler/RoomParamList';

// Datos de ejemplo de las bicicletas
const bikeData = [
  { id: '1', name: 'Mountain Bike', price: '$300 - 1h', rating: 5.0, image: require('../images/image2.png') },
  { id: '2', name: 'Mountain Bike', price: '$300 - 1h', rating: 4.0, image: require('../images/image24.png') },
  { id: '3', name: 'Mountain Bike', price: '$300 - 1h', rating: 5.0, image: require('../images/image2.png') },
  { id: '4', name: 'Mountain Bike', price: '$300 - 1h', rating: 4.0, image: require('../images/image24.png') },
];

// Componente de la pantalla de alquiler de bicicletas
const BikeRentalScreen: React.FC = () => {
    const navigation = useNavigation<NavigationProp<RootParamList>>();
  // Manejo de la selección de tab

  const handleTabPress = (tab: string) => {
    console.log(`Tab seleccionado: ${tab}`);
    // Aquí puedes agregar lógica según la tab seleccionada, como navegar a diferentes pantallas
    switch (tab) {
      case 'home':
        navigation.navigate('Home');
        break;
      case 'support':
        navigation.navigate('Support')
        break;
      case 'bikes':
        // Lógica para la pestaña de bicicletas
        navigation.navigate('Catalogo'); // Ejemplo de navegación
        break;
      case 'discounts':
      navigation.navigate('Descuento');
        break;
      case 'profile':
       navigation.navigate('Profile');
        break;
      default:
        break;
    }
  };
const handleReserveBike = (bikeName: string) => {
  Alert.alert(`Reservando la bicicleta: ${bikeName}`);
  navigation.navigate('Detalle');
};

  // Renderiza cada tarjeta de bicicleta
  const renderBikeCard = ({ item }: { item: typeof bikeData[0] }) => (
    <View style={styles.bikeCard}>
      <Image source={item.image} style={styles.bikeImage} />
      <Text style={styles.bikeName}>{item.name}</Text>
      <Text style={styles.bikePrice}>{item.price}</Text>
      <TouchableOpacity style={styles.reserveButton} onPress={() => handleReserveBike(item.name)}>
        <Text style={styles.plusSign}> +</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={{ flex: 1 }}>
      {/* Barra superior */}
      <TopBar onSettingsPress={() => console.log('Configuración presionada')} />

      {/* Contenido principal */}
      <ScrollView style={styles.container}>
        <View style={styles.headerContainer}>
          <Image source={require('../images/banner.png')} style={styles.headerImage} />     
        </View>
        <View style={styles.categoriesContainer}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <TouchableOpacity style={styles.categoryButton}><Text style={styles.categoryText}>Todas</Text></TouchableOpacity>
            <TouchableOpacity style={styles.categoryButton}><Text style={styles.categoryText}>Playera</Text></TouchableOpacity>
            <TouchableOpacity style={styles.categoryButton}><Text style={styles.categoryText}>Dobles</Text></TouchableOpacity>
            <TouchableOpacity style={styles.categoryButton}><Text style={styles.categoryText}>MTB</Text></TouchableOpacity>
            <TouchableOpacity style={styles.categoryButton}><Text style={styles.categoryText}>Aro 12</Text></TouchableOpacity>
          </ScrollView>
        </View>
        <View style={styles.bikesContainer}>
          <Text style={styles.sectionTitle}>Todas</Text>

          <FlatList
            data={bikeData}
            renderItem={renderBikeCard}
            keyExtractor={(item) => item.id}
            numColumns={2}
          />
        </View>
      </ScrollView>

      {/* Barra inferior */}
      <BottomNavigation onTabPress={handleTabPress} />
    </View>
  );
};

// Estilos de los componentes de la pantalla de alquiler de bicicletas
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1c1c1e',
  },
  headerContainer: {
    alignItems: 'center',
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  headerTitle: {
    fontSize: 22,
    color: '#72cbaa',
    fontWeight: 'bold',
    marginTop: 20,
  },
  headerImage: {
    width: 440,
    height: 300,
    resizeMode: 'contain',
    marginBottom: 10,
  },
  headerSubtitle: {
    fontSize: 28,
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  categoriesContainer: {
    flexDirection: 'row',
    marginHorizontal: 20,
    marginBottom: 20,
  },
  categoryButton: {
    backgroundColor: '#333',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 20,
    marginRight: 10,
  },
  categoryText: {
    color: '#fff',
    fontSize: 14,
  },
  bikesContainer: {
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 15,
  },
  bikeCard: {
    backgroundColor: '#050608',
    flex: 1,
    margin: 10,
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    maxWidth: '45%',
  },
  bikeImage: {
    width: '100%',
    height: 100,
    resizeMode: 'contain',
    marginBottom: 10,
  },
  bikeName: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 5,
  },
  bikePrice: {
    color: '#d3d3d3',
    fontSize: 14,
    marginBottom: 10,
  },
  reserveButton: {
    backgroundColor: '#72cbaa',
    width:50,
    textAlign: 'center',
    padding: 10,
    borderRadius: 25,
  },
  plusSign: {
    color: '#fff',
    width:20,
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default BikeRentalScreen;

