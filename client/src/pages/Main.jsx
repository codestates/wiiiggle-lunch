import { useEffect, useRef } from 'react';
import tw, { styled } from 'twin.macro';
import Card from '@/components/shared/Card';
import useInfiniteScroll from '@/hooks/useInfiniteScroll';
import { loadRestaurantsRequestAction } from '@/store/reducers/restaurants';
import { useDispatch, useSelector } from 'react-redux';

export default function Main() {
  const [containerRef, isIntersecting] = useInfiniteScroll();
  const lastId = useRef(null);

  const dispatch = useDispatch();
  const {
    restaurants,
    restaurantsRequest,
    restaurantsSuccess,
    restaurantsFailure,
  } = useSelector(state => state.restaurants);

  if (restaurantsSuccess) {
    lastId.current = restaurants[restaurants.length - 1].id;
  }

  useEffect(() => {
    if (isIntersecting) {
      dispatch(loadRestaurantsRequestAction());
    }
  }, [isIntersecting]);

  console.log('restaurants: ', restaurants);

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
          score={restaurant.averageScore}
          latitude={restaurant.latitude}
          longitude={restaurant.longitude}
        />
      ))}
    </Layout>
  );
}

const Layout = styled.div(() => [tw``]);
