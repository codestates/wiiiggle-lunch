export default class Restaurants {
  constructor(client) {
    this.client = client;
  }

  async getRestaurantList(lastId = '', query = '', size = 7) {
    const res = await this.client.get(
      `/restaurants?query=${query}&lastrestaurantsId=${lastId}&size=${size}`,
    );
    return res.data.restaurants;
  }

  async getRestaurant(id) {
    const res = await this.client.get(`/restaurants/${id}`);
    return res.data;
  }
}
