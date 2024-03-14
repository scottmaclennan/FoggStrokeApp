import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './HomeScreen'; 
import MedScreen from './MedScreen';
import ExerciseScreen from './ExerciseScreen';
import GameScreen from './GameScreen';
import InfoScreen from './InfoScreen';
import Settings from './Settings';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Med" component={MedScreen} />
        <Stack.Screen name="Exe" component={ExerciseScreen} />
        <Stack.Screen name="Game" component={GameScreen} />
        <Stack.Screen name="Info" component={InfoScreen} />
        <Stack.Screen name="Settings" component={Settings}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
