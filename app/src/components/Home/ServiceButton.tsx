import React from 'react';
import {
  View,
  Dimensions,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';
import {Text} from 'react-native-paper';
import colors from '../../theme/colors';
import helpers from '../../theme/helpers';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {Images} from '../../assets';
import {Service} from '../../containers/Home/Home';

const ServiceButton = ({label, icon}: Partial<Service>) => {
  const {width} = Dimensions.get('window');
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate('RestaurantList', {
          title: label,
        })
      }
      activeOpacity={1}>
      <Image style={{width, height: 200}} source={Images.pancakes} />
      <View style={[StyleSheet.absoluteFill, helpers.center]}>
        <Icon name={icon} size={30} color={colors.white} />
        <Text style={{color: colors.white, fontSize: 20}}>
          {label.toUpperCase()}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default ServiceButton;
