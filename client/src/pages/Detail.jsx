import tw, { styled, css } from 'twin.macro';

import Badge from '@/components/shared/Badge';
import Star from '@/components/shared/Star';
import MapBtn from '@/components/shared/MapBtn';
import Post from '@/components/shared/Post';
import { useEffect, useRef } from 'react';
import { RestaurantsDetailRequestAction } from '@/store/reducers/restaurants';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';

export default function Detail() {
  const dispatch = useDispatch();
  const {
    restaurant,
    restaurantsDetailRequest,
    restaurantsDetailSuccess,
    restaurantsDetailFailure,
  } = useSelector(state => state.restaurants);
  const titleImage = useRef('#');
  const { id } = useParams();

  useEffect(() => {
    dispatch(RestaurantsDetailRequestAction(id));
  }, []);

  // 대표 이미지 가져오기
  if (restaurantsDetailSuccess) {
    const titlePost = restaurant.posts?.find(post => post.images.length !== 0);
    titleImage.current = titlePost?.images[0] || '#';
  }

  console.log('식당 상세정보', restaurant);

  if (restaurantsDetailRequest) return <span>로딩 중...</span>;
  if (restaurantsDetailFailure) return <span>{restaurantsDetailFailure}</span>;
  if (!restaurant) return null;
  return (
    <Layout>
      <Img src={titleImage.current} />
      <Content>
        <Header>
          <div css={tw`flex items-center mb-1`}>
            <Title>{restaurant.restaurants.name}</Title>
            <Badge score={restaurant.averageScore} />
          </div>
          <Star lock score={parseInt(restaurant.averageScore, 10)} />
        </Header>
        <Info>
          <Menu>{`메뉴: `}</Menu>
          <MapBtn
            latitude={restaurant.restaurants.latitude}
            longitude={restaurant.restaurants.longitude}
            address={restaurant.restaurants.address}
          />
        </Info>
      </Content>
      <Review>
        {restaurant.posts.map(post => (
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
