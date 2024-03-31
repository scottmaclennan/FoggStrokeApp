import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { useSelector } from 'react-redux';

function MedicationsScreen() {
  const medications = useSelector(state => state.medications);

  return (
    <View>
      <FlatList
        data={medications}
        renderItem={({ item }) => <Text>{item.name} - {item.dosage}</Text>}
        keyExtractor={item => item.id}
      />
    </View>
  );
}

export default MedicationsScreen;
