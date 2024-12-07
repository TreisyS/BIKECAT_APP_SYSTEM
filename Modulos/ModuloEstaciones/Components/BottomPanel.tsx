//Modulos/ModuloEstaciones/Components/BottomPanel.tsx

import React from "react";
import { View, TouchableOpacity, Text, StyleSheet, Image} from "react-native";
import {BottomPanelProps } from "../interfacesEstaciones/BottomPanelProps";
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { RootParamList } from "../../ModuloUsuarios/Navigation/RootParamList";  // Ajusta el camino si es necesario
//import TopBar from '../Components/barrasuperior'; 
const BottomPanel: React.FC<BottomPanelProps> = ({}) => {
 const navigation = useNavigation<NavigationProp<RootParamList>>();

  return (
    <View>
 <View style={styles.panel}>
    <TouchableOpacity style={styles.button1}>
      <Text style={styles.buttonText}>Mi ubicación</Text>
 <Image source={require('../../images/localizacion.png')} style={styles.iconc} />
    </TouchableOpacity>  <TouchableOpacity style={styles.button1}>
      <Text style={styles.buttonText}>Parque Mirador Sur</Text>
      <Image source={require('../../images/arrow.png')} style={styles.icona} />
    </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')}>
<Image source={require('../../images/ii.png')} style={styles.iconb} />
<Text style={styles.buttonText}>Comenzar mi viaje en bici</Text>
<Image source={require('../../images/ddddddddddd.png')} style={styles.icon} />
      </TouchableOpacity>
    </View>
    </View>
  );
};

const styles = StyleSheet.create({
  button1:{
 backgroundColor: "#ffff",
    padding: 15,
    margin:10,
    borderRadius: 35,
    alignItems: "center",
    flexDirection: 'row',
  },
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
    backgroundColor: "#18204e9a",
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
  buttonText: {
    color: "#00000",
    fontWeight: "bold",
    marginLeft: 20,
    marginRight: 30
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
