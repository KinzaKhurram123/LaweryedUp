import * as React from 'react';
import {View, Text, StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Splash from '../screens/Splash';
import { COLORS } from '../constant';
import AuthStack from './AuthStack';

const Stack = createNativeStackNavigator();

function Main_navigator() {
  return (
    <NavigationContainer>
        <StatusBar
          translucent={true}
          showHideTransition="slide"
          animated
          backgroundColor={COLORS.secondary}
          barStyle="light-content"
        />
      <Stack.Navigator
        initialRouteName="Spalsh"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="AuthStack" component={AuthStack} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Main_navigator;
