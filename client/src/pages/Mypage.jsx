import tw, { styled } from 'twin.macro';

export default function MyPage() {
  return (
    <Layout>
      <h1>마이페이지 화면</h1>
    </Layout>
  );
}

const Layout = styled.div(() => [tw``]);
