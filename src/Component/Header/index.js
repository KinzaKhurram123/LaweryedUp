import {StyleSheet, Text, Image, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {styles} from './index.style';
import {Icons} from '..';
import back_arrow_white from '../../assest/icons/back_arrow_white';
import {images, SIZES} from '../../constant';

const Header = ({isbackIcon = false, image, title, titleStyle, onpressback}) => {
  return (
    <View style={styles.main_view}>
      <View style={styles.sub_view}>
        <TouchableOpacity onPress={onpressback}>
          {isbackIcon && <Icons style={styles.icon} name={back_arrow_white} />}
        </TouchableOpacity>
        {/* <View style={{marginLeft:SIZES.padding}}>
          <Text style={[styles.title, titleStyle]}>{title}</Text>
        </View> */}
        <View style={styles.sub_view}>
          <View style={styles.image_view}>
            <Image style={styles.image} source={image} />
          </View>
        </View>
      </View>
    </View>
  );
};

export default Header;
