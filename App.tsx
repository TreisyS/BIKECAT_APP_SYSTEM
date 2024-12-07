import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from './Modulos/ModuloUsuarios/LoginScreen';
import RegisterScreenPart1 from './Modulos/ModuloUsuarios/RegisterScreenPart1';
import WelcomeScreen from './Modulos/ModuloUsuarios/WelcomeScreen';
import LoadingScreen from './Modulos/LoadingScreen';
import Estaciones from './Modulos/ModuloEstaciones/Estaciones';
import HomeScreen from './Modulos/HomeScreen';
import Catalogo from './Modulos/ModuloAlquiler/CatalogoBicicletas';
import Detalle from './Modulos/ModuloAlquiler/DetalletaAlquiler';
import Carrito from './Modulos/ModuloAlquiler/CartITem';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
       <Stack.Navigator initialRouteName="Loading" screenOptions={{ headerShown: false }}>
      <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ title: 'Inicio de Sesión' }}
        />
         <Stack.Screen name="Loading" component={LoadingScreen} />
        <Stack.Screen
          name="RegisterPart1"
          component={RegisterScreenPart1}
          options={{ title: 'Registro - Parte 1' }}
        />
         <Stack.Screen name="Welcome" component={WelcomeScreen} />
<Stack.Screen name="Estacion" component={Estaciones}/>

<Stack.Screen name="Home" component={HomeScreen}/>
<Stack.Screen name="Catalogo" component={Catalogo}/>
<Stack.Screen name="Detalle" component={Detalle}/>
<Stack.Screen name="Carrito" component={Carrito}/>
      </Stack.Navigator>

    </NavigationContainer>
  );
};

export default App;
