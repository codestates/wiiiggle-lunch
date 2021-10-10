export default class User {
  constructor(client) {
    this.client = client;
  }

  async postLogin(payload) {
    const response = await this.client.post('/login', payload);
    return response.data;
  }

  async postSignup(payload) {
    const response = await this.client.post('/signup', payload);
    return response.data;
  }

  async getLogout(accessToken) {
    const response = await this.client.get('/logout', {
      headers: { Authorization: `Bearer ${accessToken}` },
    });
    return response.data;
  }

  async getUserInfo(accessToken) {
    const response = await this.client.get('/users', {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return response.data;
  }

  async postChangeUserInfo(payload, accessToken) {
    const response = await this.client.put('/users', payload, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return response.data;
  }

  async getGoogleAccessToken(authorizationCode) {
    const res = this.client.post('/google', { authorizationCode });
    return res.data.accessToken;
  }
}
