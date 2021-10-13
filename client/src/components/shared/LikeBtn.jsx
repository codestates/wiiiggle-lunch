import tw, { styled } from 'twin.macro';
import Proptypes from 'prop-types';
import { ReactComponent as Like } from 'assets/heart-fulfilled.svg';
import { ReactComponent as UnLike } from 'assets/heart-empty.svg';

LikeBtn.propTypes = {
  isLike: Proptypes.bool.isRequired,
  handleLike: Proptypes.func.isRequired,
};

export default function LikeBtn({ isLike, handleLike }) {
  return (
    <Wrapper onClick={() => handleLike()}>
      {isLike ? (
        <div>
          <Like
            css={tw`absolute animate-pingonce w-8 h-8 text-primary opacity-50 motion-safe:hover:scale-110`}
          />
          <Like css={tw`w-8 h-8 text-primary`} />
        </div>
      ) : (
        <UnLike
          css={tw`w-8 h-8 hover:text-primary motion-safe:hover:scale-110`}
        />
      )}
    </Wrapper>
  );
}

const Wrapper = styled.button(() => tw`after:animate-ping`);
