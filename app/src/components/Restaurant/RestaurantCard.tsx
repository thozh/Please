import React from 'react';
import {Alert, Dimensions, Image, TouchableOpacity, View} from 'react-native';
import {Text} from 'react-native-paper';
import restaurant from '../../api/restaurant';
import {Images} from '../../assets';
import {Restaurant} from '../../containers/Restaurant/RestaurantList';

const RestaurantCard = ({item}: {item: Restaurant}) => {
  const {width} = Dimensions.get('window');
  const onSelectRestaurant = async () => {
    try {
      const {data} = await restaurant.getRestaurant(item.id);
      Alert.alert('Restaurant choisi', JSON.stringify(data));
    } catch (error) {
      Alert.alert('Erreur', error.message);
    }
  };
  return (
    <TouchableOpacity onPress={onSelectRestaurant}>
      <Image style={{width, height: 150}} source={Images.pancakes} />
      <View style={[]}>
        <Text style={{fontSize: 20}}>{item.name.toUpperCase()}</Text>
        <Text
          style={{
            fontSize: 20,
          }}>{`Panier minimum ${item.minimum_price}€ | ${item.specialities.join(
          ' ',
        )}`}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default RestaurantCard;
