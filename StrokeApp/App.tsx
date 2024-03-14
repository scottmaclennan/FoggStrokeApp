import React from 'react';
import {View, Text, Image, ScrollView, TextInput, Button} from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <Button
        onPress={() => alert('Button Pressed')}
        title="Press Me"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
