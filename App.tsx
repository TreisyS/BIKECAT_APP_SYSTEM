
import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet, Text, useColorScheme, View } from 'react-native';
import LoginScreen from './Modulos/ModuloUsuarios/LoginScreen'; // Asegúrate de que este archivo existe y contiene tu formulario de login

const App: React.FC = () => {
  const isDarkMode = useColorScheme() === 'dark';

  // Estilos dinámicos según el modo oscuro/claro
  const backgroundStyle = {
    backgroundColor: isDarkMode ? '#000' : '#fff',  // Puedes ajustar estos colores
  };
  return (
    <SafeAreaView style={[styles.container, backgroundStyle]}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <View style={styles.content}>
        <Text style={[styles.title, { color: isDarkMode ? '#fff' : '#000' }]}>
          Bienvenido a mi App
        </Text>
        <LoginScreen /> {}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default App;
