import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

// Componente reutilizable para la barra superior
const TopBar: React.FC<{ onSettingsPress: () => void }> = ({ onSettingsPress }) => {
  return (
    <View style={styles.topBarContainer}>
      {/* Logo de la aplicación */}
      <Image source={require('../../images/remakeoficial3.png')} style={styles.logo} /> 
      {/* Botón de configuración y perfil del usuario */}
      <View style={styles.rightContainer}>
        <TouchableOpacity onPress={onSettingsPress} style={styles.settingsButton}>
          <Image source={require('../../images/setting.png')} style={styles.settingsIcon} />
        </TouchableOpacity>
        <View style={styles.profileContainer}>
          <Text style={styles.username}>TreisyCat</Text>
          <Image source={require('../../images/Ellipse8.png')} style={styles.profileImage} />
        </View>
      </View>
    </View>
  );
};

// Estilos del componente de la barra superior
const styles = StyleSheet.create({
  topBarContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: '#01080f',
  },
  logo: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },
  rightContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  settingsButton: {
    marginRight: 15,
  },
  settingsIcon: {
    width: 25,
    height: 25,
    resizeMode: 'contain',
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  username: {
    color: '#fff',
    marginRight: 10,
    fontSize: 16,
  },
  profileImage: {
    width: 30,
    height: 30,
    borderRadius: 15,
    resizeMode: 'cover',
  },
});

export default TopBar;