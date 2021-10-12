import { useHistory } from 'react-router';
import tw, { styled, css } from 'twin.macro';
import Button from '@/components/elements/Button';

export default function Landing() {
  const history = useHistory();
  return (
    <Layout>
      <Wrapper>
        <Logo src="/images/logo_transparent.png" />
        <MainText>당신 근처의 점심맛집</MainText>
        <SubText>
          {`내가 추천하는 맛집과 다른사람이 추천하는 맛집!\n점심 선택의 고민은 여기서 끝날거 같아요!`}
        </SubText>
      </Wrapper>
      <ButtonBox>
        <Button
          solid
          primary
          lg
          onClick={() => history.push('/main')}
          css={tw`flex justify-center items-center w-full h-10`}
        >
          <span>둘러보기</span>
        </Button>
        <Box>
          <Span css={tw`text-gray-500`}>이미 계정이 있나요?</Span>
          <Button
            type="button"
            text
            primary
            sm
            onClick={() => history.push('/login')}
          >
            로그인
          </Button>
        </Box>
      </ButtonBox>
    </Layout>
  );
}

const Layout = styled.div(() => [tw`w-full flex flex-col items-center`, css``]);
const Wrapper = styled.div(() => [
  tw`flex flex-col justify-center items-center`,
]);
const Logo = styled.img(() => [tw`relative top-20 w-60 h-60`]);
const MainText = styled.p(() => [
  tw`font-semibold text-xl whitespace-pre-wrap pb-5 relative top-10`,
]);
const ButtonBox = styled.div(() => [tw`absolute bottom-8 w-5/6`]);
const SubText = styled.p(() => [
  tw`text-sm whitespace-pre-wrap text-center text-gray-500 relative top-6`,
]);
const Box = styled.div(() => [tw`text-center my-3`]);
const Span = styled.span(() => [tw`text-sm`]);
