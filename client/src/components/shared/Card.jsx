import tw, { styled, css } from 'twin.macro';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Badge from '@/components/shared/Badge';
import MapBtn from '@/components/shared/MapBtn';

Card.defaultProps = {
  name: '식당 이름 정보가 없습니다.',
  menu: '메뉴정보가 없습니다.',
  address: '주소정보가 없습니다.',
  averageScore: 0,
  images: [],
  latitude: null,
  longitude: null,
};

Card.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string,
  menu: PropTypes.string,
  address: PropTypes.string,
  averageScore: PropTypes.string,
  images: PropTypes.arrayOf(PropTypes.string),
  latitude: PropTypes.string,
  longitude: PropTypes.string,
};

export default function Card({
  id,
  name,
  menu,
  address,
  averageScore,
  images,
  latitude,
  longitude,
}) {
  return (
    <Container>
      <StyledLink className="group" to={`/restaurants/${id}`}>
        <Name>{name}</Name>
        <Badge score={averageScore} />
      </StyledLink>
      <ImageWrapper className="group">
        <Img src={images.length !== 0 ? images[0] : '#'} />
        <Menu>대표메뉴: {menu}</Menu>
        <Alert>이미지 슬라이더로 보기</Alert>
        <Dim />
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
]);
const Img = styled.img(() => [tw`w-full h-full object-cover`]);
const Dim = styled.div(() => [
  tw`absolute top-0 bottom-0 left-0 right-0 hidden group-hover:block`,
  css`
    background-color: rgba(0, 0, 0, 0.5);
  `,
]);
const Alert = styled.span(() => [
  tw`hidden z-10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gray-800 p-1 text-white font-semibold group-hover:block`,
]);
const Menu = styled.span(() => [
  tw`hidden absolute left-2 bottom-1 font-semibold text-gray-100 group-hover:inline-block`,
]);

const StyledLink = styled(Link)(() => [tw`flex items-center mb-3 relative`]);
