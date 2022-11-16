import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TelaLogin from './TelaLogin';
import SegundaTela from './SegundaTela'

export default function App() {
  return (
    <NavigationContainer>
        <MyStack />
    </NavigationContainer>
  );
}

const Stack = createNativeStackNavigator();

function MyStack(){
  return(
    <Stack.Navigator>
      <Stack.Screen name="TelaDeLogin" component={TelaLogin}/>
      <Stack.Screen name="TelaDeLista" component={SegundaTela}/>
    </Stack.Navigator>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
