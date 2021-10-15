import tw, { styled, css } from 'twin.macro';

export default function Loading() {
  return (
    <Wrapper>
      <GIF src="images/loading-wiiiggle.gif" alt="loading..." />
    </Wrapper>
  );
}

const Wrapper = styled.div(() => [
  tw`h-screen flex justify-center items-center`,
  css`
    width: 100vw;
    margin-left: calc(-50vw + 50%);
    margin-top: -10px;
    background-color: #f6f6f6;
  `,
]);
const GIF = styled.img(() => [tw``]);
