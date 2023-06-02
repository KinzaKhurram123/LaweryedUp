import {
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView
} from 'react-native';
import React , {useState}from 'react';
import {Button, Header} from '../../Component';
import {images, SIZES} from '../../constant';
import {styles} from './index.style';

const Start = ({navigation}) => {
  const [btnType, setBtnType] = useState('General');
  return (
    <SafeAreaView>
      <Header image={images.logo}/>
      <View>
        <ImageBackground style={styles.main_view} source={images.background}>
          <View style={{height: '77%'}} />
          <ScrollView showsHorizontalScrollIndicator={true} horizontal>
          <View style={styles.container}>
            <TouchableOpacity
              activeOpacity={1}
              style={styles.btn3}
              onPress={() => navigation.navigate(null)}>
              <Text style={styles.text}>Signup</Text>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={1}
              style={styles.btn}
              onPress={() => navigation.navigate('Authantication')}>
              <Text style={styles.text}>Login</Text>
            </TouchableOpacity>
          </View>
          </ScrollView>
        </ImageBackground>
      </View>
    </SafeAreaView>
  );
};

export default Start;
