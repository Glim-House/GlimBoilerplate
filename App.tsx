import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import OnBoardScreen from './src/screens/onboard/Onboard.Screen';
import LoginScreen from './src/screens/login/Login.Screen';
import {navigationRef} from './src/navigation/useNavigationUtils';
import HomeScreen from './src/screens/home/Home.screen';
import DrawerNavigation from './src/navigation/DrawerNavigation';

const App = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator initialRouteName="OnBoardScreen">
        <Stack.Screen
          name="OnBoardScreen"
          component={OnBoardScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Drawer"
          component={DrawerNavigation}
          options={{headerShown: false}}
        />
        <Stack.Screen name="Login" component={LoginScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
