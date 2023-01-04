import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeScreen from '../screens/home/Home.screen';
import LoginScreen from '../screens/login/Login.Screen';
import ReAnimatedScreen from '../screens/reanimated/ReAnimated.screen';
import SkiScreen from '../screens/skia/Skia.screen';
import ThemeScreen from '../screens/theme/Theme.screen';
import {routeEnum} from '../enums/route.enum';

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator initialRouteName={routeEnum.HOMESCREEN}>
      <Drawer.Screen name={routeEnum.HOMESCREEN} component={HomeScreen} />
      <Drawer.Screen name={routeEnum.LOGINSCREEN} component={LoginScreen} />
      <Drawer.Screen
        name={routeEnum.REANIMATEDSCREEN}
        component={ReAnimatedScreen}
      />
      <Drawer.Screen name={routeEnum.THEMESCREEN} component={ThemeScreen} />
      <Drawer.Screen name={routeEnum.SKIASCREEN} component={SkiScreen} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;
