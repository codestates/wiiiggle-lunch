import tw, { styled, css } from 'twin.macro';
import PropTypes from 'prop-types';
import { detailInfo, lists } from '@/constants/cards';

import Badge from '@/components/shared/Badge';
import Star from '@/components/shared/Star';
import MapBtn from '@/components/shared/MapBtn';
import List from '@/components/shared/List';

Detail.defaultProps = {
  id: '3',
};

Detail.propTypes = {
  id: PropTypes.string,
};

export default function Detail({ id }) {
  return (
    <Layout>
      <Img src={detailInfo.imgSrc} />
      <Content>
        <Header>
          <Title>{detailInfo.name}</Title>
          <Badge score={detailInfo.averageScore} />
        </Header>
        <Info>
          <Menu>{`메뉴: ${detailInfo.menu}`}</Menu>
          <MapBtn
            latitude={detailInfo.lat}
            longitude={detailInfo.lng}
            address={detailInfo.address}
          />
        </Info>
      </Content>
      <SubTitle>맛집 점수</SubTitle>
      <div css={tw`flex justify-center mb-5`}>
        <Star lg lock score={Math.floor(detailInfo.averageScore)} />
      </div>
      <SubTitle>다른 리뷰</SubTitle>
      <Review>
        {lists
          .filter(li => li.id === id)
          .map(li => (
            <List
              imgSrc={li.imgSrc}
              score={Math.floor(li.score)}
              tmi={li.tmi}
              isFromDetail
            />
          ))}
      </Review>
    </Layout>
  );
}

const Layout = styled.div(() => [
  tw`pt-72`,
  css`
    margin-top: -64px;
  `,
]);
const Img = styled.img(() => [
  tw`absolute top-0 left-0 w-screen h-72`,
  css`
    object-fit: cover;
  `,
]);

const Content = styled.div(() => [tw`flex flex-col items-start mb-5`]);
const Header = styled.div(() => [tw`flex items-center py-2 mb-2`]);
const Title = styled.h1(() => [tw`text-2xl mr-3`]);
const SubTitle = styled.h3(() => [tw`text-lg mb-2`]);
const Info = styled.div(() => [tw`w-full p-2 bg-gray-100 rounded`]);
const Menu = styled.span(() => [tw`inline-block font-bold mb-2`]);
const Review = styled.div(() => [tw``]);
