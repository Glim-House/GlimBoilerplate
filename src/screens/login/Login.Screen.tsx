import React, {useEffect} from 'react';
import {View, Button} from 'react-native';
import {changeLanguage, translate} from '../../i18n';
import Text from '../../components/Text/Text.component';
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
      <Text content={translate('HELLO') + translate('WORLD')} />
      <Button title="change language" onPress={() => changeLanguage('fr')} />
    </View>
  );
};

export default LoginScreen;
