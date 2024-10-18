import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
const AboutScreen = () => {
  return (
    <View style={styles.container}>
      {/* <Text style={styles.title}>About This App</Text> */}
      <Text style={styles.content}>This app is designed to help track periods and provide health insights...</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
     backgroundColor: '#fff'
    },
  title: { fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20
},
  content: { fontSize: 16 }
});
export default AboutScreen;