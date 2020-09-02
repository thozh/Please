import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import AuthSwiper from '../containers/Auth/Swiper';

const Stack = createStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="AuthSwiper" component={AuthSwiper} />
    </Stack.Navigator>
  );
};

export default AuthStack;
