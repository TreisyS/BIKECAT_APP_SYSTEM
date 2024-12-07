import React from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { RootParamList } from './Navigation/RootParamList';
const WelcomeScreen: React.FC = () => {
const navigation = useNavigation<NavigationProp<RootParamList>>();

  const handleStart = () => {
    navigation.navigate('Login'); // Navegar a LoginScreen
  };

  return (
    <ImageBackground
      source={require('../images/Frame10.png')}
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Vive inteligente, muévete en bici.</Text>
        <Text style={styles.subtitle}>
          Reserva una bicicleta ahora en la app y disfruta de los descuentos que tenemos para ti.
        </Text>
        <TouchableOpacity style={styles.button} onPress={handleStart}>
          <Text style={styles.buttonText}>Empecemos</Text>
        </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('RegisterPart1')}>
          <Text style={styles.registerText}>¿Todavía no tienes una cuenta? Regístrate</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
   registerText: {
        marginTop: 10,
        textAlign: 'center',
        color: '#ffff',
    },
  container: {
    marginTop:500,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
    marginBottom: 30,
  },
  button: {
    backgroundColor: '#00b894',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 25,
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default WelcomeScreen;
