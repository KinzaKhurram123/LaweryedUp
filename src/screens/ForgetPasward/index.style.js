import {Dimensions, StyleSheet} from 'react-native';
import {COLORS, FONTS, SIZES} from '../../constant';

export const styles = StyleSheet.create({
  main_view: {
    height: '100%',
  },
  main_views: {
    paddingTop: SIZES.padding * 4,
    paddingBottom: SIZES.padding2,
    paddingHorizontal: SIZES.padding2,
  },
  sub_view: {
    marginTop: SIZES.padding * 5,
    paddingLeft: SIZES.padding,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },

 
  btn3: {
    backgroundColor: COLORS.secondary,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: SIZES.padding,
    width: '90%',
    marginLeft: 20,
    marginBottom: SIZES.padding,
    marginTop: SIZES.padding,
  },
  text: {
    color: COLORS.white,
    ...FONTS.Bold14,
    marginLeft: 5,
  },
  textlast: {
    color: COLORS.white,
    ...FONTS.Bold12,
  },
  text2: {
    textAlign: 'center',
    ...FONTS.Light12,
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  Heading: {
    ...FONTS.Bold26,
    textAlign: 'center',
    color: COLORS.secondary_with_opactity,
    marginTop: SIZES.padding * 2,
  },
  background: {
    margin: SIZES.padding,
    height: '70%',
  },
});
