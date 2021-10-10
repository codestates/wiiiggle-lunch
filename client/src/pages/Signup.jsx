import { useRef } from 'react';
import tw, { styled } from 'twin.macro';
import { useHistory } from 'react-router-dom';
import Button from '@/components/elements/Button';
import Input from '@/components/elements/Input';
import Label from '@/components/elements/Label';
import useInputs from '@/hooks/useInputs';
import {
  maxLength,
  minLength,
  passwordCheck,
  isRequire,
} from '@/utils/validator';

export default function Signup() {
  const history = useHistory();
  const passwordRef = useRef(null);
  const [value, onChange, errors, isValid] = useInputs(
    {
      email: '',
      nickname: '',
      password: '',
      password2: '',
    },
    {
      email: [isRequire('이메일을 입력해주세요!')],
      nickname: [
        minLength(2, '2자 이상의 닉네임을 입력해주세요!'),
        maxLength(15, '15자 이하의 닉네임을 입력해주세요!'),
        isRequire('닉네임을 입력해주세요!'),
      ],
      password: [
        minLength(8, '8자 이상의 비밀번호를 입력해주세요!'),
        maxLength(15, '15자 이하의 비밀번호를 입력해주세요!'),
        isRequire('비밀번호를 입력해주세요!'),
      ],
      password2: [
        minLength(8, '8자 이상의 비밀번호를 입력해주세요!'),
        maxLength(15, '15자 이하의 비밀번호를 입력해주세요!'),
        passwordCheck(
          passwordRef.current?.value,
          '비밀번호가 일치하지 않습니다!',
        ),
        isRequire('비밀번호를 입력해주세요!'),
      ],
    },
  );
  const onSubmit = e => {
    e.preventDefault();
    if (!isValid()) {
      console.log(errors);
      return;
    }
    console.log('submit', value);
  };
  return (
    <Form onSubmit={onSubmit}>
      <Field>
        <Label>이메일</Label>
        <Input
          {...{ value: value.email, onChange }}
          type="email"
          name="email"
          css={tw`mt-1`}
          placeholder="example@naver.com"
          outline
        />
        <Error>
          {errors.email?.map(message => (
            <span key={message}>{message}</span>
          ))}
        </Error>
      </Field>
      <Field>
        <Label>닉네임</Label>
        <Input
          {...{ value: value.nickname, onChange }}
          type="text"
          name="nickname"
          css={tw`mt-1`}
          placeholder="홍길동"
          outline
        />
        <Error>
          {errors?.nickname?.map(message => (
            <span key={message}>{message}</span>
          ))}
        </Error>
      </Field>
      <Field>
        <Label>비밀번호</Label>
        <Input
          type="password"
          ref={passwordRef}
          {...{ value: value.password, onChange }}
          name="password"
          css={tw`mt-1`}
          placeholder="●●●●●"
          outline
        />
        <Error>
          {errors.password?.map(message => (
            <span key={message}>{message}</span>
          ))}
        </Error>
      </Field>
      <Field>
        <Label>비밀번호 확인</Label>
        <Input
          type="password"
          {...{ value: value.password2, onChange }}
          name="password2"
          css={tw`mt-1`}
          placeholder="●●●●●"
          outline
        />
        <Error>
          {errors.password2?.map(message => (
            <span key={message}>{message}</span>
          ))}
        </Error>
      </Field>
      <Button css={tw`mt-5`} solid primary lg>
        회원가입
      </Button>
      <Box>
        <Span>이미 계정이 있나요?</Span>
        <Button text primary sm onClick={() => history.push('/login')}>
          로그인
        </Button>
      </Box>
    </Form>
  );
}

const Form = styled.form(() => [tw``]);
const Field = styled.div(() => [tw`mb-3`]);
const Box = styled.div(() => [tw`text-center my-3`]);
const Span = styled.span(() => [tw`text-sm`]);
const Error = styled.div(() => [
  tw`flex flex-col text-xs font-bold text-red-500`,
]);
