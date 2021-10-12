import tw, { styled } from 'twin.macro';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Badge from '@/components/shared/Badge';
import MapBtn from '@/components/shared/MapBtn';

Card.defaultProps = {
  name: '하이디라',
  menu: '훠궈',
  address: '서울 서초구 서초대로 77길 어쩌구 저쩌구',
  score: 4.1,
};

Card.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string,
  menu: PropTypes.string,
  address: PropTypes.string,
  score: PropTypes.number,
  latitude: PropTypes.string.isRequired,
  longitude: PropTypes.string.isRequired,
};

export default function Card({
  id,
  name,
  menu,
  address,
  score,
  latitude,
  longitude,
}) {
  return (
    <Container>
      <StyledLink to={`/restaurants/${id}`}>
        <Header>
          <Name>{name}</Name>
          <Badge score={score} />
        </Header>
        <Wrapper>
          <Menu>대표메뉴: {menu}</Menu>
        </Wrapper>
      </StyledLink>
      <MapBtn latitude={latitude} longitude={longitude} address={address} />
    </Container>
  );
}

const Container = styled.div(() => [
  tw` border-2 border-gray-700 rounded-md py-3 px-2 flex flex-col mb-3`,
]);

const Header = styled.div(() => [tw` flex items-center mb-3`]);
const Name = styled.h3(() => [tw`mr-2 text-2xl`]);
const Wrapper = styled.div(() => [
  tw`relative w-full h-52  bg-gray-100 px-1 py-2 rounded-md`,
]);

const StyledLink = styled(Link)(() => [tw`mb-2`]);

const Menu = styled.span(() => [tw`absolute bottom-1 font-semibold`]);
