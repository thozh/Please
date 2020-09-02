import React from 'react';
import {Image} from 'react-native';
import {ActivityIndicator} from 'react-native-paper';
import {Images} from '../assets';
import Background from '../components/Background';
import colors from '../theme/colors';

const SplashScreen = ({navigation}) => {
  React.useEffect(() => {
    setTimeout(() => {
      navigation.reset({
        index: 0,
        routes: [{name: 'Auth'}],
      });
    }, 1500);
  }, []);

  return (
    <Background>
      <Image
        resizeMode="contain"
        source={Images.logo}
        style={{
          width: '80%',
          height: undefined,
          aspectRatio: 1,
        }}
      />
      <ActivityIndicator color={colors.black} />
    </Background>
  );
};

export default SplashScreen;
