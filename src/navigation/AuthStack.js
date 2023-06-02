import {View, Text, StatusBar} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Authentication from '../screens/Authantication';
import Login from '../screens/Login';
import { COLORS } from '../constant';
import Start from '../screens/Start';
import Signup from '../screens/Signup_client';
import ForgetPasward from '../screens/ForgetPasward';
import Code from '../screens/Code';
import Signup_client from '../screens/Signup_client';

const AuthStack = () => {
  const Stack = createNativeStackNavigator();
  return (
    <>
      <StatusBar
        translucent={true}
        showHideTransition="slide"
        animated
        backgroundColor={COLORS.white}
        barStyle="dark-content"
      />
      <Stack.Navigator
        initialRouteName="Start"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Start" component={Start} />
        <Stack.Screen name="Authantication" component={Authentication} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="ForgetPasward" component={ForgetPasward} />
        <Stack.Screen name="Code" component={Code} />
        <Stack.Screen name="Signup_client" component={Signup_client} />
      </Stack.Navigator>
    </>
  );
};

export default AuthStack;
