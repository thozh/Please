import {useRoute} from '@react-navigation/native';
import React from 'react';
import {Alert, FlatList, View} from 'react-native';
import {Text} from 'react-native-paper';
import restaurant from '../../api/restaurant';
import colors from '../../theme/colors';
import helpers from '../../theme/helpers';
import metrics from '../../theme/metrics';
import RestaurantCard from '../../components/Restaurant/RestaurantCard';

enum RestaurantType {
  FAST_FOOD = 'fast food',
  RESTAURANT = 'restaurant',
}

export interface Restaurant {
  id: number;
  name: string;
  reviews: string[];
  rating: number;
  minimum_price: number;
  specialities: string[];
  type: RestaurantType;
}

const RestaurantList = () => {
  const renderRestaurant = ({item}: {item: Restaurant}) => (
    <RestaurantCard item={item} />
  );
  const [restaurants, setRestaurants] = React.useState([]);
  const route = useRoute();
  React.useEffect(() => {
    async function fetchRestaurants() {
      try {
        const {data} = await restaurant.getRestaurantsByType(
          route.params.title,
        );
        setRestaurants(data);
      } catch (error) {
        Alert.alert('Erreur', error.message);
      }
    }
    fetchRestaurants();
  }, []);

  return (
    <>
      <View style={metrics.smallPadding}>
        <Text style={{fontSize: 18}}>Livraison immédiate</Text>
        <Text style={{fontSize: 18}}>Midi et soir</Text>
      </View>
      <FlatList
        data={restaurants}
        renderItem={renderRestaurant}
        keyExtractor={(item) => item.id}
        contentContainerStyle={helpers.fill}
        ItemSeparatorComponent={() => (
          <View
            style={{height: 1, backgroundColor: colors.white, width: '100%'}}
          />
        )}
      />
    </>
  );
};

export default RestaurantList;
