import tw, { styled, css } from 'twin.macro';
import { useHistory, useLocation } from 'react-router-dom';

import { ReactComponent as Left } from 'assets/arrow-left.svg';
import { ReactComponent as Search } from 'assets/search.svg';
import { ReactComponent as Setting } from 'assets/cog.svg';
import { useCallback, useEffect, useState } from 'react';
import SearchBar from '../Search/SearchBar';

const MAIN = 'main';
const LOGIN = 'login';
const SIGNUP = 'signup';
const MYPAGE = 'mypage';
const CREATE = 'create';
const RESTAURANTS = 'restaurants';
const SEARCH = 'search';
const MYLIST = 'mylist';

export default function Nav() {
  const [visible, setVisible] = useState(true);
  const { pathname } = useLocation();
  const page = pathname.split('/')[1];
  const history = useHistory();
  const goBack = useCallback(() => history.goBack(), []);

  useEffect(() => {
    let prev = 0;
    let throttled = false;

    const scrollHandler = () => {
      if (throttled) return;

      setTimeout(() => {
        setVisible(window.pageYOffset - prev > 0 || window.pageYOffset < 20);
        prev = window.pageYOffset;
        throttled = false;
      }, 350);

      throttled = true;
    };
    window.addEventListener('scroll', scrollHandler);
  }, []);

  switch (page) {
    case LOGIN:
    case SIGNUP:
    case MYLIST:
    case CREATE:
      return (
        <StyledNav visible={visible}>
          <NavItem css={tw`justify-self-start`} onClick={goBack}>
            <Left css={tw`w-8 h-8`} />
          </NavItem>
          <NavItem css={tw`uppercase tracking-wider font-bold text-lg`}>
            {page}
          </NavItem>
        </StyledNav>
      );
    case MAIN:
      return (
        <StyledNav visible={visible}>
          <NavItem
            css={[
              tw`uppercase tracking-wider font-bold text-primary justify-self-start`,
              css`
                grid-column: span 2;
              `,
            ]}
          >
            wiggle lunch
          </NavItem>
          <NavItem
            css={tw`justify-self-end`}
            onClick={() => history.push('/search')}
          >
            <Search css={tw`w-6 h-6`} />
          </NavItem>
        </StyledNav>
      );
    case MYPAGE:
      return (
        <StyledNav visible={visible}>
          <NavItem css={tw`justify-self-start`} onClick={goBack}>
            <Left css={tw`w-8 h-8`} />
          </NavItem>
          <NavItem
            css={tw`uppercase tracking-wider font-bold text-lg text-primary`}
          >
            {page}
          </NavItem>
          <NavItem css={tw`justify-self-end`}>
            <Setting css={tw`w-6 h-6`} />
          </NavItem>
        </StyledNav>
      );
    case RESTAURANTS:
      return (
        <StyledNav visible css={tw`inline-flex border-none bg-transparent`}>
          <NavItem css={tw`justify-self-start text-white`} onClick={goBack}>
            <Left css={tw`w-10 h-10`} />
          </NavItem>
        </StyledNav>
      );
    case SEARCH:
      return (
        <Flex>
          <NavItem
            css={tw`w-1/5 flex justify-center items-center p-2`}
            onClick={goBack}
          >
            <Left css={tw`w-8 h-8 ml-2`} />
          </NavItem>
          <NavItem css={tw`w-4/5 mt-1 p-2`}>
            <SearchBar />
          </NavItem>
        </Flex>
      );
    default:
      return null;
  }
}

const Flex = styled.div(() => [tw`flex mb-2`]);
const StyledNav = styled.nav(({ visible }) => [
  tw`fixed z-50 top-0 left-0 right-0 bg-white grid grid-cols-3 justify-items-center items-center h-14 border-b-2 border-gray-600 px-5 transition-transform`,
  !visible && tw`transform -translate-y-14 opacity-0`,
]);
const NavItem = styled.div(() => [tw``]);
