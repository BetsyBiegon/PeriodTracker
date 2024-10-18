import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, Stack } from '@react-navigation/native';

import Icon from  'react-native-vector-icons/MaterialCommunityIcons';
import CalendarScreen from './assets/Components/src/Screens/CalendarScreen';
import Encyclopedia from './assets/Components/src/Screens/Encyclopedia';
import AccessSettings from './assets/Components/src/Screens/AccessSettings';
import ProfileScreen  from './assets/Components/src/Screens/ProfileScreen';
import AboutScreen from './assets/Components/src/Screens/Settings/AboutScreen';
import AccessSettingsScreen from './assets/Components/src/Screens/Settings/AccessSettingsScreen';
import PrivacyPolicyScreen from './assets/Components/src/Screens/Settings/PrivacyPolicyScreen';
import TermsConditions from './assets/Components/src/Screens/Settings/TermsConditions';

const Tab = createBottomTabNavigator();
const stack = createStackNavigator();
function SettingStack(){
  return(
    <Stack.Navigator>
    <Stack.Screen name="AccessSettingsScreen"component={AccessSettingsScreen}/>
    <Stack.Screen name="AboutScreen"component={AboutScreen}/>
    <Stack.Screen name="PrivacyPolicyScreen"component={PrivacyPolicyScreen}/>
    <Stack.Screen name="TermsConditions"options={{headerShown:false}}component={TermsConditions}/>
      </Stack.Navigator>
  )
}
export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;
            if (route.name === 'Home') {
              iconName = 'home-outline';
            } else if (route.name === 'Calendar') {
              iconName = 'calendar';
            } else if (route.name === 'Profile') {
              iconName = 'account-outline';
            } else if (route.name === 'Encyclopedia') {
              iconName = 'book-outline';
            } else if (route.name === 'Settings') {
              iconName = 'cog-outline';
            }
            return <Icon name={iconName} color={color} size={size} />;
          },
        })}
      >
        <Tab.Screen name="Profile" component={ProfileScreen} />
        <Tab.Screen name="Calendar" component={CalendarScreen} />
        <Tab.Screen name="Encyclopedia" component={Encyclopedia} />
        <Tab.Screen name="Settings"  component={AccessSettings} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}