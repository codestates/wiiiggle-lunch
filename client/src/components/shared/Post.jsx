import tw, { styled, css } from 'twin.macro';
import PropTypes from 'prop-types';
import Star from '@/components/shared/Star';
import { ReactComponent as User } from 'assets/user.svg';

Post.defaultProps = {
  userInfo: { image: null, nickname: '익명' },
  images: '',
  score: '',
  menu: '',
  tmi: '',
};

Post.propTypes = {
  userInfo: PropTypes.shape({
    image: PropTypes.string,
    nickname: PropTypes.string,
  }),
  images: PropTypes.arrayOf(PropTypes.string),
  score: PropTypes.string,
  menu: PropTypes.string,
  tmi: PropTypes.string,
};

export default function Post({ userInfo, images, score, menu, tmi }) {
  return (
    <Container>
      <Header>
        <UserInfo>
          {userInfo.image ? (
            <Profile src={userInfo.image} />
          ) : (
            <div css={tw`p-1 bg-gray-100 rounded-full`}>
              <User css={tw`w-5 h-5 text-gray-500`} />
            </div>
          )}
          <Nickname>{userInfo.nickname}</Nickname>
        </UserInfo>
        <Star sm lock score={score} />
      </Header>
      {/* TODO: 이미지 슬라이더 적용 */}
      <Img src={images[0]} />
      <Desc>{tmi}</Desc>
      <Menu>{menu}</Menu>
    </Container>
  );
}

const Container = styled.div(() => [
  tw`shadow p-2 mb-5`,
  css`
    box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.3);
  `,
]);
const Header = styled.div(() => [tw`mb-2`, css``]);

const UserInfo = styled.div(() => [tw`flex items-center mb-1`, css``]);
const Profile = styled.img(() => [tw``, css``]);
const Nickname = styled.span(() => [tw`ml-2`, css``]);

const Img = styled.img(() => [tw`w-full h-48 object-cover`, css``]);
const Desc = styled.p(() => [tw`text-sm font-semibold my-1`, css``]);
const Menu = styled.span(() => [
  tw`text-xs font-bold p-1 bg-gray-800 text-white rounded-full`,
  css``,
]);
