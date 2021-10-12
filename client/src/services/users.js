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
      headers: { Authorization: `${accessToken}` },
    });
    return response.data;
  }

  async getUserInfo() {
    const response = await this.client.get('/users');
    return response.data;
  }

  async postChangeUserInfo(payload, accessToken) {
    const response = await this.client.put('/users', payload, {
      headers: {
        Authorization: `${accessToken}`,
      },
    });
    return response.data;
  }

  // FIXME: 서버가 accessToken으로 유저 정보를 얻어서 처리 vs 클라이언트가 유저정보를 얻어 서버에게 보내기
  async getGoogleAccessToken(authorizationCode) {
    const res = this.client.post('/google', { authorizationCode });
    return res.data.accessToken;
  }
}
