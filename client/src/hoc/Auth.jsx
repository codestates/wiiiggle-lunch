/* eslint-disable */
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

export default (SpecialComponent, option) => {
  /* 
     예)  option: null -> 누구나 출입이 가능한 페이지 (home)
                 true -> 로그인한 유저만 출입이 가능한 페이지
                 false -> 로그인한 유저는 출입이 불가능한 페이지
  */

  const AuthenticateCheck = () => {
    const { userInfo } = useSelector(state => state.users);
    const history = useHistory();
    useEffect(() => {
      if (!userInfo && option) {
        history.push('/login');
      }
    }, []);

    return <SpecialComponent />;
  };

  return AuthenticateCheck;
};
