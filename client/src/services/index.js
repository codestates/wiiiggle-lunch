import axios from 'axios';

import KaKao from './kakao';
import Google from './google';
import User from './users';

const instance = axios.create({
  baseURL: 'http://15.164.102.29',
  withCredentials: true,
  headers: { 'Content-Type': 'application/json' },
});

const instanceOfKaKao = axios.create({
  baseURL: 'https://dapi.kakao.com',
});

const instanceOfGoogleOAuth = axios.create({
  baseURL: 'https://www.googleapis.com/oauth2/v2',
});

export const KAKAO_API = new KaKao(instanceOfKaKao);
export const GOOGLE_AUTH_API = new Google(instanceOfGoogleOAuth);
export const USER_API = new User(instance);
