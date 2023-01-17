import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Home } from './src/home';
import { Register } from './src/register';
console.reportErrorsAsExceptions = false;

export default function App() {
  return (
    <Home />
  );
}

