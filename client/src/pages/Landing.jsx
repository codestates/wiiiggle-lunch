import { useHistory } from 'react-router';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import tw, { styled, css } from 'twin.macro';
import Button from '@/components/elements/Button';
import { ReactComponent as Down } from 'assets/arrow-down.svg';
/* eslint-disable */
const leftToRight = (reveal, delay) => [
  tw`-translate-x-20 opacity-0`,
  reveal && tw`opacity-100 transition-all duration-500 translate-x-0`,
  css`
    transition-delay: ${delay}ms;
  `,
];
const RightToLeft = (reveal, delay) => [
  tw`translate-x-20 opacity-0`,
  reveal && tw`opacity-100 transition-all duration-500 translate-x-0`,
  css`
    transition-delay: ${delay}ms;
  `,
];

export default function Landing() {
  const history = useHistory();
  const sections = useRef(null);
  const [open, setOpen] = useState([]);

  const callback = useCallback((entries, observer) => {
    // 교차되었으면, 기존 감지는 없앤다.
    console.log('LANDING', entries);
    console.log('LANDING', entries[0].isIntersecting);
    if (entries[0].isIntersecting) {
      setOpen(prev => [...prev, true]);
    }
  }, []);
  console.log('LANDING', open);

  const io = useMemo(
    () =>
      new IntersectionObserver(callback, {
        root: null,
        threshold: 1,
      }),
    [callback],
  );

  useEffect(() => {
    if (!sections.current) return;
    Array.from(sections.current.children).forEach(el => {
      io.observe(el);
    });
  }, []);

  return (
    <Layout>
      <Header>
        <Logo src="/images/logo_transparent.png" />
        <TextBox>
          <MainText>당신 근처의 점심맛집</MainText>
          <SubText>
            {`내가 추천하는 맛집과 다른사람이 추천하는 맛집!\n점심 선택의 고민은 여기서 끝날거 같아요!`}
          </SubText>
        </TextBox>
      </Header>
      <Down css={tw`mt-10 h-9 w-9 text-primary animate-bounce`} />
      <Sections ref={sections}>
        <Section reveal={open[0] || false}>
          <Desc css={leftToRight(open[0] || false)}>
            다른 사람들이 리뷰한 음식점 목록을 볼 수 있습니다.
          </Desc>
          <Img css={RightToLeft(open[0] || false, 500)} src="/images/a.png" />
        </Section>
        <Section reveal={open[1] || false}>
          <Img css={leftToRight(open[1] || false)} src="/images/b.png" />
          <Desc css={RightToLeft(open[1] || false, 500)}>
            음식점 위치를 지도로 확인할 수 있습니다.
          </Desc>
        </Section>
        <Section reveal={open[2] || false}>
          <Desc css={leftToRight(open[2] || false)}>
            다른 사람들이 올린 사진을 슬라이더로 간편하게 볼 수 있습니다.
          </Desc>
          <Img css={RightToLeft(open[2] || false, 500)} src="/images/c.png" />
        </Section>
        <Section reveal={open[3] || false}>
          <Img css={leftToRight(open[3] || false)} src="/images/d.png" />
          <Desc css={RightToLeft(open[3] || false, 500)}>
            다른 사람들이 리뷰 글을 볼 수 있습니다.
          </Desc>
        </Section>
        <Section reveal={open[4] || false}>
          <Desc css={leftToRight(open[4] || false)}>
            평가들을 올려 공유할 수 있습니다.
          </Desc>
          <Img css={RightToLeft(open[4] || false, 500)} src="/images/e.png" />
        </Section>
        <ButtonBox reveal={open[5] || false}>
          <Button
            solid
            primary
            lg
            onClick={() => history.push('/main')}
            css={tw`tracking-wider`}
          >
            둘러보기
          </Button>
          <Box>
            <Span css={tw`text-gray-500 text-sm`}>이미 계정이 있나요?</Span>
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
      </Sections>
    </Layout>
  );
}
// 소개 섹션 디자인
const Sections = styled.div(() => [tw` text-center mt-56 mb-3`]);

const Section = styled.div(({ reveal }) => [
  tw`opacity-0 flex items-center h-96`,
  reveal && tw`duration-500 opacity-100`,
]);

const Desc = styled.p(() => [
  tw`font-semibold whitespace-pre-wrap text-center text-gray-700 p-5 `,
  css`
    flex-basis: 55%;
  `,
]);

const Img = styled.img(() => [
  tw`h-64 object-cover border-4 border-gray-300`,
  css`
    flex-basis: 45%;
  `,
]);

// 랜딩페이지 헤더 디자인
const Layout = styled.div(() => [
  tw`w-full flex flex-col items-center justify-center`,
  css`
    margin-top: -64px;
  `,
]);

const Header = styled.div(() => [
  tw`flex flex-col justify-center items-center`,
]);
const Logo = styled.img(() => [
  tw` w-56 h-56`,
  css`
    transform: translateX(-3px);
  `,
]);
const TextBox = styled.div(() => [tw`-mt-6 p-2 mb-5`]);
const MainText = styled.p(() => [
  tw`font-light text-3xl whitespace-pre-wrap mb-3`,
]);
const SubText = styled.p(() => [
  tw`text-sm font-bold whitespace-pre-wrap text-center text-gray-500 `,
]);

const ButtonBox = styled.div(({ reveal }) => [
  tw`w-9/12 mx-auto opacity-0 transform translate-y-10`,
  reveal && tw`transition-all duration-500 transform translate-y-0 opacity-100`,
]);
const Box = styled.div(() => [
  tw`flex items-center justify-center text-center my-3`,
]);
const Span = styled.span(() => [tw`text-sm`]);
