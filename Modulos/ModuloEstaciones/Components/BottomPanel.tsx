//Modulos/ModuloEstaciones/Components/BottomPanel.tsx

import React from "react";
import { View, Alert, TouchableOpacity, Text, StyleSheet, Image} from "react-native";
import {BottomPanelProps } from "../interfacesEstaciones/BottomPanelProps";
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { RootParamList } from "../../ModuloUsuarios/Navigation/RootParamList";  // Ajusta el camino si es necesario

const BottomPanel: React.FC<BottomPanelProps> = ({
  onFocusUserLocation,
  onSwitchStation,
  currentStationIndex,
}) => {

  const handleStartTrip = () => {
  const stationNumber = currentStationIndex + 1; // La estación actual (1-indexed)
  const message = `BIENVENIDO A LA ESTACIÓN DEL PARQUE ${stationNumber}`;
  Alert.alert(
    'Bienvenido', 
    message,
    [{ text: 'OK' }]
  );
};

 const navigation = useNavigation<NavigationProp<RootParamList>>();

  return (
    <View>
 <View style={styles.panel}>
<TouchableOpacity style={styles.button1} onPress={onFocusUserLocation}>
  <Text style={styles.buttonTextL}>Mi localización</Text>
  <Image source={require('../../images/localizacion.png')} style={styles.iconc} />
</TouchableOpacity>

     <TouchableOpacity style={styles.cambioEstacion} onPress={onSwitchStation}>
  <Text style={styles.buttonTextP}>Selecciona Estación</Text>
  <Image source={require('../../images/arrow.png')} style={styles.icona} />
</TouchableOpacity>


      <TouchableOpacity
  style={styles.button}
  onPress={() => {
    handleStartTrip();
    navigation.navigate('Home');
  }}
>
  <Image source={require('../../images/ii.png')} style={styles.iconb} />
  <Text style={styles.buttonText}>Comenzar mi viaje en bici</Text>
  <Image source={require('../../images/ddddddddddd.png')} style={styles.icon} />
</TouchableOpacity>


    </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cambioEstacion:{
 backgroundColor: "#ffff",
    padding: 15,
    margin:10,
    borderRadius: 35,
    alignItems: "center",
    flexDirection: 'row',
  },
  button1:{backgroundColor: "#ffff",
    padding: 15,
    margin:10,
    borderRadius: 35,
    alignItems: "center",
    flexDirection: 'row',},
    container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  panel: {
    marginTop: 80, // Ajuste para el tamaño de la TopBar, puede que necesites modificarlo según el tamaño real de tu TopBar
    position: "absolute",
    bottom: 10,
    left: 10,
    right: 10,
    backgroundColor: "#33343894",
    padding: 15,
    borderRadius: 15,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 50,
    shadowOffset: { width: 0, height: 2 },
  },
  input: {
    marginBottom: 10,
    borderBottomWidth: 1,
    borderColor: "#ccc",
    padding: 5,
  },
  button: {
    backgroundColor: "#3b4f5e",
    padding: 15,
    margin:10,
    borderRadius: 35,
    alignItems: "center",
    flexDirection: 'row',
    height: 74,

  },
  buttonTextL: {
    color: "#00000",
    fontWeight: "bold",
    marginLeft: 20,
    marginRight: 150,
  },
   buttonTextP: {
    color: "#00000",
    fontWeight: "bold",
    marginLeft: 20,
    marginRight: 120,
  },
    buttonText: {
    color: "#00000",
    fontWeight: "bold",
    marginLeft: 20,
    marginRight: 25,
  },
  iconc: {
    width: 23,
    height: 32,
  },
   icona: {
    width: 28,
    height: 28,
  },
   iconb: {
    width: 65,
    height: 65,
  },
  icon: {
     width: 35,
    height: 36,
  },
});

export default BottomPanel;
