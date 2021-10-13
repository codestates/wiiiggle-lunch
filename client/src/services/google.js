/* eslint-disable */
import dotenv from 'dotenv';

dotenv.config();

const REDIRECT_URI =
  'http://wiiiggle-test.s3-website.ap-northeast-2.amazonaws.com/login';
// const REDIRECT_URI = 'http://localhost:3000/login'; // ! 로컬 테스트 용
const SCOPE = 'https://www.googleapis.com/auth/userinfo.email	';
const googleOAuthURL = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${process.env.REACT_APP_GOOGLE_CLIENT_ID}&response_type=token&redirect_uri=${REDIRECT_URI}&scope=${SCOPE}`;

export default class Google {
  constructor(client) {
    this.client = client;
  }

  async getGoogleUserInfo(accessToken) {
    const data = await this.client.get('/userinfo', {
      params: {
        access_token: accessToken,
      },
      headers: {
        authorization: `token ${accessToken}`,
        accept: 'application/json',
      },
    });

    return data;
  }

  googleOAuthLogin() {
    window.location.assign(googleOAuthURL);
  }
}
