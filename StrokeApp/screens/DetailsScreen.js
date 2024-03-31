import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function DetailsScreen() {
  return (
    <View style={styles.container}>
      <Text>Details about your medication.</Text>
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

export default DetailsScreen;
