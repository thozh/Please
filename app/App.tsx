/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {StatusBar} from 'react-native';
import {Provider as PaperProvider} from 'react-native-paper';
import RootStack from './src/navigation/RootStack';
import {theme} from './src/theme';
import colors from './src/theme/colors';

const App = () => {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor={colors.black} />
      <PaperProvider theme={theme}>
        <NavigationContainer>
          <RootStack />
        </NavigationContainer>
      </PaperProvider>
    </>
  );
};

export default App;
