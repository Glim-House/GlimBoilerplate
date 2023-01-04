import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {routeEnum} from '../enums/route.enum';
import DrawerNavigation from './DrawerNavigation';
import {LazyOnboardScreen} from './screens';

const RootStack = createNativeStackNavigator();
const RootNavigation = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator
        initialRouteName={routeEnum.ONBOARDSCREEN}
        screenOptions={{headerShown: false}}>
        <RootStack.Screen
          name={routeEnum.ONBOARDSCREEN}
          component={LazyOnboardScreen}
        />
        <RootStack.Screen
          name={routeEnum.DRAWER}
          component={DrawerNavigation}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigation;
