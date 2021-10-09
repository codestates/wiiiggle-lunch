import tw, { styled } from 'twin.macro';
import { useLocation } from 'react-router-dom';

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
          <NavItem>LOGIN 1</NavItem>
          <NavItem>SIGNUP 2</NavItem>
          <NavItem>MYLIST 3</NavItem>
        </StyledNav>
      );
    case MAIN:
      return (
        <StyledNav>
          <NavItem>MAIN 1</NavItem>
          <NavItem>MAIN 2</NavItem>
          <NavItem>MAIN 3</NavItem>
        </StyledNav>
      );
    case MYPAGE:
      return (
        <StyledNav>
          <NavItem>MYPAGE 1</NavItem>
          <NavItem>MYPAGE 2</NavItem>
          <NavItem>MYPAGE 3</NavItem>
        </StyledNav>
      );
    case RESTAURANTS:
      return (
        <StyledNav>
          <NavItem>RESTAURANTS 1</NavItem>
          <NavItem>RESTAURANTS 2</NavItem>
          <NavItem>RESTAURANTS 3</NavItem>
        </StyledNav>
      );
    case CREATE:
      return (
        <StyledNav>
          <NavItem>CREATE 1</NavItem>
          <NavItem>CREATE 2</NavItem>
          <NavItem>CREATE 3</NavItem>
        </StyledNav>
      );
    case SEARCH:
      return (
        <StyledNav>
          <NavItem>SEARCH 1</NavItem>
          <NavItem>SEARCH 2</NavItem>
          <NavItem>SEARCH 3</NavItem>
        </StyledNav>
      );
    default:
      return null;
  }
}

const StyledNav = styled.nav(() => [tw``]);
const NavItem = styled.div(() => [tw``]);
