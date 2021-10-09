import PropTypes from 'prop-types';
import tw, { styled } from 'twin.macro';

Thumbnail.defaultProps = {
  tag: 'qweqweqwe',
  size: 'lg',
};

Thumbnail.propTypes = {
  tag: PropTypes.string,
  size: PropTypes.string,
};

export default function Thumbnail({ tag, size }) {
  return (
    <Wrapper>
      <Image
        size={size}
        src="https://lh3.googleusercontent.com/proxy/9WYhb6eBF-_mJl2phegUPacf4BrK-dccaaubpmXmMnhAfpeJw3Z_q3gi1u-jjcVaeclntk7VFeK5t9cyMg8D4TkCpmMF731IAu0BCciSzy2LQ23OWQDjBipZGUZF-asNy251-sqq8g"
        name={tag}
      />
    </Wrapper>
  );
}

const Wrapper = styled.div(() => [tw``]);
const Image = styled.img(({ size }) => [
  size === 'lg' ? tw`w-full h-2/5` : tw`w-16 h-14`,
]);
