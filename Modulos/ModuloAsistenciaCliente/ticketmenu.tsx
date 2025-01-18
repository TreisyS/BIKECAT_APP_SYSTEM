import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, Alert} from 'react-native';
import BottomNavigation from '../ModuloEstaciones/Components/barrainferior';
import TopBar from '../ModuloEstaciones/Components/barrasuperior';

import { useNavigation, NavigationProp } from '@react-navigation/native';
import { RootParamList } from '../ModuloAlquiler/RoomParamList'; // Asegúrate de que este archivo exista

const CustomerSupportScreen: React.FC = () => {
  const handleOpenTicket = () => {
    Alert.alert('Viajando hacia un nuevo ticket')
    navigation.navigate('Ticket');
  };
  const navigation = useNavigation<NavigationProp<RootParamList>>();

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
  return (
    <View style={styles.container}>
      {/* Barra superior */}
           <TopBar onSettingsPress={() => console.log('Configuración presionada')} />

      <ScrollView contentContainerStyle={styles.contentContainer}>
        <Image
        source={require('../images/Frame23.png')} style={styles.banner}
        />
        {/* Información del usuario */}
        <View style={styles.userInfoContainer}>
          <View style={styles.userDetails}>
            <Text style={styles.userName}>Carlos Luis Sánchez</Text>
            <Text style={styles.userDetailsText}>Cédula: 000-0000000-0</Text>
            <Text style={styles.userDetailsText}>Email: testytest@gmail.com</Text>
          </View>
          <Image
            source={require('../images/Ellipse8.png')}
            style={styles.userImage}
          />
        </View>

        {/* Opciones generales */}
        <TouchableOpacity style={styles.optionButton}>
          <Text style={styles.optionText}>Términos y Condiciones</Text>
          <View style={styles.iconContainer}>
            <Text style={styles.iconText}>📄</Text>
          </View>
        </TouchableOpacity>

        {/* Sección de ayuda */}
        <Text style={styles.helpTitle}>¿Necesitas ayuda?</Text>
        <TouchableOpacity style={styles.helpButton} onPress={handleOpenTicket}>
          <Text style={styles.helpButtonText}>Abrir nuevo ticket</Text>
          <View style={styles.iconContainer}>
            <Text style={styles.iconText}>❓</Text>
          </View>
        </TouchableOpacity>

        {/* Historial de tickets */}
        <View style={styles.historyContainer}>
          <Text style={styles.historyTitle}>Hoy</Text>
          <TouchableOpacity style={styles.ticketItem}>
            <Text style={styles.ticketText}>Alquiler gigantesco</Text>
            <Text style={styles.ticketArrow}>➔</Text>
          </TouchableOpacity>
          <Text style={styles.historyTitle}>13-09-24</Text>
          <TouchableOpacity style={styles.ticketItem}>
            <Text style={styles.ticketText}>¿Podría traerme la bici que alquilé?</Text>
            <Text style={styles.ticketArrow}>➔</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* Barra inferior */}
      <BottomNavigation onTabPress={handleTabPress} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: '#121212',
  },
  banner:{
  width: 466,
    height: 127,
    marginBottom: 16,

  },
  contentContainer: {
    padding: 16,
  },
  userInfoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#667B8F',
    borderRadius: 10,
    padding: 16,
    marginBottom: 20,
  },
  userDetails: {
    flex: 1,
  },
  userName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#ffffff',
  },
  userDetailsText: {
    fontSize: 14,
    color: '#ffffff',
  },
  userImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginLeft: 16,
  },
  optionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#cfe3ff',
    borderRadius: 10,
    padding: 16,
    marginBottom: 20,
  },
  optionText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconText: {
    fontSize: 20,
  },
  helpTitle: {
  fontSize: 16,
  fontWeight: 'bold',
  marginBottom: 10,
  color: '#ffffff', // Cambié el color a blanco
},

  helpButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#cfe3ff',
    borderRadius: 10,
    padding: 16,
    marginBottom: 20,
  },
  helpButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  historyContainer: {
    backgroundColor: '#cfe3ff',
    borderRadius: 10,
    padding: 16,
  },
  historyTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  ticketItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  ticketText: {
    fontSize: 14,
  },
  ticketArrow: {
    fontSize: 16,
    color: '#555',
  },
});

export default CustomerSupportScreen;
