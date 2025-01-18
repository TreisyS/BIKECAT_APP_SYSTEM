import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import BottomNavigation from '../ModuloEstaciones/Components/barrainferior';
import TopBar from '../ModuloEstaciones/Components/barrasuperior';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { RootParamList } from '../ModuloAlquiler/RoomParamList';

const PromotionsScreen: React.FC = () => {
  const promotions = [
    { id: 1, discount: '30%', description: 'Descuento en aro 16', date: 'Sábado 25 - Domingo 3' },
    { id: 2, discount: '25%', description: 'Descuento en aro 16', date: 'Sábado 25 - Domingo 3' },
    { id: 3, discount: '26%', description: 'Descuento en aro 16', date: 'Sábado 25 - Domingo 3' },
    { id: 4, discount: '15%', description: 'Descuento en aro 16', date: 'Sábado 25 - Domingo 3' },
    { id: 5, discount: '10%', description: 'Descuento en aro 16', date: 'Sábado 25 - Domingo 3' },
    { id: 6, discount: '15%', description: 'Descuento en aro 16', date: 'Sábado 25 - Domingo 3' },
  ];

  const navigation = useNavigation<NavigationProp<RootParamList>>();

  const handleTabPress = (tab: string) => {
    console.log(`Tab seleccionado: ${tab}`);
    switch (tab) {
      case 'home':
        navigation.navigate('Home');
        break;
      case 'support':
        navigation.navigate('Support');
        break;
      case 'bikes':
        navigation.navigate('Catalogo');
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

  return (
    <View style={styles.container}>
      <TopBar onSettingsPress={() => console.log('Configuración presionada')} />

      <View style={styles.headerContainer}>
        <Image source={require('../images/ffffffff.png')} style={styles.bannerImage} />
      </View>

      <ScrollView contentContainerStyle={styles.promotionsContainer}>
        <View style={styles.gridContainer}>
          {promotions.map((promo) => (
            <TouchableOpacity key={promo.id} style={styles.promotionCard}>
              <View style={styles.discountContainer}>
                <Text style={styles.discountText}>{promo.discount}</Text>
              </View>
              <Text style={styles.descriptionText}>{promo.description}</Text>
              <Text style={styles.dateText}>{promo.date}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>

      <BottomNavigation onTabPress={handleTabPress} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
  },
  headerContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  bannerImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  promotionsContainer: {
    paddingHorizontal: 16,
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  promotionCard: {
    backgroundColor: '#213b415c',
    borderRadius: 10,
    padding: 19,
    width: '49%',
    marginBottom: 20,
    alignItems: 'center',
  },
  discountContainer: {
    borderWidth: 2,
    width:90,
    height:90,
    borderColor: '#ffffff',
    borderRadius: 50,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginBottom: 10,
    alignItems:'center',
  },
  discountText: {
    marginTop:15,
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  descriptionText: {
    fontSize: 16,
    color: '#c8bdbd',
    marginTop: 5,
  },
  dateText: {
    fontSize: 14,
    color: '#777',
    marginTop: 5,
  },
});

export default PromotionsScreen;
