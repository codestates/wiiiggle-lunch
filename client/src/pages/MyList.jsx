import tw, { styled } from 'twin.macro';
import List from '@/components/MyList/List';
import { reviewLists } from '@/constants/cards';

export default function MyList() {
  return (
    <Layout>
      {reviewLists.map(list => (
        <List
          key={list.id}
          name={list.name}
          imgSrc={list.imgSrc}
          score={list.score}
          tmi={list.tmi}
        />
      ))}
    </Layout>
  );
}

const Layout = styled.div(() => [tw``]);
