import React, { useState } from 'react';
import { View, Text, StyleSheet, Alert, TextInput, TouchableOpacity, Image, ScrollView } from 'react-native';
import BottomNavigation from '../ModuloEstaciones/Components/barrainferior';
import TopBar from '../ModuloEstaciones/Components/barrasuperior';

import { useNavigation, NavigationProp } from '@react-navigation/native';
import { RootParamList } from '../ModuloAlquiler/RoomParamList'; // Asegúrate de que este archivo exista

const SupportTicketScreen: React.FC = () => {

    const navigation = useNavigation<NavigationProp<RootParamList>>();
  const [category, setCategory] = useState<string>('');
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');

  const handleSendTicket = () => {
    if (!category || !title || !description) {
      Alert.alert('Por favor, completa todos los campos.');
      return;
    }
    Alert.alert('¡Ticket enviado con éxito!');
    setCategory('');
    setTitle('');
    setDescription('');
  };

  const handleCancel = () => {
    setCategory('');
    setTitle('');
    setDescription('');
  };
 const handleCategorySelect = (selectedCategory: string) => {
    setCategory(selectedCategory);
    // Si no es "Otro", automáticamente llenar el título.
    if (selectedCategory !== 'Otro') {
      setTitle(selectedCategory);
    } else {
      setTitle(''); // Limpiar el título para "Otro"
    }
  };

const handleTabPress = (tab: string) => {
  console.log(`Tab seleccionado: ${tab}`);
  switch (tab) {
    case 'home':
      navigation.navigate('Home');
      break;
    case 'support':
      navigation.navigate('Support');
      break;
    case 'bikes':
      navigation.navigate('Catalogo');
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
    <View style={styles.container}>
      {/* Barra superior */}
      <TopBar onSettingsPress={() => console.log('Configuración presionada')} />


      <ScrollView contentContainerStyle={styles.contentContainer}>
        {/* Encabezado */}
        <Text style={styles.greeting}>Hi Treisy!</Text>
        <Text style={styles.date}>14/12/2024</Text>
        <Text style={styles.message}>Espero estés bien</Text>
      <View style={styles.helpCard}>
  <View style={styles.textContainer}>
    <Text style={styles.helpTitle}>Bienvenido/a!</Text>
    <Text style={styles.helpSubtitle}>Permítenos ayudarte</Text>
  </View>
  <Image source={require('../images/weje.png')} />
</View>

    {/* Selección de categoría */}
        <Text style={styles.sectionTitle}>¿Cuál es la situación?</Text>
        <View style={styles.categoryContainer}>
          {['Problema técnico', 'Solicitud de información', 'Incidente', 'Otro'].map((item) => (
            <TouchableOpacity
              key={item}
              style={[
                styles.categoryButton,
                category === item && styles.categoryButtonSelected,
              ]}
              onPress={() => handleCategorySelect(item)}
            >
              <Text style={styles.categoryText}>{item}</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Formulario */}
        <Text>Escribe la situación</Text>
        <TextInput
          style={styles.input}
          placeholder="Escribe la situación"
          value={title}
          onChangeText={setTitle}
          editable={category === 'Otro'} // Habilitar solo si la categoría es "Otro"
        />

        <Text>Describe la situación</Text>
        <TextInput
          style={[styles.input, styles.textArea]}
          placeholder="Describe la situación"
          value={description}
          onChangeText={setDescription}
          multiline
        />
        {/* Botones de acción */}
        <View style={styles.buttonsContainer}>
          <TouchableOpacity style={styles.sendButton} onPress={handleSendTicket}>
            <Text style={styles.buttonText}>Enviar ticket</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.cancelButton} onPress={handleCancel}>
            <Text style={styles.buttonText}>Cancelar</Text>
          </TouchableOpacity>
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
    backgroundColor: '#f5f5f5',
  },
  contentContainer: {
    paddingHorizontal: 16,
    paddingVertical: 20,
  },
  greeting: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  date: {
    fontSize: 14,
    color: '#555',
    marginBottom: 10,
  },
  message: {
    fontSize: 16,
    color: '#555',
    marginBottom: 20,
  },
   helpCard: {
    borderColor: '#154C74',
    borderWidth: 2, // Define el grosor del borde
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
    flexDirection: 'row', // Organiza los elementos en fila
    alignItems: 'center', // Alinea verticalmente los elementos
  },
  helpTitle: {
    fontSize: 19,
    fontWeight: 'bold',
    color: '#154C74',
   
  }, textContainer: {
    flex: 1, // Permite que el texto ocupe el espacio restante
    marginRight: 10, // Agrega espacio entre el texto y la imagen
  },
  helpSubtitle: {
    fontSize: 12,
    color: '#555',
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  categoryContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  categoryButtonotro:{
    backgroundColor: '#7A9ACD',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 20,
    marginBottom: 10,
  },
  categoryButton: {
    backgroundColor: '#0D2750',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 20,
    marginBottom: 10,
  },
  categoryButtonSelected: {
    backgroundColor: '#3261ad',
  },
  categoryText: {
    fontSize: 14,
    color: '#ffffff',
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 15,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
  },
  Otro:{
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 15,
    paddingHorizontal: 10,
    backgroundColor: '#7A9ACD',
  },
  textArea: {
    height: 100,
    textAlignVertical: 'top',
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  sendButton: {
    backgroundColor: '#0D2750',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  cancelButton: {
    backgroundColor: '#7A9ACD',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default SupportTicketScreen;
