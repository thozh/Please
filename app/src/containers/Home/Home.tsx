import React from 'react';
import {FlatList, View} from 'react-native';
import colors from '../../theme/colors';
import helpers from '../../theme/helpers';
import ServiceButton from '../../components/Home/ServiceButton';

export interface Service {
  id: number;
  label: string;
  icon: string;
}

const Services: Service[] = [
  {
    id: 1,
    label: 'restaurants',
    icon: 'utensils',
  },
  {
    id: 2,
    label: 'fast food',
    icon: 'hamburger',
  },
  {
    id: 3,
    label: "commande à l'avance",
    icon: 'utensils',
  },
];

const Home = () => {
  const renderService = ({item}: {item: Service}) => (
    <ServiceButton label={item.label} icon={item.icon} />
  );

  return (
    <FlatList
      data={Services}
      renderItem={renderService}
      keyExtractor={(item) => item.id.toString()}
      contentContainerStyle={helpers.fill}
      ItemSeparatorComponent={() => (
        <View
          style={{height: 1, backgroundColor: colors.white, width: '100%'}}
        />
      )}
    />
  );
};

export default Home;
