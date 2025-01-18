import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, Alert, ImageBackground } from 'react-native';
import BottomNavigation from '../ModuloEstaciones/Components/barrainferior';
import TopBar from '../ModuloEstaciones/Components/barrasuperior';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { RootParamList } from '../ModuloAlquiler/RoomParamList';


const ProfileScreen: React.FC = () => {
      const navigation = useNavigation<NavigationProp<RootParamList>>();
  const menuItems = [
    { id: 1, label: 'Editar perfil', icon: '👤', onPress: () => Alert.alert('Editar perfil') },
    { id: 2, label: 'Mis Alquileres', icon: '🚴', onPress: () => Alert.alert('Mis Alquileres') },
    { id: 3, label: 'Cartera', icon: '💳', onPress: () => Alert.alert('Cartera') },
    { id: 4, label: 'Invitar a amigos', icon: '🤝', onPress: () => Alert.alert('Invitar a amigos') },
    { id: 5, label: 'Ayuda', icon: '❓', onPress: () => Alert.alert('Ayuda') },
  ];

  const handleTabPress = (tab: string) => {
    console.log(`Tab seleccionado: ${tab}`);
    // Aquí puedes agregar lógica según la tab seleccionada, como navegar a diferentes pantallas
    switch (tab) {
      case 'home':
        navigation.navigate('Home');
        break;
      case 'support':
        navigation.navigate('Support');
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
    <ImageBackground
  source={require('../images/bbqq.png')} // Ruta de tu imagen de fondo
  style={styles.backgroundImage}
  imageStyle={{ opacity: 0.9 }} // Ajusta la opacidad de la imagen si es necesario
>

    <View style={styles.container}>
      {/* Barra superior */}
    <TopBar onSettingsPress={() => console.log('Configuración presionada')} />
      <ScrollView contentContainerStyle={styles.contentContainer}>
        {/* Encabezado del perfil */}
        <View style={styles.headerContainer}>
          <View style={styles.profileImageContainer}>
            <Image
              source={require('../images/aleisi.jpg')}
              style={styles.profileImage}
            />
          </View>
          <Text style={styles.userName}>Carlos Luis Sánchez</Text>
          <Text style={styles.userEmail}>treisychenoa@gmail.com</Text>
        </View>

        {/* Menú de opciones */}
        <View style={styles.menuContainer}>
          {menuItems.map((item) => (
            <TouchableOpacity key={item.id} style={styles.menuItem} onPress={item.onPress}>
              <Text style={styles.menuIcon}>{item.icon}</Text>
              <Text style={styles.menuLabel}>{item.label}</Text>
              <Text style={styles.menuArrow}>➔</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>

      {/* Barra inferior */}
      <BottomNavigation onTabPress={handleTabPress} />
    </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
    backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  contentContainer: {
    paddingHorizontal: 16,
    paddingTop: 20,
  },
  headerContainer: {
    alignItems: 'center',
    marginBottom: 30,
  },
  profileImageContainer: {
    marginTop:100,
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    marginBottom: 10,
  },
  profileImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  userName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000000',
  },
  userEmail: {
    fontSize: 14,
    color: '#000000',
  },
  menuContainer: {
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    paddingVertical: 10,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  menuIcon: {
    fontSize: 20,
    color: '#333',
    marginRight: 10,
  },
  menuLabel: {
    flex: 1,
    fontSize: 16,
    color: '#333',
  },
  menuArrow: {
    fontSize: 16,
    color: '#888',
  },
});

export default ProfileScreen;
