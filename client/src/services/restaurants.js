export default class Restaurants {
  constructor(client) {
    this.client = client;
  }

  async getRestaurantList(query, lastId, size) {
    const res = this.client.get(
      `/restaurants?query=${query}&lastrestaurantsId=${lastId}&size=${size}`,
    );
    return res.data;
  }

  async getRestaurant(id) {
    const res = this.client.get(`/restaurants/${id}`);
    return res.data;
  }
}
