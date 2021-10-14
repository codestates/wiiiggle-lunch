import googleLogo from 'assets/google/btn_google_light_normal_ios.png';
import tw, { styled } from 'twin.macro';

export default function GoogleBtn() {
  return (
    <Wrapper>
      <Logo src={googleLogo} />
      <div css={tw`flex justify-center items-center w-full`}>
        <Text>SIGN IN WITH GOOGLE</Text>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.button(() => [
  tw`w-full bg-white flex items-center rounded-sm shadow-sm border-2`,
]);
const Logo = styled.img(() => [tw`w-12 h-12`]);
const Text = styled.span(() => [tw`text-gray-700`]);
