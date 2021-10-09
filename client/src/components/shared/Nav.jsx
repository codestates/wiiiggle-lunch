import tw, { styled, css } from 'twin.macro';
import { useLocation } from 'react-router-dom';

import { ReactComponent as Left } from 'assets/arrow-left.svg';
import { ReactComponent as Search } from 'assets/search.svg';
import { ReactComponent as Setting } from 'assets/cog.svg';
import Button from '../elements/Button';
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
  const { pathname } = useLocation();
  const page = pathname.split('/')[1];
  switch (page) {
    case LOGIN:
    case SIGNUP:
    case MYLIST:
      return (
        <StyledNav>
          <NavItem css={tw`justify-self-start`}>
            <Left css={tw`w-8 h-8`} />
          </NavItem>
          <NavItem css={tw`uppercase tracking-wider font-bold text-lg`}>
            {page}
          </NavItem>
        </StyledNav>
      );
    case MAIN:
      return (
        <StyledNav>
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
          <NavItem css={tw`justify-self-end`}>
            <Search css={tw`w-6 h-6`} />
          </NavItem>
        </StyledNav>
      );
    case MYPAGE:
      return (
        <StyledNav>
          <NavItem
            css={tw`uppercase tracking-wider font-bold text-lg text-primary`}
          >
            {page}
          </NavItem>
          <NavItem />
          <NavItem css={tw`justify-self-end`}>
            <Setting css={tw`w-6 h-6`} />
          </NavItem>
        </StyledNav>
      );
    case RESTAURANTS:
      return (
        <StyledNav css={tw`inline-flex border-none`}>
          <NavItem css={tw`justify-self-start`}>
            <Left css={tw`w-8 h-8`} />
          </NavItem>
        </StyledNav>
      );
    case CREATE:
      return (
        <StyledNav>
          <NavItem css={tw`justify-self-start font-light`}>
            <Button type="button" secondary text md>
              닫기
            </Button>
          </NavItem>
          <NavItem css={tw`font-bold text-gray-700`}>맛집 등록하기</NavItem>
          <NavItem css={tw`justify-self-end`}>
            <Button type="button" primary text md>
              완료
            </Button>
          </NavItem>
        </StyledNav>
      );
    case SEARCH:
      return (
        <StyledNav css={tw`border-none`}>
          <NavItem css={tw`justify-self-start`}>
            <Left css={tw`w-8 h-8`} />
          </NavItem>
          <NavItem
            css={css`
              grid-column: span 2;
            `}
          >
            <SearchBar />
          </NavItem>
        </StyledNav>
      );
    default:
      return null;
  }
}

const StyledNav = styled.nav(() => [
  tw`grid grid-cols-3 justify-items-center items-center h-14 border-b-2 border-gray-600 px-5`,
]);
const NavItem = styled.div(() => [tw``]);
