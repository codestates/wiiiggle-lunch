import tw, { styled } from 'twin.macro';
import GoogleLogoutBtn from '@/components/shared/GoogleLogoutBtn';

export default function MyPage() {
  return (
    <Layout>
      <h1>마이페이지 화면</h1>
      <GoogleLogoutBtn />
    </Layout>
  );
}

const Layout = styled.div(() => [tw``]);
