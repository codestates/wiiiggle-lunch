import tw, { styled } from 'twin.macro';
import { useHistory } from 'react-router-dom';
import Button from '@/components/elements/Button';
import Input from '@/components/elements/Input';
import Label from '@/components/elements/Label';
import useInputs from '@/hooks/useInputs';
import { isRequire } from '@/utils/validator';
import { GOOGLE_AUTH_API } from '@/services';
import { useCallback, useEffect } from 'react';

export default function Login() {
  const history = useHistory();

  const [value, onChange, errors, isValid] = useInputs(
    { email: '', password: '' },
    {
      email: isRequire('이메일을 입력해주세요!'),
      password: isRequire('비밀번호를 입력해주세요!'),
    },
  );

  const fetchUserInfo = useCallback(async accessToken => {
    const data = await GOOGLE_AUTH_API.getGoogleUserInfo(accessToken);
    console.log(data); // ! 구글 이메일 인증 유저 정보
  }, []);

  useEffect(() => {
    const url = new URL(window.location.href);
    const accessToken = url.hash.split('=')[1].split('&')[0];
    fetchUserInfo(accessToken);
  }, []);

  const onSubmit = e => {
    e.preventDefault();
    if (!isValid()) {
      console.log(errors);
      return;
    }
    console.log('submit:', value);
  };

  // FIXME: 각 필드의 success, error 처리
  return (
    <Form onSubmit={onSubmit}>
      <Field>
        <Label>이메일</Label>
        <Input
          {...{ value: value.email, onChange }}
          error={errors?.email}
          success={!errors?.email}
          name="email"
          css={tw`mt-1`}
          placeholder="example@naver.com"
          outline
        />
        <Error>
          {errors?.email?.map(message => (
            <span key={message}>{message}</span>
          ))}
        </Error>
      </Field>
      <Field>
        <Label>비밀번호</Label>
        <Input
          {...{ value: value.password, onChange }}
          error={errors?.password}
          success={!errors?.password}
          name="password"
          css={tw`mt-1`}
          placeholder="●●●●●"
          outline
        />
        <Error>
          {errors?.password?.map(message => (
            <span key={message}>{message}</span>
          ))}
        </Error>
      </Field>
      <Button css={tw`mt-5`} solid primary lg>
        로그인
      </Button>
      <Box>
        <Span>계정이 없나요?</Span>
        <Button
          type="button"
          text
          primary
          sm
          onClick={() => history.push('/signup')}
        >
          회원가입
        </Button>
      </Box>
      <Button
        type="button"
        solid
        primary
        lg
        onClick={() => GOOGLE_AUTH_API.googleOAuthLogin()}
      >
        구글 로그인
      </Button>
    </Form>
  );
}

const Form = styled.form(() => [tw``]);
const Field = styled.div(() => [tw`mb-3`]);
const Box = styled.div(() => [tw`text-center my-3`]);
const Span = styled.span(() => [tw`text-sm`]);
const Error = styled.small(() => [tw`text-xs font-bold text-red-500`]);
