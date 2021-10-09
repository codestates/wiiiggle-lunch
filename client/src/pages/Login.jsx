import tw, { styled } from 'twin.macro';
import { useHistory } from 'react-router-dom';
import Button from '@/components/elements/Button';
import Input from '@/components/elements/Input';
import Label from '@/components/elements/Label';

export default function Login() {
  const history = useHistory();
  return (
    <Form>
      <Field>
        <Label>이메일</Label>
        <Input css={tw`mt-1`} placeholder="example@naver.com" outline />
      </Field>
      <Field>
        <Label>비밀번호</Label>
        <Input css={tw`mt-1`} placeholder="●●●●●" outline />
      </Field>
      <Button css={tw`mt-5`} solid primary lg>
        로그인
      </Button>
      <Box>
        <Span>계정이 없나요?</Span>
        <Button text primary sm onClick={() => history.push('/signup')}>
          회원가입
        </Button>
      </Box>
    </Form>
  );
}

const Form = styled.form(() => [tw``]);
const Box = styled.div(() => [tw`text-center my-3`]);
const Field = styled.div(() => [tw`mb-3`]);
const Span = styled.span(() => [tw`text-sm`]);
