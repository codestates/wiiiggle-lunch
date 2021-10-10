import tw, { styled } from 'twin.macro';
import PropTypes from 'prop-types';
import { list } from '@/constants/cards';
import Card from '@/components/shared/Card';

Main.defaultProps = {
  nickname: 'Chung',
};

Main.propTypes = {
  nickname: PropTypes.string,
};

export default function Main({ nickname }) {
  return (
    <Layout>
      <MainText>{`${nickname}님,\n위글런치에 오신것을 환영해요!`}</MainText>
      <SubText>
        {`피드에서 ${nickname}님이 원하시는 메뉴를 찾아 선택해주세요.\n맛집리스트 기여는 언제나 환영이에요!`}
      </SubText>
      {list.map(card => (
        <Card
          key={card.id}
          id={card.id}
          name={card.name}
          menu={card.menu}
          address={card.address}
          score={card.score}
          latitude={card.lat}
          longitude={card.lng}
        />
      ))}
    </Layout>
  );
}

const Layout = styled.div(() => [tw`flex flex-col justify-center`]);
const MainText = styled.p(() => [
  tw`font-semibold text-2xl whitespace-pre-wrap`,
]);
const SubText = styled.p(() => [tw`whitespace-pre-wrap`]);
