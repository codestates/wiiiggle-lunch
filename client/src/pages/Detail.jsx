import tw, { styled, css } from 'twin.macro';
import PropTypes from 'prop-types';
import { detailInfo, reviewLists } from '@/constants/cards';

import Badge from '@/components/shared/Badge';
import Star from '@/components/shared/Star';
import MapBtn from '@/components/shared/MapBtn';
import Post from '@/components/shared/Post';

Detail.defaultProps = {
  id: '3',
};

Detail.propTypes = {
  id: PropTypes.string,
};

export default function Detail({ id }) {
  console.log(id);
  return (
    <Layout>
      <Img src={detailInfo.imgSrc} />
      <Content>
        <Header>
          <div css={tw`flex items-center mb-1`}>
            <Title>{detailInfo.name}</Title>
            <Badge score={detailInfo.averageScore} />
          </div>
          <Star lock score={Math.floor(detailInfo.averageScore)} />
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
      <Review>
        {reviewLists.map(post => (
          <Post
            images={post.images}
            score={post.score}
            menu={post.menu}
            tmi={post.tmi}
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

const Content = styled.div(() => [tw`flex flex-col items-center mb-5`]);
const Header = styled.div(() => [
  tw`w-full flex flex-col items-center py-5 mb-2`,
]);
const Title = styled.h1(() => [tw`text-3xl tracking-wide mr-2`]);
const Info = styled.div(() => [tw`w-full p-2 bg-gray-200 rounded shadow-lg`]);
const Menu = styled.span(() => [tw`inline-block font-bold mb-2`]);
const Review = styled.div(() => [tw`mt-10`]);
