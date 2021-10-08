import axios from 'axios';

import KaKao from './kakao';

const instanceOfKaKao = axios.create({
  baseURL: 'https://dapi.kakao.com',
});

export default new KaKao(instanceOfKaKao);
