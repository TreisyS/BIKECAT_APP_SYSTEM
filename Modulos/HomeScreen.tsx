import React from 'react';
import { View, Text, StyleSheet, Alert, Image, TouchableOpacity, ScrollView, ImageBackground } from 'react-native';
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
    Alert.alert('Navegando a la pantalla de estaciones');
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
    <View style={{ flex: 1 }}>
      {/* Barra superior */}
      <TopBar onSettingsPress={() => console.log('Configuración presionada')} />

      {/* Contenido principal */}
      <ScrollView style={styles.container}>
        <View style={styles.headerContainer}>
  <Text style={styles.headerTitle}>StartCat</Text>
  <View style={styles.userDetailsContainer}>
    <Text style={styles.userDetails}>Cédula: 000-00000000-0</Text>
    <Text style={styles.userDetails}>Reservas: 0099</Text>
  </View>
</View>
 <View style={styles.bannerContainer}>
          <Image source={require('./images/uuuuiii.png')} style={styles.bannerImage} />     
        </View>

        <View style={styles.mainContent}>
           <TouchableOpacity style={styles.largeButton} onPress={handleViewBikes}>
            <ImageBackground
              source={require('./images/verbicis.png')}
              style={styles.backgroundImage}
              imageStyle={{ borderRadius: 10 }}
            >
            </ImageBackground>
          </TouchableOpacity>
 {/* Botones de Estaciones y Reservas */}
          <View style={styles.smallButtonsContainer}>
            <TouchableOpacity style={styles.smallButtonestacione} onPress={handleViewStations}>
              <ImageBackground
                source={require('./images/estacioneframe.png')}
                style={styles.smallBackgroundImage}
                imageStyle={{ borderRadius: 10 }}
              >
               
              </ImageBackground>
            </TouchableOpacity>

            <TouchableOpacity style={styles.smallButtonreservi} onPress={handleMakeReservation}>
              <ImageBackground
                source={require('./images/reservi.png')}
                style={styles.smallBackgroundImage}
                imageStyle={{ borderRadius: 10 }}
              >   
              </ImageBackground>
            </TouchableOpacity>
        </View>
        </View>

        <View style={styles.reservationsContainer}>
          <Text style={styles.reservationsTitle}>Reservas Activas</Text>
          {/* Contenedor de tarjetas en fila */}
  <View style={styles.reservationsRow}>
    {/* Tarjeta 1 */}
    <View style={styles.reservationCard}>
      <Image source={require('./images/bicisp.png')} style={styles.cardIcon} />
      <Text style={styles.reservationText}>Aro 16</Text>
      <Text style={styles.reservationTime}>Salida: 8:00am</Text>
      <TouchableOpacity
        style={styles.editButton}
        onPress={() => navigation.navigate('CancelarEditar')}
      >
        <Text style={styles.editButtonText}>Editar</Text>
      </TouchableOpacity>
    </View>

    {/* Tarjeta 2 */}
    <View style={styles.reservationCard}>
      <Image source={require('./images/bicisp.png')} style={styles.cardIcon} />
      <Text style={styles.reservationText}>Aro 12</Text>
      <Text style={styles.reservationTime}>Salida: 2:00pm</Text>
      <TouchableOpacity
        style={styles.editButton}
        onPress={() => navigation.navigate('CancelarEditar')}
      >
        <Text style={styles.editButtonText}>Editar</Text>
      </TouchableOpacity>
    </View>

    {/* Botón para agregar una nueva tarjeta */}
    <TouchableOpacity
      style={styles.addReservationCard}
      onPress={() => navigation.navigate('Catalogo')}
    >
      
      <Text style={styles.addText}>+</Text>
    </TouchableOpacity>
  </View>
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
    backgroundColor: '#171616',
  },
   userDetailsContainer: {
    alignItems: 'flex-end',
    marginRight:22,
  },
reservationsRow: {
  flexDirection: 'row',
  justifyContent: 'space-between', // Ajusta los espacios entre tarjetas
  alignItems: 'flex-start', // Alinea las tarjetas en la parte superior
},

reservationCard: {
  backgroundColor: '#d9d9d9e6',
  padding: 10, // Espacio interno
  borderRadius: 10,
  marginRight: 10, // Espaciado entre tarjetas
  alignItems: 'center', // Centrar los elementos dentro de la tarjeta
  width: '35%', // Ajusta el ancho para que quepan tres tarjetas por fila
},

cardIcon: {
  width: 40, // Ajusta el tamaño del ícono
  height: 40,
  marginBottom: 8, // Espaciado entre el ícono y el texto
},

addReservationCard: {
  backgroundColor: '#dfdbdb19',
  borderRadius: 10,
  alignItems: 'center', // Centra los elementos del botón
  justifyContent: 'center',
  width: '26%',
  height: 146,
  padding: 10,
},


  headerContainer: {
  marginTop:20,
  marginLeft:10,
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center',
    padding: 10,
    
  },
  headerTitle: {
    fontSize: 28,
    color: '#fff',
    fontWeight: 'bold',
  },cardContent: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
},mainContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginTop: 20,
  },
  largeButton: {
    width: '50%',
    height: 250,
    borderRadius: 10,
    overflow: 'hidden',
  },
  backgroundImage: {
    flex: 1,
    justifyContent: 'flex-end',
    padding: 10,
  },
  largeButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  smallButtonsContainer: {
    width: '50%',
    justifyContent: 'space-between',
  },
  smallButtonestacione:{
      height: 104,
    width:186,
    marginLeft:12,
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: 12,
    resizeMode: 'cover',
  },
smallButtonreservi:{
      height: 130,
    width:186,
    marginLeft:12,
    borderRadius: 10,
    overflow: 'hidden',
      resizeMode: 'cover',
  },
  smallBackgroundImage: {
    flex: 1,
    justifyContent: 'center',
    padding: 10,
  },
editButton: {
  backgroundColor: '#081f29',
  paddingVertical: 5,
  paddingHorizontal: 10,
  borderRadius: 5,
},
editButtonText: {
  color: '#fff',
  fontSize: 14,
},
  smallButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
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
    borderRadius:20,
    width: 380,
    height: 190,
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
    marginBottom:20,
  },
  reservationsTitle: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 20,
  },

  reservationText: {
    color: '#182B39',
    fontSize: 18,
    fontWeight: 'bold',
  },
  reservationTime: {
    color: '#000000',
    fontSize: 12,
    marginBottom:7,
  },
 
  addText: {
    color: '#fff',
    fontSize: 36,
    fontWeight: 'bold',
  },
});

export default HomeScreen;
