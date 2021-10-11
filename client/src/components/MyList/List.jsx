import tw, { styled } from 'twin.macro';
import PropTypes from 'prop-types';
import Label from '@/components/elements/Label';
import Star from '@/components/shared/Star';
import Button from '@/components/elements/Button';

List.defaultProps = {
  name: '',
  tmi: '',
  isFromDetail: false,
};

List.propTypes = {
  name: PropTypes.string,
  imgSrc: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
  tmi: PropTypes.string,
  isFromDetail: PropTypes.bool,
};

export default function List({ name, imgSrc, score, tmi, isFromDetail }) {
  return isFromDetail ? (
    <Layout css={tw`flex`}>
      <Image src={imgSrc} />
      <div css={tw`flex flex-col flex-grow justify-around ml-5`}>
        <Star sm lock score={score} />
        <Tmi>{tmi}</Tmi>
      </div>
    </Layout>
  ) : (
    <Layout>
      <Image src={imgSrc} />
      <Wrapper>
        <Box>
          <Label css={tw`text-lg relative top-0.5`}>{name}</Label>
          <Star css={tw``} sm lock score={score} />
        </Box>
        <Tmi>{tmi}</Tmi>
      </Wrapper>
      <BtnWrapper>
        <Button>수정</Button>
        <Button primary text>
          삭제
        </Button>
      </BtnWrapper>
    </Layout>
  );
}

const Layout = styled.div(() => [
  tw`flex justify-between w-full border-2 border-gray-600 rounded-md mb-2 p-2`,
]);
const Image = styled.img(() => [tw`w-20 h-16 `]);
const Wrapper = styled.div(() => [tw`flex flex-col mr-5`]);
const Box = styled.div(() => [tw`flex justify-between ml-2 items-center`]);
const Tmi = styled.span(() => [tw`mt-1`]);
const BtnWrapper = styled.div(() => [
  tw`flex flex-col justify-between items-end`,
]);
