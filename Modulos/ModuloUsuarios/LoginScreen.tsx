import React, { useState } from 'react';
import { View, TextInput, Text, TouchableOpacity, Alert, Image, ImageBackground } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import stylelogin from '../Styles/stylelogin';
import { RootParamList } from './Navigation/RootParamList';

const LoginScreen: React.FC = () => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string>('');
  const navigation = useNavigation<NavigationProp<RootParamList>>();

  const handleLogin = () => {
    if (!username || !password) {
      setError('Por favor, ingrese ambos campos.');
    } else if (!/\S+@\S+\.\S+/.test(username)) {
      setError('Por favor, ingrese un correo válido.');
    } else if (password.length < 6) {
      setError('La contraseña debe tener al menos 6 caracteres.');
    } else {
      setError('');
      Alert.alert('Inicio de sesión exitoso');
      navigation.navigate('Estacion');
    }
  };

  return (
    <ImageBackground
      source={require('../images/Frame9.png')} // Asegúrate de que la ruta sea válida
      style={stylelogin.background}
    >
      <View style={stylelogin.overlay}>  
        {/* Imagen centrada antes del título */}
        <View >
          <Image 
            source={require('../images/Frame2rueda.png')} // Reemplaza con la ruta de tu imagen
            style={stylelogin.image}
          />
        </View>

        <Text style={stylelogin.title}>Bienvenido de nuevo</Text>
        
        {error ? <Text style={stylelogin.error}>{error}</Text> : null}
        
        <TextInput
          style={stylelogin.input}
          placeholder="Correo electrónico"
          value={username}
          onChangeText={setUsername}
          keyboardType="email-address"
        />
        
        <TextInput
          style={stylelogin.input}
          placeholder="Contraseña"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
        
        <View style={stylelogin.optionsContainer}>
          <TouchableOpacity style={stylelogin.rememberMeContainer}>
            <Text style={stylelogin.rememberMeText}>Recuérdame</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={stylelogin.forgotPasswordText}>¿Olvidaste la contraseña?</Text>
          </TouchableOpacity>
        </View>
        
        <TouchableOpacity style={stylelogin.botonentrar} onPress={handleLogin}>
          <Text style={stylelogin.botonText}>Entrar</Text>
        </TouchableOpacity>
        
        <TouchableOpacity onPress={() => navigation.navigate('RegisterPart1')}>
          <Text style={stylelogin.registerText}>¿Todavía no tienes una cuenta? Regístrate</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default LoginScreen;
