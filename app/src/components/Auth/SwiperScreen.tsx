import React from 'react';
import {Image, View, Dimensions} from 'react-native';
import {Text} from 'react-native-paper';
import {Images} from '../../assets';
import helpers from '../../theme/helpers';
import metrics from '../../theme/metrics';
import Background from '../Background';
import colors from '../../theme/colors';

interface Props {
  title: string;
  headline: string;
}
const SwiperScreen = ({headline, title}: Props) => {
  const {width, height} = Dimensions.get('window');
  return (
    <Background>
      <View
        style={[
          helpers.fill,
          metrics.mediumVerticalPadding,
          metrics.horizontalPadding,
          helpers.mainSpaceAround,
        ]}>
        <Text
          style={{
            fontSize: 40,
            color: colors.lightText,
            textAlign: 'center',
            fontWeight: '400',
          }}>
          {title.toUpperCase()}
        </Text>
        <Text
          style={{
            fontSize: 35,
            color: colors.lightText,
            textAlign: 'center',
            fontWeight: '300',
          }}>
          {headline}
        </Text>
      </View>

      <View style={{flex: 1.2}} />

      <View
        style={{
          width,
          overflow: 'hidden',
          position: 'absolute',
          left: 0,
          right: 0,
          bottom: -100,
          alignItems: 'center',
        }}>
        <Image
          resizeMode="cover"
          style={{height: 400}}
          source={Images.pokebowl}
        />
      </View>
    </Background>
  );
};

export default SwiperScreen;
