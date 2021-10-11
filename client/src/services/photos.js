export default class Photos {
  constructor(client) {
    this.client = client;
  }

  async uploadPhoto(payload) {
    const res = await this.client.post('/photos', payload);
    return res.data;
  }
}
