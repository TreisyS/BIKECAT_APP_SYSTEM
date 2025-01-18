import React, { useState } from 'react';
import { View, TextInput, Text, TouchableOpacity, StyleSheet, Alert, Image, ImageBackground, ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { RootParamList } from './Navigation/RootParamList';
import { useNavigation, NavigationProp } from '@react-navigation/native';


// Primera parte del registro
const RegisterScreenPart1: React.FC<{ onNext: (data: any) => void }> = ({ onNext }) => {
  const [fullName, setFullName] = useState<string>('');
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [countryCode, setCountryCode] = useState<string>('+1');

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


    <Text style={styles.tit}>Nombre</Text>
   <View style={styles.inputContainer}>

          <Image source={require('../images/icons/user.png')} style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Nombre Completo"
            value={fullName}
            onChangeText={setFullName}
            placeholderTextColor="#aaa"
          />
        </View>
 <Text style={styles.tit}>Nombre de Usuario</Text>
      <View style={styles.inputContainer}>
         <Image source={require('../images/icons/user.png')} style={styles.icon} />
         
          <TextInput
            style={styles.input}
            placeholder="Usuario"
            value={username}
            onChangeText={setUsername}
              placeholderTextColor="#aaa"
          />
        </View>
          <Text style={styles.tit}>Correo Electrónico</Text>

           <View style={styles.inputContainer}>

          <TextInput
            style={styles.input}
            placeholder="Correo Electrónico"
            value={email}
            onChangeText={setEmail}
            placeholderTextColor="#aaa"
          />
        </View>
 <Text style={styles.tit}>Contraseña</Text>
    <View style={styles.inputContainer}>
          <Image
            source={require('../images/icons/lock.png')} // Ruta a tu ícono de candado
            style={styles.icon}
          />
          <TextInput
            style={styles.input}
            placeholder="*********"
            secureTextEntry={!showPassword}
            value={password}
            onChangeText={setPassword}
            placeholderTextColor="#aaa"
          />
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Image
  source={
    showPassword
      ? require('../images/icons/eye.png') // Ruta al ícono para mostrar contraseña
      : require('../images/icons/eye-off.png') // Ruta al ícono para ocultar contraseña
  }
  style={styles.icon}
/>
          </TouchableOpacity>
        </View>

          <Text style={styles.top}>Telefono</Text>
           <View style={styles.inputContainer}>
        <Picker
            selectedValue={countryCode}
            onValueChange={(itemValue) => setCountryCode(itemValue)}
            style={styles.pickertlf} // Estilos del Picker
          >
            <Picker.Item label="+1" value="+1" />
            <Picker.Item label="+44" value="+44" />
            <Picker.Item label="+33" value="+33" />
            <Picker.Item label="+49" value="+49" />
          </Picker>

          <TextInput
            style={styles.input}
            placeholder="Número de Teléfono"
            keyboardType="phone-pad"
            value={phone}
            onChangeText={setPhone}
        
          />
          </View>
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
  const [country, setCountry] = useState<string>('');
  const handleRegister = () => {
    if (!address || !city || !idNumber || !sex || !birthdate) {
      Alert.alert('Error', 'Por favor, complete todos los campos.');
    } else {
      onRegister({ address, city, idNumber, sex, birthdate });
    }
  };
type Country = 'dom' | 'us' | 'es';
const countries = [
  { label: 'República Dominicana', value: 'dom' },
  { label: 'Estados Unidos', value: 'us' },
  { label: 'España', value: 'es' },
];

const cities: Record<Country, string[]> = {
  dom: ['Santo Domingo', 'Santiago', 'Puerto Plata'],
  us: ['New York', 'Los Angeles', 'Miami'],
  es: ['Madrid', 'Barcelona', 'Valencia'],
};

  return (
    <ImageBackground
      source={require('../images/wwwwwwwwww.png')} // Asegúrate de que la ruta sea válida
      style={styles.background}
    >
  <ScrollView contentContainerStyle={styles.scrollContainer}>
     <View style={styles.container}>
      {/* Imagen de encabezado */}
      <Image source={require('../images/Frame2rueda.png')} style={styles.logo2} />
      <Text style={styles.title}>Bienvenido</Text>
      <Text style={styles.subtitle}>Hi, necesitas registrarte para hacer un alquiler.</Text>
       
       
     {/* Dirección */}
      <Text style={styles.top}>Dirección</Text>
       <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        placeholder="Dirección"
        value={address}
        onChangeText={setAddress}
         placeholderTextColor="#aaa"

      /></View>
        {/* País */}
   {/* País */}
        <Text style={styles.top}>País</Text>
        <View style={styles.inputContainer}>
          <Picker selectedValue={country} onValueChange={(itemValue) => setCountry(itemValue as Country)} style={styles.picker}>
            {countries.map((item) => (
              <Picker.Item key={item.value} label={item.label} value={item.value} />
            ))}
          </Picker>
        </View>
 {/* Ciudad - basados en el país seleccionado */}
        <Text style={styles.top}>Ciudad</Text>
        <View style={styles.inputContainer}>
          <Picker selectedValue={city} onValueChange={(itemValue) => setCity(itemValue)} style={styles.picker} enabled={!!country}>
       
{country && cities[country as Country].map((item) => (
  <Picker.Item key={item} label={item} value={item} />
))}

          </Picker>
        </View>
  {/* Cédula / Número de Identificación */}
      <Text style={styles.top}>Número de Identificación</Text>
       <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        placeholder="Número de Identificación"
        value={idNumber}
        onChangeText={setIdNumber}
            placeholderTextColor="#aaa"
      />
      </View>
      <Text style={styles.label}>Sexo:</Text>
      <View style={styles.radioContainer}>
        <TouchableOpacity onPress={() => setSex('Femenino')} style={styles.radioButton}>
          <Text style={styles.radioText}>{sex === 'Femenino' ? '◉' : '○'} Femenino</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setSex('Masculino')} style={styles.radioButton}>
          <Text style={styles.radioText}>{sex === 'Masculino' ? '◉' : '○'} Masculino</Text>
        </TouchableOpacity>
      </View>
        {/* Fecha de Nacimiento */}
      <Text style={styles.top}>Fecha de Nacimiento</Text>
         <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        placeholder="Fecha de Nacimiento"
        value={birthdate}
        onChangeText={setBirthdate}
        keyboardType="default"
       
      /></View>
      <View style={styles.paginationContainer}>
        <View style={styles.paginationDot} />
        <View style={styles.paginationDotActive} />
      </View>
      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <Text style={styles.buttonText}>Registrarse</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.backButton} onPress={onBack}>
        <Text style={styles.backButtonText}>Atrás</Text>
      </TouchableOpacity>   </View>
    </ScrollView></ImageBackground>
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
  },scrollContainer: {
    flexGrow: 1,
    justifyContent: 'flex-start', // Ajusta la alineación hacia arriba si el contenido es pequeño
  },
  background:
  {
     flex: 1,
        resizeMode: 'cover', // Ajusta la imagen al tamaño del contenedor
        justifyContent: 'center',
  },
  dropdown: {
    paddingHorizontal: 10,
  },
  dropdownText: {
    fontSize: 16,
  },
  pickertlf: {
    width: '24%', // Puedes ajustar el tamaño aquí si lo necesitas
    height: 50,
    color: '#000',
    backgroundColor: '#fff',
  
    borderRadius: 8,
  },
  picker: {
    width: '30%', // Puedes ajustar el tamaño aquí si lo necesitas
    height: 50,
    color: '#000',
    backgroundColor: '#fff',
    marginHorizontal: 10,
    borderRadius: 8,
  },
  phoneInput: {
    flex: 1,
    height: 40,
    paddingLeft: 10,
  },
  logo: {
    marginTop:130,
    width: 82,
    height: 78,
    alignSelf: 'center',
    marginBottom: 20,
  },
   logo2: {
    marginTop:120,
    width: 82,
    height: 78,
    alignSelf: 'center',
    marginBottom: 20,
  },
  
   eyeIcon: {
    width: 20,
    height: 20,
    marginLeft: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
    color: '#fff',
  },
  phoneContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderColor: '#d3d3d3',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 15,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderColor: '#d3d3d3',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 15,
    paddingLeft: 10,
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
        flex: 1,
        height: 40,
        fontSize: 16,
        color: '#333',
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
  },tit:{
fontSize:14,
        textAlign: 'left',
        marginBottom: 15,
        color: '#fff',
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
  },icon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
});

export default RegisterScreen;