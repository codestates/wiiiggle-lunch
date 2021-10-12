import tw, { styled } from 'twin.macro';
import { lists } from '@/constants/cards';
import Card from '@/components/shared/Card';

export default function Main() {
  return (
    <Layout>
      {lists.map(card => (
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

const Layout = styled.div(() => [tw``]);
