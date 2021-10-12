import { useState, useEffect } from 'react';
import tw, { styled } from 'twin.macro';
import { lists } from '@/constants/cards';
import Card from '@/components/shared/Card';
import Loading from '@/components/shared/Loading';

export default function Main() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <Layout>
      {isLoading ? (
        <Loading />
      ) : (
        lists.map(card => (
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
        ))
      )}
    </Layout>
  );
}

const Layout = styled.div(() => [tw``]);
