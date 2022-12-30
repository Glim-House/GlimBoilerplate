import React from 'react';
// import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import OnBoardScreen from './src/screens/onboard/Onboard.Screen';
import LoginScreen from './src/screens/login/Login.Screen';
import {navigationRef} from './src/navigation/useNavigationUtils';

const App = () => {
  const Stack = createNativeStackNavigator();
  return (
    // <View>
    //   <OnBoardScreen />
    // </View>
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="On Board Screen"
          component={OnBoardScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          // options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
