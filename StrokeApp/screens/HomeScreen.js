import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

function HomeScreen() {
  const [medicationTaken, setMedicationTaken] = useState(false);

  return (
    <View style={styles.container}>
      <Text>Did you take your medicine today?</Text>
      <Button
        title={medicationTaken ? "Medication Taken" : "Mark as Taken"}
        onPress={() => setMedicationTaken(true)}
        color={medicationTaken ? "green" : "blue"}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default HomeScreen;
