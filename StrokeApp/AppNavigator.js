import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MedicationsScreen from './screens/MedicationsScreen';
import AddMedicationScreen from './screens/AddMedicationScreen';

const Tab = createBottomTabNavigator();

function AppNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Medications" component={MedicationsScreen} />
        <Tab.Screen name="Add Medication" component={AddMedicationScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
