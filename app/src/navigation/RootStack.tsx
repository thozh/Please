import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import SplashScreen from '../containers/SplashScreen';
import AuthStack from './AuthStack';
import AppStack from './AppStack';

const Stack = createStackNavigator();

const RootStack = () => {
  return (
    <Stack.Navigator initialRouteName="Splash" headerMode="none">
      <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen name="Auth" component={AuthStack} />
      <Stack.Screen name="App" component={AppStack} />
    </Stack.Navigator>
  );
};

export default RootStack;
