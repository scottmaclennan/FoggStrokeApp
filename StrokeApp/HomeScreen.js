import React from 'react';
import { Button, View, Text } from 'react-native';

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to med"
        onPress={() => navigation.navigate('Med')}
      />
        <Button
        title="Go to exe"
        onPress={() => navigation.navigate('Exe')}
      />
        <Button
        title="Go to game"
        onPress={() => navigation.navigate('Game')}
      />
        <Button
        title="Go to info"
        onPress={() => navigation.navigate('Info')}
      />
    </View>
  );
}

export default HomeScreen;
