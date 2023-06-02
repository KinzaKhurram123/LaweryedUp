import {
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {COLORS, images} from '../../constant';
import Header from '../../Component/Header';
import {styles} from './index.style';
import { Button } from '../../Component';

const Authentication = ({navigation}) => {
  return (
    <SafeAreaView>
      <Header image={images.logo} isbackIcon={false} />
      <View>
        <ImageBackground style={styles.main_view} source={images.background}>
          <View style={styles.sub_view}>
            <Button style={styles.btn} onPress={() => navigation.navigate('Login')} text={'Client'}/>
            <Button style={styles.btn} text={'Lawyer'}/>
            <Button style={styles.btn} text={'Law Firm'}/>
          </View>
          <View style={{height:130}}/>
          <View style={styles.container}>
          <TouchableOpacity style={styles.btn2} >
          <Text style={styles.text}>Signup</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn3}>
          <Text style={styles.text}>Login</Text>
          </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
    </SafeAreaView>
  );
};

export default Authentication;
