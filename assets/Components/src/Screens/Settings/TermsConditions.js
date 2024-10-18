import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
const TermsConditionsScreen = () => {
  return (
    <View style={styles.container}>
      {/* <Text style={styles.title}>Terms & Conditions</Text> */}
      <Text style={styles.content}>By using this app, you agree to the following terms and conditions...</Text>
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
  content: { fontSize: 16 }
});
export default TermsConditionsScreen;