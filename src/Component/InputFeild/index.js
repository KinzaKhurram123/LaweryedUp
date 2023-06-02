import {
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Text,
  View,
} from 'react-native';
import React from 'react';
import {COLORS, FONTS, SIZES} from '../../constant';
import {Icons} from '..';

const InuputFeild = ({
  style,
  placeholder,
  onChangeText,
  secureText,
  keyboardType,
  defaultValue,
  onFocus,
  onBlur,
  ref,
  isEdit,
  value,
  icon,
  inputStyle,
  rightIcon,
  iconStyle,
  maxLength,
  onPressRightIcon,
}) => {
  return (
    <View style={[styles.main_view, style]}>
      {icon && <Icons name={icon ? icon : null} style={styles.flexDirection} />}
      <TextInput
        ref={ref}
        onChangeText={onChangeText}
        keyboardType={keyboardType}
        placeholder={placeholder}
        // secureTextEntry={secureText}
        style={styles.input}
        placeholderTextColor={COLORS.text_placeholder}

        defaultValue={defaultValue}
        value={value}
        maxLength={maxLength}
        onBlur={onBlur}
        editable={isEdit}
        underlineColorAndroid="transparent"
      />
      {rightIcon && (
        <TouchableOpacity onPress={onPressRightIcon}>
          <Icons name={rightIcon} style={style.icon} />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default InuputFeild;

const styles = StyleSheet.create({
  main_view: {
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.light_grey,
    paddingHorizontal: SIZES.padding2 * 1.5,
    margin:SIZES.padding -3,
  },
  icon: {
    width: '7%',
  },
  input: {
    flex: 1,
    ...FONTS.Regular14,
    color: COLORS.secondary,
    marginLeft: SIZES.padding2 * 0.5,
    height: 60,
    marginTop: SIZES.padding2 * 0.5,
  },
});
