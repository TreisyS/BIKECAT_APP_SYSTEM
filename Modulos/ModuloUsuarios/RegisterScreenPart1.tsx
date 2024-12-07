import React, { useState } from 'react';
import { View, TextInput, Text, TouchableOpacity, StyleSheet, Alert, Image, ImageBackground } from 'react-native';
import { RootParamList } from './Navigation/RootParamList';
import { useNavigation, NavigationProp } from '@react-navigation/native';
// Primera parte del registro
const RegisterScreenPart1: React.FC<{ onNext: (data: any) => void }> = ({ onNext }) => {
  const [fullName, setFullName] = useState<string>('');
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  

  const handleNext = () => {
    if (!fullName || !username || !password || !email || !phone) {
      Alert.alert('Error', 'Por favor, complete todos los campos.');
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      Alert.alert('Error', 'Por favor, ingrese un correo válido.');
    } else if (password.length < 6) {
      Alert.alert('Error', 'La contraseña debe tener al menos 6 caracteres.');
    } else {  
      onNext({ fullName, username, password, email, phone });
     
    }
  };

  return (
    <ImageBackground
      source={require('../images/wwwwwwwwww.png')} // Asegúrate de que la ruta sea válida
      style={styles.background}
    >
    <View style={styles.container}>

      {/* Imagen de encabezado */}
      <Image source={require('../images/Frame2rueda.png')} style={styles.logo} />
      <Text style={styles.title}>Bienvenido</Text>
      <Text style={styles.subtitle}>Hi, necesitas registrarte para hacer un alquiler.</Text>
      <Text style={styles.top}>Nombre Completo</Text>
      <TextInput
        style={styles.input}
        placeholder="Nombre Completo"
        value={fullName}
        onChangeText={setFullName}
      />
      <Text style={styles.top}>Nombre de Usuario</Text>
      <TextInput
        style={styles.input}
        placeholder="Nombre de Usuario"
        value={username}
        onChangeText={setUsername}
      />
      <Text style={styles.top}>Contraseña</Text>
      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <Text style={styles.top}>Correo Electronico</Text>
      <TextInput
        style={styles.input}
        placeholder="Correo Electrónico"
        value={email}
        onChangeText={setEmail}
      />
      <Text style={styles.top}>Número de Teléfono</Text>
      <TextInput
        style={styles.input}
        placeholder="Número de Teléfono"
        keyboardType="phone-pad"
        value={phone}
        onChangeText={setPhone}
      />
      <View style={styles.paginationContainer}>
        <View style={styles.paginationDotActive} />
        <View style={styles.paginationDot} />
      </View>
      <TouchableOpacity style={styles.button} onPress={handleNext}>
        <Text style={styles.buttonText}>Siguiente</Text>
      </TouchableOpacity>
    </View>  </ImageBackground>
  );
};

// Segunda parte del registro
const RegisterScreenPart2: React.FC<{ onBack: () => void; onRegister: (data: any) => void }> = ({ onBack, onRegister }) => {
  const [address, setAddress] = useState<string>('');
  const [city, setCity] = useState<string>('');
  const [idNumber, setIdNumber] = useState<string>('');
  const [sex, setSex] = useState<string>('');
  const [birthdate, setBirthdate] = useState<string>('');

  const handleRegister = () => {
    if (!address || !city || !idNumber || !sex || !birthdate) {
      Alert.alert('Error', 'Por favor, complete todos los campos.');
    } else {
      onRegister({ address, city, idNumber, sex, birthdate });
    }
  };

  return (
    <ImageBackground
      source={require('../images/wwwwwwwwww.png')} // Asegúrate de que la ruta sea válida
      style={styles.background}
    >
    <View style={styles.container}>
      {/* Imagen de encabezado */}
      <Image source={require('../images/Frame2rueda.png')} style={styles.logo} />
      <Text style={styles.title}>Bienvenido</Text>
      <Text style={styles.subtitle}>Hi, necesitas registrarte para hacer un alquiler.</Text>
        <Text style={styles.top}>Dirección</Text>
      <TextInput
        style={styles.input}
        placeholder="Dirección"
        value={address}
        onChangeText={setAddress}
      />
        <Text style={styles.top}>Ciudad</Text>
      <TextInput
        style={styles.input}
        placeholder="Ciudad"
        value={city}
        onChangeText={setCity}
      />
        <Text style={styles.top}>Cédula</Text>
      <TextInput
        style={styles.input}
        placeholder="Cédula"
        value={idNumber}
        onChangeText={setIdNumber}
      />
      <Text style={styles.label}>Sexo:</Text>
      <View style={styles.radioContainer}>
        <TouchableOpacity onPress={() => setSex('Femenino')} style={styles.radioButton}>
          <Text style={styles.radioText}>{sex === 'Femenino' ? '◉' : '○'} Femenino</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setSex('Masculino')} style={styles.radioButton}>
          <Text style={styles.radioText}>{sex === 'Masculino' ? '◉' : '○'} Masculino</Text>
        </TouchableOpacity>
      </View>
        <Text style={styles.top}>Fecha de Nacimiento</Text>
      <TextInput
        style={styles.input}
        placeholder="Fecha de Nacimiento"
        value={birthdate}
        onChangeText={setBirthdate}
      />
      <View style={styles.paginationContainer}>
        <View style={styles.paginationDot} />
        <View style={styles.paginationDotActive} />
      </View>
      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <Text style={styles.buttonText}>Registrarse</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.backButton} onPress={onBack}>
        <Text style={styles.backButtonText}>Atrás</Text>
      </TouchableOpacity>
    </View></ImageBackground>
  );
};

// Pantalla principal del registro
const RegisterScreen: React.FC = () => {
  const [step, setStep] = useState<number>(1);
  const [userData, setUserData] = useState<any>({});
const navigation = useNavigation<NavigationProp<RootParamList>>();
  const handleNext = (data: any) => {
    setUserData(data);
    setStep(2);
  };

  const handleBack = () => {
    setStep(1);
  };

  const handleRegister = (data: any) => {
    Alert.alert('Registro exitoso');
    console.log('Usuario registrado:', { ...userData, ...data });
      navigation.navigate('Home');
  };

  return step === 1 ? (
    <RegisterScreenPart1 onNext={handleNext} />
  ) : (
    <RegisterScreenPart2 onBack={handleBack} onRegister={handleRegister} />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  background:
  {
     flex: 1,
        resizeMode: 'cover', // Ajusta la imagen al tamaño del contenedor
        justifyContent: 'center',
  },
  logo: {
    marginTop:100,
    width: 82,
    height: 78,
    alignSelf: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
    color: '#fff',
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    color: '#d3d3d3',
    marginBottom: 30,
  },
  top:{
    fontSize: 16,
    textAlign: 'left',
    marginBottom:10,
    color: '#d3d3d3',
  },
  input: {
    height: 35,
    borderColor: '#d3d3d3',
    borderWidth: 1,
    marginBottom: 15,
    paddingLeft: 10,
    borderRadius: 8,
    backgroundColor: '#fff',
  },
  label: {
    color: '#fff',
    marginBottom: 10,
    fontSize: 16,
  },
  radioContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  radioButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  radioText: {
    color: '#fff',
    fontSize: 16,
  },
  button: {
    backgroundColor: '#72cbaa',
    paddingVertical: 10,
    height:45,
    borderRadius: 30,
    marginBottom: 15,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  backButton: {
    backgroundColor: '#555',
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: 'center',
  },
  backButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  paginationContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  paginationDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#555',
    marginHorizontal: 5,
  },
  paginationDotActive: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#72cbaa',
    marginHorizontal: 5,
  },
});

export default RegisterScreen;
