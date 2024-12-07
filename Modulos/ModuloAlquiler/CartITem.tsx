import React, { useState } from 'react';
import { View, Text, Image, Alert, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import TopBar from '../ModuloEstaciones/Components/barrasuperior';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { RootParamList } from '../ModuloAlquiler/RoomParamList';
import BottomNavigation from '../ModuloEstaciones/Components/barrainferior';

// Datos de ejemplo del carrito
const cartItems = [
  { id: '1', name: 'Mountain Bike', price: '$300 - 1h', rating: 5.0, image: require('../images/image2.png') },
  { id: '2', name: 'Aro 26', price: '$300 - 1h', rating: 4.0, image: require('../images/image24.png') },
];

const BikeCartScreen: React.FC = () => {
  const navigation = useNavigation<NavigationProp<RootParamList>>();
  const [items, setItems] = useState(cartItems);

  // Handler para eliminar un ítem del carrito
  const handleRemoveItem = (itemId: string) => {
    setItems(items.filter((item) => item.id !== itemId));
  };

  // Handler para el botón "Comprar Ahora"
  const handleBuyNow = () => {
    Alert.alert('Compra realizada con éxito');
  };

  // Handler para la selección de pestaña
  const handleTabPress = (tab: string) => {
    switch (tab) {
      case 'home':
        navigation.navigate('Home');
        break;
      case 'bikes':
        navigation.navigate('Catalogo');
        break;
      default:
        break;
    }
  };

  return (
    <View style={styles.container}>
      {/* Barra superior */}
      <TopBar onSettingsPress={() => console.log('Ir a configuración')} />

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Banner */}
        <View style={styles.bannerContainer}>
          <Image source={require('../images/banner.png')} style={styles.bannerImage} />
        </View>

        {/* Lista de bicicletas en el carrito */}
        <View style={styles.cartContainer}>
          <Text style={styles.sectionTitle}>Bicicletas reservadas</Text>
          {items.map((item) => (
            <View key={item.id} style={styles.cartItem}>
              <Image source={item.image} style={styles.bikeImage} />
              <View style={styles.itemDetailsContainer}>
                <Text style={styles.bikeName}>{item.name}</Text>
                <Text style={styles.bikePrice}>{item.price}</Text>
              </View>
              <TouchableOpacity style={styles.removeButton} onPress={() => handleRemoveItem(item.id)}>
                <Text style={styles.removeButtonText}>-</Text>
              </TouchableOpacity>
            </View>
          ))}
          {/* Botón para agregar nueva reserva */}
          <TouchableOpacity style={styles.addButton} onPress={() => navigation.navigate('Catalogo')}>
            <Text style={styles.addButtonText}>+</Text>
          </TouchableOpacity>
        </View>

        {/* Botón para realizar la compra */}
        <View style={styles.actionsContainer}>
          <TouchableOpacity style={styles.buyButton} onPress={handleBuyNow}>
            <Text style={styles.buyButtonText}>Confirmar Reservas</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* Barra inferior */}
      <BottomNavigation onTabPress={handleTabPress} />
    </View>
  );
};

// Estilos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1c1c1e',
    paddingBottom: 60,
  },
  scrollContainer: {
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  bannerContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  bannerImage: {
    width: 440,
    height: 300,
    resizeMode: 'contain',
  },
  cartContainer: {
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 15,
  },
  cartItem: {
    backgroundColor: '#050608',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    padding: 15,
    borderRadius: 10,
  },
  itemDetailsContainer: {
    flex: 1,
    paddingHorizontal: 10,
  },
  bikeImage: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  bikeName: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  bikePrice: {
    color: '#d3d3d3',
    fontSize: 14,
  },
  removeButton: {
    backgroundColor: '#72CBAA',
    height:40,
    width:40,
    borderRadius: 25,
  },
  removeButtonText: {
    color: '#f7f7f7',
    fontSize: 30,
    fontWeight: 'bold',
  },
  addButton: {
    backgroundColor: '#0506086c',
    padding: 50,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  addButtonText: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
  actionsContainer: {
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 30,
  },
  buyButton: {
    backgroundColor: '#72CBAA',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 25,
  },
  buyButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default BikeCartScreen;
