import tw, { styled } from 'twin.macro';
import PropTypes from 'prop-types';

Toast.propTypes = {
  message: PropTypes.string.isRequired,
  isWarning: PropTypes.bool.isRequired,
};

export default function Toast({ message, isWarning }) {
  return <Wrapper isWarning={isWarning}>{message}</Wrapper>;
}

const Wrapper = styled.div(({ isWarning }) => [
  tw`text-white font-bold px-5 py-2 rounded-md bg-green-600`,
  isWarning && tw`bg-red-600`,
]);
