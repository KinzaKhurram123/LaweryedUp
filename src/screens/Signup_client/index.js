import {
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
  Text,
  View,
} from 'react-native';
import React from 'react';
import {images} from '../../constant';
import {styles} from './index.style';
import {CheckBox, Header, InnerContainer, InuputFeild} from '../../Component';
import massage_icon from '../../assest/icons/massage_icon';

const Signup_client = ({navigation}) => {
  return (
    <SafeAreaView>
      <ImageBackground style={styles.main_view} source={images.background}>
        <Header
          onpressback={() => navigation.goBack()}
          isbackIcon={true}
          image={images.whiteLogo}
        />
        <ScrollView showsVerticalScrollIndicator={false}>
          <InnerContainer>
            <View style={{justifyContent: 'center'}}>
              <Text style={styles.Heading}>Sign Un</Text>
              <InuputFeild
                name="email"
                placeholder="Name"
                // value={value.name}
                // onChangeText={"name"}
                maxLength={20}
              />
              <InuputFeild
                name="email"
                placeholder="Email"
                // value={value.name}
                // onChangeText={"name"}
                maxLength={20}
              />
              <View style={styles.phone_input_view}>
                <InuputFeild
                  name="number"
                  style={styles.phone_code}
                  isEdit={false}
                  icon={massage_icon}
                  // value={value.name}
                  // onChangeText={"name"}
                  maxLength={20}
                />
                <InuputFeild
                  name="number"
                  style={styles.phone_number}
                  placeholder="Phone number"
                  // value={value.name}
                  keyboardType="numeric"
                  // onChangeText={"name"}
                  maxLength={20}
                />
              </View>
              <InuputFeild
                name="adress"
                style={styles.input}
                placeholder="Adress"
                // value={value.name}
                // onChangeText={"name"}
                maxLength={20}
              />
              <CheckBox/>
              <InuputFeild
                name="pasward"
                placeholder="Enter Passward"
                // value={value.name}
                // onChangeText={"name"}
                maxLength={20}
              />
              <InuputFeild
                name="confirm"
                placeholder="Confrim passward"
                // value={value.name}
                // onChangeText={"name"}
                maxLength={20}
              />
              <View>
                <TouchableOpacity style={styles.btn3}>
                  <Text style={styles.text}>Sign Up</Text>
                </TouchableOpacity>
              </View>
            </View>
          </InnerContainer>
        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default Signup_client;
