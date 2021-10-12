import tw, { styled } from 'twin.macro';
import { useHistory, useLocation } from 'react-router-dom';
import { ReactComponent as HomeIcon } from 'assets/home.svg';
import { ReactComponent as UserIcon } from 'assets/user.svg';
import { ReactComponent as GridIcon } from 'assets/grid-add.svg';

const MAIN = 'main';
const MYPAGE = 'mypage';
const MYLIST = 'mylist';
const CREATE = 'create';

export default function UnderBar() {
  const { pathname } = useLocation();
  const history = useHistory();
  const page = pathname.split('/')[1];
  console.log(page);
  if (![MAIN, MYPAGE, MYLIST, CREATE].includes(page)) return null;
  return (
    <Container>
      <Item onClick={() => history.push('/main')} current={page === MAIN}>
        <HomeIcon css={tw`w-8 h-8`} />
      </Item>
      <Item onClick={() => history.push('/create')} current={page === CREATE}>
        <GridIcon css={tw`w-8 h-8`} />
      </Item>
      <Item onClick={() => history.push('/mypage')} current={page === MYPAGE}>
        <UserIcon css={tw`w-8 h-8`} />
      </Item>
    </Container>
  );
}

const Container = styled.div(() => [
  tw`fixed left-0 right-0 bottom-0 grid grid-cols-3 place-items-center border-t-2 border-gray-700 h-14 bg-white`,
]);
const Item = styled.div(({ current }) => [current && tw`text-primary`, tw``]);
