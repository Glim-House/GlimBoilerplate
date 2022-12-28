/* eslint-disable react-hooks/exhaustive-deps */
import {Image, Pressable, Text, View} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withTiming,
} from 'react-native-reanimated';
import {style} from './Onboard.style';
import {PanGestureHandler} from 'react-native-gesture-handler';

const OnBoardScreen = () => {
  const onboardData = [
    {
      heading: 'Track your reflect on your  mood and reflect on your day',
      desc: 'Get an overview of how you are performing and motivate yourself to achieve even moew.',
      color: '#DC5D6F',
    },
    {
      heading: 'Track your mood and reflect on your day',
      desc: 'Get an overview of how you are performing and motivate yourself to achieve even moew.',
      color: '#FF8B61',
    },
    {
      heading: 'Mood and reflect Track your on your day',
      desc: 'Get an overview of how you are performing and motivate yourself to achieve even moew.',
      color: '#FF88A6',
    },
  ];
  const [onboardStatus, setOnboardStatus] = useState<number>(0);
  const triggerScale: {value: boolean} = useSharedValue(false);
  const bg: {value: string} = useSharedValue(onboardData[onboardStatus].color);

  useEffect(() => {
    bg.value = withDelay(
      400,
      withTiming(onboardData[onboardStatus].color, {duration: 0}),
    );
    triggerScale.value = false;
    setTimeout(() => {
      triggerScale.value = true;
    }, 1000);
  }, [onboardStatus]);

  const sheetStyle = useAnimatedStyle(() => {
    return {
      width: 100,
      height: 100,
      borderRadius: 100,
      backgroundColor: onboardData[onboardStatus].color,
      transform: [
        {
          scale: triggerScale.value
            ? withTiming(0, {duration: 0})
            : withTiming(30, {duration: 800}),
        },
      ],
      position: 'absolute',
      right: 0,
      top: 0,
    };
  });
  const onBoardbackground = useAnimatedStyle(() => {
    return {
      backgroundColor: bg.value,
    };
  });
  const debounceRef = useRef<any>();
  const changeSheets = () => {
    if (!debounceRef.current) {
      onboardStatus === 2
        ? setOnboardStatus(0)
        : setOnboardStatus(onboardStatus + 1);
      debounceRef.current = setInterval(() => {
        clearInterval(debounceRef.current);
        debounceRef.current = null;
      }, 1000);
    }
  };

  const eventHandler = useAnimatedGestureHandler({
    onStart: (event, ctx) => {
      console.log(event);
    },
    onEnd: (event, ctx) => {
      console.log(event);
    },
  });

  return (
    <PanGestureHandler onGestureEvent={eventHandler}>
      <Animated.View style={[style.container, onBoardbackground]}>
        <Animated.View style={[sheetStyle]} />
        <View style={style.card}>
          <Text style={style.heading}>
            {onboardData[onboardStatus].heading}
          </Text>
          <Text style={style.desc}>{onboardData[onboardStatus].desc}</Text>
          <Animated.View style={[style.btnBox, onBoardbackground]}>
            <Pressable style={style.nextBtn} onPress={changeSheets}>
              <Image source={require('./Arrow.png')} />
            </Pressable>
          </Animated.View>
        </View>
      </Animated.View>
    </PanGestureHandler>
  );
};

export default OnBoardScreen;
