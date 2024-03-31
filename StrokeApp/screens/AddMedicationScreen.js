import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import { useDispatch } from 'react-redux';

function AddMedicationScreen() {
  const [name, setName] = useState('');
  const [dosage, setDosage] = useState('');
  const dispatch = useDispatch();

  const addMedication = () => {
    dispatch({ type: 'ADD_MEDICATION', payload: { id: Date.now(), name, dosage } });
    setName('');
    setDosage('');
  };

  return (
    <View>
      <TextInput placeholder="Medication Name" value={name} onChangeText={setName} />
      <TextInput placeholder="Dosage" value={dosage} onChangeText={setDosage} />
      <Button title="Add Medication" onPress={addMedication} />
    </View>
  );
}

export default AddMedicationScreen;
