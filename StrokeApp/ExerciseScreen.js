import React from 'react';
import { Button, View, Text } from 'react-native';

import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

function ExerciseScreen() {
  const [exercise, setExercise] = useState('');

  // Implement the save function to store exercise logs
  const saveExerciseLog = () => {
    console.log('Saving Exercise Log', exercise);
    // Save logic here
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Log your exercise</Text>
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, width: '80%' }}
        onChangeText={text => setExercise(text)}
        value={exercise}
      />
      <Button
        title="Save Exercise Log"
        onPress={() => saveExerciseLog()}
      />
    </View>
  );
}

export default ExerciseScreen;