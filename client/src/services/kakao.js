import dotenv from 'dotenv';

dotenv.config();

export default class KaKao {
  constructor(client) {
    this.client = client;
  }

  async searchPlace(query) {
    const res = await this.client.get(
      `/v2/local/search/keyword.json?page=1&size=15&sort=accuracy&category_group_code=FD6&query=${query}`,
      {
        headers: {
          Authorization: `KakaoAK ${process.env.REACT_APP_REST_API_KEY}`,
        },
      },
    );

    return res.data;
  }
}
