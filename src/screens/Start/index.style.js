import {Dimensions, StyleSheet} from 'react-native';
import {COLORS, FONTS, SIZES} from '../../constant';

export const styles = StyleSheet.create({
  main_view: {
    height: '90%',
  },
  sub_view: {
    justifyContent: 'space-between',
    height: "83%",
    flexDirection:"row", 
  },
  title: {
    color: COLORS.white,
  },
  btn: {
    backgroundColor: COLORS.primary,
    paddingHorizontal: SIZES.padding *4.4,
    paddingVertical: SIZES.padding,
  },
  btn3: {
    backgroundColor: 'transparent',
    paddingHorizontal: SIZES.padding * 4,
    paddingVertical: SIZES.padding,
  },
  text:{
    color:COLORS.white
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // padding: SIZES.padding2,
    // paddingLeft: SIZES.padding,
    // marginRight: SIZES.padding ,
  },
});
