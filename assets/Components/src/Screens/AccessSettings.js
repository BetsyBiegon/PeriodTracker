import { StyleSheet, Text, Alert, View, TouchableOpacity, Switch, ImageBackground } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { en } from '../resources/translations/app/en';

const AccessSettings = () => {
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [darkModeEnabled, setDarkModeEnabled] = useState(false);
  const navigation = useNavigation();

  const handleLogout = () => {
    Alert.alert('Logged Out', 'You have been logged out successfully.');
  };

  const handleDeleteAccount = () => {
    Alert.alert(
      'Delete Account',
      'Are you sure you want to delete your account? This action cannot be undone.',
      [
        { text: 'Cancel', style: 'cancel' },
        { text: 'Delete', style: 'destructive', onPress: () => Alert.alert('Account Deleted') }
      ]
    );
  };

  const handleContactUs = () => {
    Alert.alert('Contact Us', 'For support, please reach out to: lvctdev@lvcthealth.org');
  };

  // Declare the background image outside the JSX
  const backgroundImage = require('../../../assets/images/backgrounds/desert-default.png');

  return (
    <ImageBackground
      source={backgroundImage}  // Use the declared variable here
      style={styles.background}>
      <View style={styles.container}>
        {/* Notification Switch */}
        <View style={styles.settingItem}>
          <Text style={styles.settingText}>Enable Notifications</Text>
          <Switch
            value={notificationsEnabled}
            onValueChange={setNotificationsEnabled}
          />
        </View>

        {/* Dark Mode Switch */}
        <View style={styles.settingItem}>
          <Text style={styles.settingText}>Dark Mode</Text>
          <Switch
            value={darkModeEnabled}
            onValueChange={setDarkModeEnabled}
          />
        </View>

        {/* About Section */}
        <View style={styles.settingsWrapper}>
          <TouchableOpacity
            style={styles.settingItem}
            onPress={() => navigation.navigate('AboutScreen')}>
            <View style={styles.aboutContainer}>
              <Text style={styles.settingText}>{en.about}</Text>
              <Text style={styles.settingAbout}>{en.about_info}</Text>
            </View>
          </TouchableOpacity>

          {/* Terms & Conditions Section */}
          <TouchableOpacity
            style={styles.settingItem}
            onPress={() => navigation.navigate('TermsAndConditions')}>
            <View style={styles.aboutContainer}>
              <Text style={styles.settingText}>{en.t_and_c}</Text>
              <Text style={styles.settingAbout}>{en.t_and_c_info}</Text>
            </View>
          </TouchableOpacity>

          {/* Privacy Policy Section */}
          <TouchableOpacity
            style={styles.settingItem}
            onPress={() => navigation.navigate('PrivacyPolicy')}>
            <View style={styles.aboutContainer}>
              <Text style={styles.settingText}>{en.privacy_policy}</Text>
              <Text style={styles.settingAbout}>{en.privacy_info}</Text>
            </View>
          </TouchableOpacity>

          {/* Access Settings Section */}
          <TouchableOpacity
            style={styles.settingItem}
            onPress={() => navigation.navigate('AccessSettings')}>
            <View style={styles.aboutContainer}>
              <Text style={styles.settingText}>{en.access_setting}</Text>
              <Text style={styles.settingAbout}>{en.settings_info}</Text>
            </View>
          </TouchableOpacity>

          {/* Dark Mode Switch */}
          <View style={styles.settingItem}>
            <View style={styles.aboutContainer}>
              <Text style={styles.settingText}>{en.future_prediciton}</Text>
              <Text style={styles.settingAbout}>{en.future_prediciton_info}</Text>
            </View>
            <Switch
              value={darkModeEnabled}
              onValueChange={setDarkModeEnabled}
            />
          </View>
        </View>

        {/* Button Section */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.logOutButton} onPress={handleLogout}>
            <Text style={styles.buttonText}>Log out</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.deleteAccountButton} onPress={handleDeleteAccount}>
            <Text style={styles.buttonText}>Delete account</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.contactUsButton} onPress={handleContactUs}>
            <Text style={styles.buttonText}>Contact us</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

export default AccessSettings;

const styles = StyleSheet.create({
  // Your styles here
});
