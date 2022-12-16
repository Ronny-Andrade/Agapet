import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import { Register } from './src/screens/Register'; 
import { Login } from './src/screens/Login';
import { Home } from './src/screens/Home'

import Loader from './src/components/Loader';

const Stack = createNativeStackNavigator();

export const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        
        <Stack.Screen name='Login' component={Login} />
        <Stack.Screen name='Register' component={Register} />
        {/*<Stack.Screen name='Home' component={Home} />*/}
      </Stack.Navigator>
    </NavigationContainer>
  )
}
