import api from './client';

const getRestaurantsByType = (type: string) => {
  return api.get('/restaurants', {
    params: {
      type,
    },
  });
};

const getRestaurant = (id: number) => {
  return api.get(`/restaurants/${id}`);
};

export default {getRestaurantsByType, getRestaurant};
