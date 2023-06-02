import {Dimensions, StyleSheet} from 'react-native';
import {COLORS, FONTS, SIZES} from '../../constant';

export const styles = StyleSheet.create({
  main_view: {
    // backgroundColor: COLORS.primary,
    paddingTop: SIZES.padding * 4.5,
    paddingBottom: SIZES.padding * 2,
    paddingHorizontal: SIZES.padding,
  },
  sub_view: {
    flexDirection: 'row',
    alignSelf: 'center',
    gap: SIZES.padding,
    justifyContent:"space-between"
  },
  image: {
    width: '100%',
    height: '100%',
  },
  image_view: {
    width: '80%',
    height: 65,
  },
  icon:{
    padding:SIZES.padding
  },
  title: {
    ...FONTS.Regular18,
    color: COLORS.white,
    marginLeft: SIZES.padding2,
    textAlign: "left",
  },
});
