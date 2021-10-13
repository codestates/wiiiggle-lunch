import { useEffect, useRef } from 'react';
import tw, { styled } from 'twin.macro';
import Card from '@/components/shared/Card';
import useInfiniteScroll from '@/hooks/useInfiniteScroll';
import { loadRestaurantsRequestAction } from '@/store/reducers/restaurants';
import { useDispatch, useSelector } from 'react-redux';

export default function Main() {
  const lastId = useRef('');

  const dispatch = useDispatch();
  const {
    restaurants,
    restaurantsRequest,
    restaurantsSuccess,
    restaurantsFailure,
  } = useSelector(state => state.restaurants);

  const [containerRef, isIntersecting] = useInfiniteScroll([
    restaurantsSuccess,
  ]);

  if (restaurantsSuccess) {
    lastId.current = restaurants[restaurants.length - 1].id;
  }

  useEffect(() => {
    if (isIntersecting) {
      // ! false -> true일 때만 상태변경을 감지 true -> true는 감지 x
      console.log(`무한 스크롤링 ${lastId.current} 부터 가져오기 (디스패치)`);
      dispatch(loadRestaurantsRequestAction(lastId.current));
    }
  }, [isIntersecting]);

  if (restaurantsRequest) return <span>로딩 중...</span>;
  if (restaurantsFailure) return <span>{restaurantsFailure}</span>;

  return (
    <Layout ref={containerRef}>
      {restaurants.map(restaurant => (
        <Card
          key={restaurant.id}
          id={restaurant.id}
          name={restaurant.name}
          menu={restaurant.menu}
          address={restaurant.address}
          averageScore={restaurant.averageScore}
          images={restaurant.images}
          latitude={restaurant.latitude}
          longitude={restaurant.longitude}
        />
      ))}
    </Layout>
  );
}

const Layout = styled.div(() => [tw``]);
