import tw, { styled, css } from 'twin.macro';
import { Transition } from 'react-transition-group';
import PropTypes from 'prop-types';

Toast.propTypes = {
  message: PropTypes.string.isRequired,
  isWarning: PropTypes.bool.isRequired,
  open: PropTypes.bool.isRequired,
};

export default function Toast({ message, isWarning, open }) {
  return (
    <Transition in={open} timeout={350} mountOnEnter>
      {state => {
        console.info('transition:', state); // entered -> exiting -> exited
        return (
          <Wrapper isWarning={isWarning} state={state}>
            {typeof message === 'string' ? message : '알 수 없는 에러입니다?!'}
          </Wrapper>
        );
      }}
    </Transition>
  );
}

const Wrapper = styled.div(({ isWarning, state }) => [
  tw`text-white text-center font-bold px-5 py-2 rounded-md bg-green-600 transition-all duration-300`,
  css`
    opacity: 0;
    transform: translateY(-100px);
    box-shadow: 3px 3px 1px rgba(0, 0, 0, 0.8);
  `,
  ['entered', 'exiting'].includes(state) &&
    css`
      opacity: 1;
      transform: translateY(0);
    `,
  state === 'exited' &&
    css`
      opacity: 0;
      transform: translateY(-100px);
    `,
  isWarning && tw`bg-red-600`,
]);
