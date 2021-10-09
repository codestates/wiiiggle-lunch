import Proptypes from 'prop-types';
import tw, { styled } from 'twin.macro';

Badge.defaultProps = {
  score: 4.3,
};

Badge.propTypes = {
  score: Proptypes.number,
};

export default function Badge({ score }) {
  switch (true) {
    case score < 2:
      return (
        <Wrapper>
          <div css={tw`bg-blue-300 rounded-md px-1.5`}>별로에요</div>
        </Wrapper>
      );
    case score < 3:
      return (
        <Wrapper>
          <div css={tw`bg-green-400 rounded-md px-1.5`}>보통이에요</div>
        </Wrapper>
      );
    case score < 4:
      return (
        <Wrapper>
          <div css={tw`bg-yellow-500 rounded-md px-1.5`}>맛있어요</div>
        </Wrapper>
      );
    default:
      return (
        <Wrapper>
          <div css={tw`bg-red-400 rounded-md px-1.5`}>최고에요</div>
        </Wrapper>
      );
  }
}

const Wrapper = styled.span(() => [tw`flex items-center m-1.5`]);
