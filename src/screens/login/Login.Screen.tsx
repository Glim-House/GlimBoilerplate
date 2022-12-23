import React, {useEffect} from 'react';
import {View, Button} from 'react-native';
import {
  getActiveRoute,
  resetNavigation,
  canGoBack,
} from '../../navigation/useNavigationUtils';

const LoginScreen = () => {
  useEffect(() => {
    console.warn('getActiveRoute', getActiveRoute());
  });

  return (
    <View>
      <Button
        title="Reset Nav"
        onPress={() => resetNavigation({index: 1, routes: [{name: 'Login'}]})}
      />
      <Button title="goBack" onPress={() => canGoBack()} />
    </View>
  );
};

export default LoginScreen;
