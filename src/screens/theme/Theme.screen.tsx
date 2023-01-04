import {View, Text, Switch} from 'react-native';
import React from 'react';
import {style} from './Theme.style';
import {Appconfig} from '../../config/config';

const ThemeScreen = () => {
  console.log(Appconfig.BASE_URL);
  return (
    <View style={style.container}>
      <View style={style.switchBox}>
        <Text>Dark mode</Text>
        <Switch />
      </View>
    </View>
  );
};

export default ThemeScreen;
