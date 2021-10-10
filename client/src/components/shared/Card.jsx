import tw, { styled } from 'twin.macro';
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
  name: PropTypes.string,
  menu: PropTypes.string,
  address: PropTypes.string,
  score: PropTypes.number,
  latitude: PropTypes.string.isRequired,
  longitude: PropTypes.string.isRequired,
};

export default function Card({
  name,
  menu,
  address,
  score,
  latitude,
  longitude,
}) {
  return (
    <div css={tw`h-48`}>
      <Container>
        <div css={tw`flex`}>
          <Name>{name}</Name>
          <span css={tw``}>
            <Badge score={score} />
          </span>
        </div>

        <Wrapper>
          <li css={tw`mb-2`}>메뉴: {menu}</li>
          <li>주소: {address}</li>
        </Wrapper>
        <MapBtn latitude={latitude} longitude={longitude} />
      </Container>
    </div>
  );
}

const Container = styled.div(() => [
  tw`flex flex-col border-2 border-solid  border-gray-700 rounded-md p-2`,
]);
const Name = styled.div(() => [tw`mb-3 mr-2 ml-1.5 text-2xl font-semibold`]);
const Wrapper = styled.ul(() => [tw`bg-gray-300 p-3 rounded-md`]);
