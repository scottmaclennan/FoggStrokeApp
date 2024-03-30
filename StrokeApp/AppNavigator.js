import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import MedicineChecker from './screens/MedicineChecker'; // Placeholder for your MedicineChecker screen
import ExerciseTracker from './screens/ExerciseTracker'; // Placeholder for your ExerciseTracker screen
import GamesSection from './screens/GamesSection'; // Placeholder for your GamesSection screen
import InfoSection from './screens/InfoSection'; // Placeholder for your InfoSection screen
import HomePage from './screens/HomePage'; // HomePage screen that will list all sections

const Stack = createStackNavigator();

function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomePage">
        <Stack.Screen name="HomePage" component={HomePage} options={{title: 'Home'}} />
        <Stack.Screen name="MedicineChecker" component={MedicineChecker} />
        <Stack.Screen name="ExerciseTracker" component={ExerciseTracker} />
        <Stack.Screen name="GamesSection" component={GamesSection} />
        <Stack.Screen name="InfoSection" component={InfoSection} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
