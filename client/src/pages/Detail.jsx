import tw, { styled, css } from 'twin.macro';
import PropTypes from 'prop-types';
import { detailInfo, lists } from '@/constants/cards';

import Badge from '@/components/shared/Badge';
import Star from '@/components/shared/Star';
import MapBtn from '@/components/shared/MapBtn';
import List from '@/components/MyList/List';

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
      <div css={tw`flex items-center px-1 py-5 mr-4`}>
        <div css={tw`flex mr-auto`}>
          <Title>{detailInfo.name}</Title>
          <Badge score={detailInfo.averageScore} />
        </div>
        <MapBtn
          css={tw`mr-2`}
          latitude={detailInfo.lat}
          longitude={detailInfo.lng}
        />
      </div>
      <Info>
        <Span>{`메뉴: ${detailInfo.menu}`}</Span>
        <Span>{`주소: ${detailInfo.address}`}</Span>
      </Info>
      <h2 css={tw`text-2xl ml-5 mb-2`}>맛집 점수</h2>
      <div css={tw`flex justify-center mb-5`}>
        <Star lg lock score={Math.floor(detailInfo.averageScore)} />
      </div>
      <h2 css={tw`text-2xl ml-5 mb-2`}>다른 리뷰</h2>
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
  tw``,
  css`
    width: 100vw;
    margin-left: calc(-50vw + 50%);
  `,
]);
const Img = styled.img(() => [
  tw``,
  css`
    height: 45vh;
    margin-top: -4em;
  `,
]);

const Title = styled.h1(() => [tw`text-3xl font-light ml-4`]);
const Info = styled.div(() => [
  tw`flex flex-col items-start bg-gray-400 px-2 py-4 mx-5 mb-5 rounded-md`,
]);
const Span = styled.span(() => [tw`ml-2`]);
const Review = styled.div(() => [tw`m-3`]);
