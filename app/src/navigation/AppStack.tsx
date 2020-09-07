import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {Text} from 'react-native-paper';
import Home from '../containers/Home/Home';
import RestaurantList from '../containers/Restaurant/RestaurantList';
import colors from '../theme/colors';

const Stack = createStackNavigator();

const AppStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerStyle: {backgroundColor: colors.primary}}}>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerTitle: () => (
            <Text style={{color: colors.white, fontSize: 35}}>Please</Text>
          ),
        }}
      />
      <Stack.Screen
        name="RestaurantList"
        component={RestaurantList}
        options={({route}: any) => ({
          headerTitle: () => (
            <Text style={{color: colors.white, fontSize: 20}}>
              {route.params.title.toUpperCase()}
            </Text>
          ),
        })}
      />
    </Stack.Navigator>
  );
};

export default AppStack;
