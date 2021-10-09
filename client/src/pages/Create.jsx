import Star from '@/components/shared/Star';
import { useState } from 'react';
import tw, { styled } from 'twin.macro';

export default function Create() {
  const [score, setScore] = useState(0);
  const onClick = e => {
    setScore(Number(e.currentTarget.dataset.value));
  };
  return (
    <Layout>
      <Star score={score} onClick={onClick} />
      <Star lg score={score} onClick={onClick} />
      <Star sm lock score={score} />
    </Layout>
  );
}

const Layout = styled.div(() => [tw``]);
