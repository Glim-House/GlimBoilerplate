import {Dimensions, StatusBar, StyleSheet} from 'react-native';

const {width, height} = Dimensions.get('window');
export const style = StyleSheet.create({
  container: {
    height: height,
    width: width,
    // marginTop: StatusBar.currentHeight,
  },
  card: {
    backgroundColor: '#fff',
    position: 'absolute',
    bottom: 80,
    width: width - 64,
    height: height / 3,
    alignSelf: 'center',
    borderRadius: 50,
    padding: 32,
  },
  nextBtn: {
    backgroundColor: '#000',
    width: 62,
    height: 62,
    borderRadius: 100,
    marginBottom: -20,
  },
  heading: {
    fontSize: 20,
    textAlign: 'center',
    fontWeight: '600',
    marginTop: 10,
  },
  desc: {
    fontSize: 14,
    textAlign: 'center',
    marginTop: 12,
    lineHeight: 20,
    opacity: 0.6,
  },
  btnBox: {
    width: 88,
    height: 70,
    position: 'absolute',
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderTopRightRadius: 80,
    borderTopLeftRadius: 80,
    // backgroundColor: 'red',
  },
});
