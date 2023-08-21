import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import StackNavigator from './navigator/StackNavigator';
import { AppLoading } from 'expo';
import { useFonts } from 'expo-font';
export default function App() {
  return (
    <>
      <StackNavigator/>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
