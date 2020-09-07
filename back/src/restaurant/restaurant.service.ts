import { Injectable, NotFoundException } from '@nestjs/common';
import * as RestaurantFixtures from './fixtures/restaurants.json';

export enum RestaurantType {
  FAST_FOOD = 'fast food',
  RESTAURANT = 'restaurant',
  COMMANDE = "commande à l'avance",
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

@Injectable()
export class RestaurantService {
  getRestaurantsByType(type: string) {
    return RestaurantFixtures.filter(restaurant => {
      return restaurant.type === type;
    });
  }

  getRestaurant(id: number) {
    const restaurant = RestaurantFixtures.find(
      restaurant => restaurant.id === id,
    );
    if (!restaurant) {
      throw new NotFoundException();
    }
    return restaurant;
  }
}
