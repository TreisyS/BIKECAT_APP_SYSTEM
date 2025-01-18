import React, { useState } from 'react';
import { View, Text, Alert, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import TopBar from '../ModuloEstaciones/Components/barrasuperior';
import BottomNavigation from '../ModuloEstaciones/Components/barrainferior';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { RootParamList } from '../ModuloAlquiler/RoomParamList';


const BikeModCancScreen: React.FC = () => {
  const navigation = useNavigation<NavigationProp<RootParamList>>();
  const [category, setCategory] = useState<string>('MTB');
  const [quantity, setQuantity] = useState<number>(1);
  const [startTime, setStartTime] = useState<string>('Sábado, 10:00 AM');
  const [endTime, setEndTime] = useState<string>('Sábado, 12:00 AM');


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
const cancelarAhora = () => {
  Alert.alert(
    'Confirmar cancelación',
    '¿Está seguro que desea cancelar esta reserva?',
    [
      {
        text: 'No',
        onPress: () => console.log('Cancelación cancelada'),
        style: 'cancel',
      },
      {
        text: 'Sí',
        onPress: () => {
          // Lógica para cancelar la reserva
          console.log('Reserva cancelada');
          // Puedes agregar aquí la acción para cancelar la reserva
        },
      },
    ],
    { cancelable: false }
  );
};

const modificarAhora = () => {
  Alert.alert(
    'Confirmar modificación',
    '¿Está seguro que desea modificar esta reserva?',
    [
      {
        text: 'No',
        onPress: () => Alert.alert('Modificación cancelada'),
        style: 'cancel',
      },
      {
        text: 'Sí',
        onPress: () => {
          // Lógica para modificar la reserva
          Alert.alert('Reserva modificada');
          // Puedes agregar aquí la acción para modificar la reserva
        },
      },
    ],
    { cancelable: false }
  );
};

  return (
    <View style={styles.container}>
      <TopBar onSettingsPress={() => console.log('Ir a configuración')} />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.imageContainer}>
          <Image source={require('../images/Framddd.png')} style={styles.bikeImage} />
        </View>
        <View style={styles.detailsContainer}>
          <Text style={styles.bikeName}>Mountain Bike</Text>
          <Text style={styles.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras dictum nisi eu egestas finibus.</Text>
        </View>

        <View style={styles.optionsContainer}>
          <View style={styles.rowContainer}>
            <Picker
              selectedValue={category}
              style={styles.picker}
              onValueChange={(itemValue: string) => setCategory(itemValue)}
            >
              <Picker.Item label="MTB" value="MTB" />
              <Picker.Item label="Playera" value="Playera" />
              <Picker.Item label="Dobles" value="Dobles" />
            </Picker>
            <Picker
              selectedValue={quantity}
              style={styles.picker}
              onValueChange={(itemValue: number) => setQuantity(itemValue)}
            >
              <Picker.Item label="1" value={1} />
              <Picker.Item label="2" value={2} />
              <Picker.Item label="3" value={3} />
            </Picker>
          </View>
          <View style={styles.rowContainer}>
            <Picker
              selectedValue={startTime}
              style={styles.picker}
              onValueChange={(itemValue: string) => setStartTime(itemValue)}
            >
              <Picker.Item label="Sábado, 10:00 AM" value="Sábado, 10:00 AM" />
              <Picker.Item label="Sábado, 11:00 AM" value="Sábado, 11:00 AM" />
            </Picker>
            <Picker
              selectedValue={endTime}
              style={styles.picker}
              onValueChange={(itemValue: string) => setEndTime(itemValue)}
            >
              <Picker.Item label="Sábado, 12:00 AM" value="Sábado, 12:00 AM" />
              <Picker.Item label="Sábado, 01:00 PM" value="Sábado, 01:00 PM" />
            </Picker>
          </View>
        </View>

       <View style={styles.actionsContainer}>
 <View style={styles.actionsContainer}>
  <Text style={styles.totalCost}>Costo Total: RD$600.00</Text>
  <View style={styles.buttonContainer}>
    <TouchableOpacity style={styles.buyButton} onPress={cancelarAhora}>
      <Text style={styles.buyButtonText}>CANCELAR RESERVA</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.cartButton} onPress={modificarAhora}>
      <Text style={styles.cartButtonText}>MODIFICAR RESERVA</Text>
    </TouchableOpacity>
  </View>
</View>


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
    backgroundColor: '#1c1c1e',
  },
  scrollContainer: {
    paddingHorizontal: 20,
    paddingBottom: 100,
  },
  imageContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
   buttonContainer: {
    marginTop: 20,
    flexDirection: 'row',  // Organiza los botones en una fila
    justifyContent: 'center',  // Centra los botones
    width: '100%',
  },
  bikeImage: {
    width: 500,
    height: 350,
    resizeMode: 'contain',
  },
  price: {
    color: '#fff',
    fontSize: 16,
    marginTop: 10,
  },
  detailsContainer: {
    marginBottom: 20,
  },
  bikeName: {
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  description: {
    color: '#d3d3d3',
    fontSize: 14,
    textAlign: 'center',
    marginTop: 10,
  },
  optionsContainer: {
    marginBottom: 20,
  },
  rowContainer: {
    flexDirection: 'row',  // Organiza los elementos en una fila
    alignItems: 'center',  // Alinea los elementos verticalmente en el centro
    justifyContent: 'space-between',  // Espacio entre los elementos
    width: '100%',
    marginBottom: 20,
  },
  picker: {
    flex: 1,
    height: 50,
    color: '#fff',
    backgroundColor: '#333',
    marginHorizontal: 5,
  },
 actionsContainer: {
    marginBottom: 30,
    alignItems: 'center',  // Alinea los elementos horizontalmente
  },
  totalCost: {
    fontSize: 16,  // Reducir el tamaño del texto
    color: '#fff',
    marginRight: 10,  // Espacio entre el costo total y los botones
   textAlign:'center' // Permite que el texto se ajuste y no ocupe más espacio del necesario
  },
  buyButton: {
     backgroundColor: '#72cbaa',
     width:150,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 30,
    marginRight: 10,
    alignItems:'center',
  },
  buyButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
  cartButton: {
    backgroundColor: '#001820',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 30,
  },
  cartButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default BikeModCancScreen;