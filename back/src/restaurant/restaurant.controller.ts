import { Controller, Get, Param, Query, ParseIntPipe } from '@nestjs/common';
import { RestaurantService, RestaurantType } from './restaurant.service';

@Controller('restaurants')
export class RestaurantController {
  constructor(private readonly restaurantService: RestaurantService) {}

  @Get()
  async getRestaurantsByType(@Query() query) {
    return this.restaurantService.getRestaurantsByType(query.type);
  }

  @Get(':id')
  async getRestaurant(@Param('id', ParseIntPipe) id: number) {
    return this.restaurantService.getRestaurant(id);
  }
}
