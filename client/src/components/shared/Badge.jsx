import Proptypes from 'prop-types';
import tw, { styled, css } from 'twin.macro';

Badge.defaultProps = {
  score: 2,
};

Badge.propTypes = {
  score: Proptypes.number,
};

export default function Badge({ score }) {
  let option = { type: { low: true }, text: '별로에요' };
  if (score > 4) option = { type: { highest: true }, text: '최고에요' };
  else if (score > 3) option = { type: { high: true }, text: '맛있어요' };
  else if (score > 2) option = { type: { medium: true }, text: '보통이에요' };
  return <Wrapper {...option.type}>{option.text}</Wrapper>;
}

const Wrapper = styled.span(({ highest, high, medium, low }) => [
  tw`rounded-md py-1 px-1.5 text-xs font-bold text-white border-2 border-black`,
  css`
    box-shadow: 3px 3px 0px rgba(0, 0, 0, 0.8);
  `,
  highest && tw`bg-red-600`, // 최고에요(4.1 ~)
  high && tw`bg-yellow-600`, // 맛있어요(3.1 ~)
  medium && tw`bg-green-600`, // 보통이에요(2.1 ~)
  low && tw`bg-blue-600`, // 별로에요(1.1)
]);
