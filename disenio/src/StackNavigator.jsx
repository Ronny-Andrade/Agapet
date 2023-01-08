
import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { Home } from './home';
import { Register } from './register';

const Stack = createStackNavigator();

export const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Register" component={Register} />

    </Stack.Navigator>
  );
}