import axios from 'axios';

import KaKao from './kakao';
import User from './users';

const instanceOfKaKao = axios.create({
  baseURL: 'https://dapi.kakao.com',
});

const instance = axios.create({
  baseURL: 'http://ec2-13-125-227-17.ap-northeast-2.compute.amazonaws.com',
  withCredentials: true,
  headers: { 'Content-Type': 'application/json' },
});

export const KAKAO_API = new KaKao(instanceOfKaKao);
export const USER_API = new User(instance);
