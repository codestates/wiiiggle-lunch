import { useState } from 'react';
import tw, { styled } from 'twin.macro';
import PropTypes from 'prop-types';

Card.defaultProps = {
  name: '하이디라',
  menu: '훠궈',
  address: '서울 서초구 서초대로 77길 어쩌구 저쩌구',
};

Card.propTypes = {
  name: PropTypes.string,
  menu: PropTypes.string,
  address: PropTypes.string,
};

export default function Card({ name, menu, address }) {
  const [modal, setModal] = useState(false);
  const onClick = () => {
    setModal(!modal);
  };

  return (
    <div>
      <Modal modal={modal}>This will be Map Modal</Modal>
      <Container>
        <div css={tw`flex`}>
          <Name>{name}</Name>
          <span css={tw`pt-1 pl-3`}>평점 뱃지</span>
        </div>

        <Wrapper>
          <li css={tw`mb-2`}>메뉴: {menu}</li>
          <li>주소: {address}</li>
        </Wrapper>
        <Map onClick={onClick}>🏞 지도에서 보기</Map>
      </Container>
    </div>
  );
}

const Container = styled.div(() => [
  tw`flex flex-col border-2 border-solid  border-black rounded-md p-3`,
]);
const Name = styled.div(() => [tw`mb-3 text-2xl font-semibold`]);
const Wrapper = styled.ul(() => [tw`bg-gray-300 p-3 rounded-md`]);
const Map = styled.button(() => [tw`self-start mt-2.5 ml-1 cursor-pointer`]);
const Modal = styled.div(({ modal }) => [
  modal ? tw`visible` : tw`visibility[hidden] `,
]);
