import tw, { styled, css } from 'twin.macro';
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
      <StyledLink className="group" to={`/restaurants/${id}`}>
        <Name>{name}</Name>
        <Badge score={score} />
      </StyledLink>
      <ImageWrapper className="group">
        <Menu>대표메뉴: {menu}</Menu>
        <Alert>이미지 슬라이더로 보기</Alert>
      </ImageWrapper>
      <MapBtn latitude={latitude} longitude={longitude} address={address} />
    </Container>
  );
}

const Container = styled.div(() => [
  tw` border-2 border-gray-700 rounded-md py-3 px-2 flex flex-col mb-3`,
]);

const Name = styled.h3(() => [
  tw`mr-2 text-2xl group-hover:(underline text-blue-600)`,
]);

const ImageWrapper = styled.div(() => [
  tw`relative w-full h-52  bg-gray-100 px-1 py-2 mb-2 rounded-md`,
  css`
    &:hover {
      background-color: rgba(0, 0, 0, 0.2);
    }
  `,
]);
const Alert = styled.span(() => [
  tw`hidden absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-lg text-white font-semibold group-hover:block`,
]);
const Menu = styled.span(() => [
  tw`hidden absolute left-2 bottom-1 font-semibold text-lg text-gray-800 group-hover:block`,
]);

const StyledLink = styled(Link)(() => [tw`flex items-center mb-3 relative`]);
