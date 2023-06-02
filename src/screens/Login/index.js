import {
  StyleSheet,
  Text,
  SafeAreaView,
  View,
  ImageBackground,
  StatusBar,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';
import {Button, Header, Icons, InuputFeild} from '../../Component';
import {COLORS, FONTS, images, SIZES} from '../../constant';
import {styles} from './index.style';
import InnerContainer from '../../Component/InnerContainer';
import back_arrow_white from '../../assest/icons/back_arrow_white';
import back_arrow_yellowicon from '../../assest/icons/back_arrow_yellowicon';
import {Image} from 'react-native-svg';
import facebook_icon from '../../assest/icons/facebook_icon';
import linkdin_icon from '../../assest/icons/linkdin_icon';
import google from '../../assest/icons/google';
const Login = ({navigation}) => {
  return (
    <SafeAreaView>
      <StatusBar
        translucent={true}
        showHideTransition="slide"
        animated
        backgroundColor={COLORS.secondary}
        barStyle="light-content"
      />
      <ImageBackground style={styles.main_view} source={images.background2}>
        <ScrollView>
          <View style={styles.main_views}>
            <View style={styles.sub_views}>
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Icons style={styles.icon} name={back_arrow_yellowicon} />
              </TouchableOpacity>
              <View style={{marginLeft: SIZES.padding}}>
                <Text style={[styles.title]}>Back to Main Screen</Text>
              </View>
            </View>
          </View>
          <Header image={images.whiteLogo} />
          <InnerContainer>
            <View>
              <Text style={styles.Heading}>Sign In</Text>
              <InuputFeild
                name="email"
                placeholder="phtuonganh@gmail.com"
                // value={value.name}
                // onChangeText={"name"}
                maxLength={20}
              />
              <InuputFeild
                name="Passward"
                placeholder="Enter Password"
                // value={value.name}
                // onChangeText={"name"}
                maxLength={20}
              />
              <TouchableOpacity
                onPress={() => navigation.navigate('ForgetPasward')}>
                <Text style={styles.forget}>Forget Your Passward</Text>
              </TouchableOpacity>
            </View>
            <View style={{alignContent: 'center'}}>
              <TouchableOpacity
                activeOpacity={1}
                style={styles.btn3}
                >
                <Text style={styles.text}>Sign In</Text>
              </TouchableOpacity>
              <View style={styles.or_view}>
                <View style={styles.line} />
                <Text style={styles.or_text}>Or</Text>
                <View style={styles.line} />
              </View>
            </View>
            <View style={styles.container}>
              <TouchableOpacity style={styles.GernalBtn}>
                <Icons name={facebook_icon} />
                <Text style={styles.text}>Facebook</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.googleBtn}>
                <Icons name={google} />
                <Text style={styles.text}>Google</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.linkBtn}>
                <Icons name={linkdin_icon} />
                <Text style={styles.text}>LinkedIn</Text>
              </TouchableOpacity>
            </View>
          </InnerContainer>
          <View
            style={{
              alignItems: 'center',
              flexDirection: 'row',
              justifyContent: 'center',
            }}>
            <Text style={styles.textlast}>Don't have an Account?</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Signup_client')}>
              <Text style={styles.text2}>Sign Up</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default Login;
