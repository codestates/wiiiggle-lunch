import tw, { styled, css } from 'twin.macro';
import { detailInfo } from '@/constants/cards';

import Badge from '@/components/shared/Badge';
import Star from '@/components/shared/Star';
import MapBtn from '@/components/shared/MapBtn';

export default function Detail() {
  return (
    <Layout>
      <Img src={detailInfo.imgSrc} />
      <div css={tw`flex items-center px-1 py-5`}>
        <div css={tw`flex mr-auto`}>
          <Title>{detailInfo.name}</Title>
          <Badge score={detailInfo.averageScore} />
        </div>
        <MapBtn latitude={detailInfo.lat} longitude={detailInfo.lng} />
      </div>
      <Info>
        <span>{detailInfo.menu}</span>
        <span>{detailInfo.address}</span>
      </Info>
      <h2 css={tw`text-xl`}>맛집 점수</h2>
      <div css={tw`flex justify-center`}>
        <Star lg lock score={Math.floor(detailInfo.averageScore)} />
      </div>
    </Layout>
  );
}

const Layout = styled.div(() => [
  tw``,
  css`
    margin-top: -56px;
  `,
]);
const Img = styled.img(() => [tw``]);
const Title = styled.h1(() => [tw`text-4xl font-light`]);
const Info = styled.div(() => [
  tw`flex flex-col items-start bg-gray-400 px-2 py-4 mb-5`,
]);
