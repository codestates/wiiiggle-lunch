import tw, { styled, css } from 'twin.macro';
import PropTypes from 'prop-types';

Modal.propTypes = {
  children: PropTypes.element.isRequired,
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default function Modal({ children, open, onClose }) {
  return (
    <Overlay open={open}>
      <Dim open={open} onClick={onClose} />
      <Container>{children}</Container>
    </Overlay>
  );
}

const Overlay = styled.div(({ open }) => [
  tw`fixed z-50 top-0 bottom-0 right-0 left-0 hidden`,
  open && tw`flex items-center justify-center`,
]);
const Dim = styled.div(({ open }) => [
  tw`absolute top-0 bottom-0 right-0 left-0`,
  css`
    background-color: rgba(0, 0, 0, 0.35);
  `,
  open && tw`transition-opacity opacity-100`,
]);
const Container = styled.div(() => [tw``]);
