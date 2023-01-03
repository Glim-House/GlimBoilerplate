import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeScreen from '../screens/home/Home.screen';
import LoginScreen from '../screens/login/Login.Screen';

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator initialRouteName="HomeScreen">
      <Drawer.Screen name="HomeScreen" component={HomeScreen} />
      <Drawer.Screen name="LoginScreen" component={LoginScreen} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;
