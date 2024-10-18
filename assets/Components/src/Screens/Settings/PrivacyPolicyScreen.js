import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
const PrivacyPolicyScreen = () => {
  return (
    <View style={styles.container}>
      {/* <Text style={styles.title}>Privacy Policy</Text> */}
      <Text style={styles.content}>Your privacy is important to us. This policy outlines how we handle your data...</Text>
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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20
},
  content: {
    fontSize: 16 }
});
export default PrivacyPolicyScreen;