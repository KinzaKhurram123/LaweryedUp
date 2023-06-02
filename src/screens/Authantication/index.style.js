import {Dimensions, StyleSheet} from 'react-native';
import {COLORS, FONTS, SIZES} from '../../constant';

export const styles = StyleSheet.create({
  main_view: {
    height: '90%',
  },
  sub_view: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: SIZES.padding * 7,
  },
  title: {
    color: COLORS.white,
  },
  btn: {
    width: '70%',
  },
  btn2: {
    // backgroundColor: COLORS.primary,
    backgroundColor: 'transparent',
    paddingHorizontal: SIZES.padding * 4,
    paddingVertical: SIZES.padding,
  },
  btn3: {
    backgroundColor: COLORS.primary,
    paddingHorizontal: SIZES.padding * 4,
    paddingVertical: SIZES.padding,
  },
  text: {
    color: COLORS.white,
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // padding: SIZES.padding2,
    // paddingLeft: SIZES.padding,
    // marginRight: SIZES.padding ,
  },
});
