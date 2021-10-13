import tw, { styled } from 'twin.macro';
import PropTypes from 'prop-types';
import { ReactComponent as StarIcon } from 'assets/solid-star.svg';
import { ReactComponent as EmptyStarIcon } from 'assets/outline-star.svg';
import { useRef } from 'react';

Star.defaultProps = {
  lg: false,
  sm: false,
  max: 5,
  score: 0,
  lock: false,
  onClick: () => null,
};

Star.propTypes = {
  lg: PropTypes.bool,
  sm: PropTypes.bool,
  lock: PropTypes.bool,
  max: PropTypes.number,
  score: PropTypes.number,
  onClick: PropTypes.func,
};

export default function Star({ lg, sm, score, lock, max, onClick }) {
  const keys = useRef(new Array(max).fill(0).map(() => Math.random()));
  return (
    <Wrapper>
      {new Array(score).fill(0).map((_, i) => (
        <StarIcon
          key={keys.current[i]}
          onClick={onClick}
          data-value={i + 1}
          css={[
            tw`w-10 h-10 text-primary -mr-1 cursor-pointer`,
            lg && tw`w-14 h-14`,
            sm && tw`w-4 h-4 -mr-0.5`,
            lock && tw`cursor-default`,
          ]}
        />
      ))}
      {new Array(max - score).fill(0).map((_, i) => (
        <EmptyStarIcon
          key={keys.current[i + score]}
          onClick={onClick}
          data-value={i + 1 + score}
          css={[
            tw`w-10 h-10 text-gray-300 -mr-1 cursor-pointer duration-200 hover:scale-105`,
            lg && tw`w-14 h-14`,
            sm && tw`w-4 h-4 -mr-0.5`,
            lock && tw`cursor-default`,
          ]}
        />
      ))}
    </Wrapper>
  );
}

const Wrapper = styled.div(() => [tw`flex`]);
