import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home';
import Dicas from '../screens/Dicas';
import Formulario from '../screens/Formulario';
import Recursos from '../screens/Recursos';
import Sobre from '../screens/Sobre';

const Stack = createNativeStackNavigator();

export default function StackRoutes() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Dicas" component={Dicas} />
      <Stack.Screen name="Formulario" component={Formulario} />
      <Stack.Screen name="Recursos" component={Recursos} />
      <Stack.Screen name="Sobre" component={Sobre} />
    </Stack.Navigator>
  );
}
