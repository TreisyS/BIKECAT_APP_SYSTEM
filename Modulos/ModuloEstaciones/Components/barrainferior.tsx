import React from 'react';
import { View, TouchableOpacity, StyleSheet, Image } from 'react-native';
//Modulos/ModuloEstaciones/Components/barrainferior.tsx
// Componente reutilizable para la barra de navegación inferior
const BottomNavigation: React.FC<{ onTabPress: (tab: string) => void }> = ({ onTabPress }) => {
  return (
    <View style={styles.navigationContainer}>
      <TouchableOpacity onPress={() => onTabPress('home')} style={styles.iconContainer}>
        <Image source={require('../../images/home.png')} style={styles.icon} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => onTabPress('support')} style={styles.iconContainer}>
        <Image source={require('../../images/help.png')} style={styles.icon} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => onTabPress('bikes')} style={[styles.iconContainer, styles.activeIconContainer]}>
        <Image source={require('../../images/reserva.png')} style={styles.icon} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => onTabPress('discounts')} style={styles.iconContainer}>
        <Image source={require('../../images/rr.png')} style={styles.icon} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => onTabPress('profile')} style={styles.iconContainer}>
        <Image source={require('../../images/Ellipse8.png')} style={styles.icon} />
      </TouchableOpacity>
    </View>
  );
};

// Estilos del componente de navegación inferior
const styles = StyleSheet.create({
  navigationContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 10,
    backgroundColor: '#01080f',
  },
  iconContainer: {
    padding: 10,
  },
  activeIconContainer: {
    backgroundColor: '#ccc',
    borderRadius: 50,
  },
  icon: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },
});

export default BottomNavigation;