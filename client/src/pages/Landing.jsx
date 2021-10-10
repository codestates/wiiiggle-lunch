import { useHistory } from 'react-router';
import tw, { styled } from 'twin.macro';
import Button from '@/components/elements/Button';

export default function Landing() {
  const history = useHistory();
  return (
    <Layout>
      <Logo src="/images/wiiiggle-logo.png" />
      <MainText>당신 근처의 점심맛집</MainText>
      <SubText>
        {`내가 추천하는 맛집과 다른사람이 추천하는 맛집!\n맛집에서 생각지도 못했던 먹고싶은 메뉴가 있다면\n점심 선택의 고민은 여기서 끝날거 같아요!`}
      </SubText>
      <ButtonBox>
        <Button
          css={tw`mt-5`}
          solid
          primary
          lg
          onClick={() => history.push('/main')}
        >
          둘러보기
        </Button>
        <Box>
          <Span>계정이 있나요?</Span>
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

const Layout = styled.div(() => [tw`flex flex-col items-center`]);
const Logo = styled.img(() => [tw``]);
const MainText = styled.p(() => [
  tw`font-semibold text-2xl whitespace-pre-wrap pb-5`,
]);
const ButtonBox = styled.div(() => [tw`absolute bottom-8 w-5/6`]);
const SubText = styled.p(() => [tw`whitespace-pre-wrap text-center`]);
const Box = styled.div(() => [tw`text-center my-3`]);
const Span = styled.span(() => [tw`text-sm`]);
