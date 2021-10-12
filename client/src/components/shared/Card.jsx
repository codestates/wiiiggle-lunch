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
      <Link to={`/restaurants/${id}`}>
        <div css={tw`flex items-center`}>
          <Name>{name}</Name>
          <Badge score={score} />
        </div>
        <Wrapper>
          <li css={tw`mb-2`}>메뉴: {menu}</li>
          <li>주소: {address}</li>
        </Wrapper>
      </Link>
      <MapBtn latitude={latitude} longitude={longitude} />
    </Container>
  );
}

const Container = styled.div(() => [
  tw` border-2 border-gray-700 rounded-md p-2 flex flex-col mb-3`,
]);
const Name = styled.div(() => [tw`mr-2 text-2xl font-semibold`]);
const Wrapper = styled.ul(() => [tw`bg-gray-300 p-3 rounded-md`]);
