import tw, { styled } from 'twin.macro';
import Card from '@/components/shared/Card';
import Thumbnail from '@/components/shared/Thumbnail';

export default function Main() {
  return (
    <Layout>
      <Card />
      <Thumbnail />
    </Layout>
  );
}

const Layout = styled.div(() => [tw``]);
