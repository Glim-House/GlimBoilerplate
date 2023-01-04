import {View} from 'react-native';
import {Canvas, Circle, Group} from '@shopify/react-native-skia';
import React from 'react';

const SkiScreen = () => {
  const size = 256;
  const r = size * 0.33;
  return (
    <View
      style={{
        width: '100%',
        height: '100%',
      }}>
      <Canvas style={{flex: 1}}>
        <Group blendMode="multiply">
          <Circle cx={r} cy={r} r={r} color="cyan" />
          <Circle cx={size - r} cy={r} r={r} color="magenta" />
          <Circle cx={size / 2} cy={size - r} r={r} color="yellow" />
        </Group>
      </Canvas>
    </View>
  );
};

export default SkiScreen;
