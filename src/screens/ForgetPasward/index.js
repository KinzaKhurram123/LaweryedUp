import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import React from 'react';
import {images, SIZES} from '../../constant';
import {styles} from './index.style';
import {Icons, InnerContainer, InuputFeild} from '../../Component';
import back_arrow_yellowicon from '../../assest/icons/back_arrow_yellowicon';
import back_arrow_white from '../../assest/icons/back_arrow_white';

const ForgetPasward = ({navigation}) => {
  return (
    <ImageBackground style={styles.main_view} source={images.background}>
      <View style={styles.sub_view}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icons style={styles.icon} name={back_arrow_white} />
        </TouchableOpacity>
      </View>
      <View style={{height: '15%'}} />
      <ImageBackground style={styles.background} source={images.background3}>
        <View>
          <Text style={styles.Heading}>Forget Pasward</Text>
          <View style={{padding: SIZES.padding * 2}}>
            <Text style={styles.text2}>
              To reset password, enter your email address. A link will be shared
              to change your password.
            </Text>
          </View>
          <InuputFeild
            name="email"
            placeholder="Email Id"
            // value={value.name}
            // onChangeText={"name"}
            maxLength={20}
          />
          <TouchableOpacity
            activeOpacity={1}
            style={styles.btn3}
            onPress={() => navigation.navigate(null)}>
            <Text style={styles.text}>Submit</Text>
          </TouchableOpacity>
          
        </View>
      </ImageBackground>
      <View
        style={{
          alignItems: 'center',
          flexDirection: 'row',
          justifyContent: 'center',
        }}>
        <Text style={styles.textlast}>Don't have an Account?</Text>
        <Text style={styles.text2}>Sign Up</Text>
      </View>
    </ImageBackground>
  );
};

export default ForgetPasward;
