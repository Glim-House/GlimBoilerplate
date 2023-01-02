import {View, Text, SafeAreaView, TouchableOpacity, Image} from 'react-native';
import React, {useState} from 'react';
import {style} from './Onboard.style';
import Animated, {useAnimatedStyle, withTiming} from 'react-native-reanimated';

const OnboardScreen = () => {
  const [onboardStatus, setOnboardStatus] = useState<number>(0);

  /**
   * Image url's to be rendered on the screen
   */
  const data: {imgUrl: string}[] = [
    {imgUrl: require('./asset/onboardImageOne.png')},
    {imgUrl: require('./asset/onboardImageTwo.png')},
    {imgUrl: require('./asset/onboardImageThree.png')},
  ];

  /**
   * update the onboardstate
   */
  const changeOnboardStatus = () => {
    if (onboardStatus === 2) {
      setOnboardStatus(0);
    } else {
      setOnboardStatus(onboardStatus + 1);
    }
  };

  /**
   * Moving animation for slider thumb
   */
  const animatedThumb = useAnimatedStyle(() => {
    return {
      left: withTiming(19 * onboardStatus, {duration: 300}),
    };
  });
  return (
    <SafeAreaView>
      <View style={style.container}>
        <View style={style.skipArea}>
          <Text style={style.skipButton} onPress={() => {}}>
            Skip
          </Text>
        </View>
        <View style={style.imageArea}>
          <Image source={data[onboardStatus].imgUrl} />
        </View>
        <View style={style.descArea}>
          <Text style={style.heading}>
            Track your mood and reflect on your day
          </Text>
          <Text style={style.desc}>
            Get an overview of how you are performing and motivate yourself to
            achieve even moew.
          </Text>
        </View>
        <View style={style.navigationArea}>
          <View style={style.progressTrack}>
            <Animated.View style={[style.progressThumb, animatedThumb]} />
          </View>
          <TouchableOpacity
            style={style.nextButton}
            onPress={changeOnboardStatus}>
            <Image source={require('./asset/Arrow.png')} />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default OnboardScreen;
