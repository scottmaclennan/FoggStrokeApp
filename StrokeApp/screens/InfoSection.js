import React from 'react';
import { View, Text, StyleSheet, Button, ScrollView } from 'react-native';

const HomePage = ({ navigation }) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>My Health App</Text>
      
      <View style={styles.section}>
        <Text style={styles.title}>Quick Actions</Text>
        <Button
          title="Medicine Checker"
          onPress={() => navigation.navigate('MedicineChecker')}
        />
        <Button
          title="Exercise Tracker"
          onPress={() => navigation.navigate('ExerciseTracker')}
        />
      </View>
      
      <View style={styles.section}>
        <Text style={styles.title}>Games</Text>
        <Button
          title="Go to Games"
          onPress={() => navigation.navigate('GamesSection')}
        />
      </View>

      <View style={styles.section}>
        <Text style={styles.title}>Info</Text>
        <Button
          title="More Info"
          onPress={() => navigation.navigate('InfoSection')}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  section: {
    marginBottom: 20,
  },
  title: {
    fontSize: 20,
    marginBottom: 10,
  },
});

export default InfoSection;