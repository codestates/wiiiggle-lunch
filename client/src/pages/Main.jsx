import SearchBar from '@/components/Search/SearchBar';
import Badge from '@/components/shared/Badge';
import Card from '@/components/shared/Card';
import tw, { styled } from 'twin.macro';

export default function Main() {
  return (
    <Layout>
      <SearchBar />
      <Card />
      <Badge />
    </Layout>
  );
}

const Layout = styled.div(() => [tw``]);
