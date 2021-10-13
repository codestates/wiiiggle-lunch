import { useRef } from 'react';
import { useHistory } from 'react-router-dom';
import tw, { styled } from 'twin.macro';
import PropTypes from 'prop-types';
import Button from '@/components/elements/Button';
import Input from '@/components/elements/Input';
import useInputs from '@/hooks/useInputs';
import {
  maxLength,
  minLength,
  passwordCheck,
  isRequire,
} from '@/utils/validator';
import { ReactComponent as Clipboard } from 'assets/clipboard-list.svg';
import { ReactComponent as Plus } from 'assets/plus.svg';

MyPage.defaultProps = {
  email: 'jvn4develop@gmail.com',
  nickname: 'Chung',
};

MyPage.propTypes = {
  email: PropTypes.string,
  nickname: PropTypes.string,
};

export default function MyPage({ email, nickname }) {
  const passwordRef = useRef(null);
  const history = useHistory();

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
    console.log('edit profile', value);
  };

  return (
    <Layout>
      <Field css={tw`ml-1 mt-2`}>
        <MainText>{nickname}</MainText>
        <SubText>{email}</SubText>
      </Field>
      <Wrapper>
        <FuncBtn onClick={() => history.push('/mylist')}>
          <Icon>
            <Clipboard css={tw`w-8 h-8 text-white group-hover:text-gray-700`} />
          </Icon>
          <SubText>마이리스트</SubText>
        </FuncBtn>
        <FuncBtn>
          <Icon>
            <Plus css={tw`w-8 h-8 text-white group-hover:text-gray-700`} />
          </Icon>
          <SubText>Coming Soon!</SubText>
        </FuncBtn>
        <FuncBtn>
          <Icon>
            <Plus css={tw`w-8 h-8 text-white group-hover:text-gray-700`} />
          </Icon>
          <SubText>Coming Soon!</SubText>
        </FuncBtn>
      </Wrapper>
      <Form onSubmit={onSubmit}>
        <MainText>프로필 수정</MainText>
        <Field>
          <Input
            {...{ value: value.email, onChange }}
            error={errors.email.length !== 0}
            type="email"
            name="email"
            css={tw`mt-1`}
            placeholder={email}
            outline
          />
          <Error>
            {errors.email?.map(message => (
              <span key={message}>{message}</span>
            ))}
          </Error>
        </Field>
        <Field>
          <Input
            {...{ value: value.nickname, onChange }}
            error={errors.nickname.length !== 0}
            type="text"
            name="nickname"
            css={tw`mt-1`}
            placeholder={nickname}
            outline
          />
          <Error>
            {errors?.nickname?.map(message => (
              <span key={message}>{message}</span>
            ))}
          </Error>
        </Field>
        <Field>
          <Input
            type="password"
            error={errors.password.length !== 0}
            ref={passwordRef}
            {...{ value: value.password, onChange }}
            name="password"
            css={tw`mt-1`}
            placeholder="비밀번호"
            outline
          />
          <Error>
            {errors.password?.map(message => (
              <span key={message}>{message}</span>
            ))}
          </Error>
        </Field>
        <Field>
          <Input
            type="password"
            error={errors.password2.length !== 0}
            {...{ value: value.password2, onChange }}
            name="password2"
            css={tw`mt-1`}
            placeholder="비밀번호 확인"
            outline
          />
          <Error>
            {errors.password2?.map(message => (
              <span key={message}>{message}</span>
            ))}
          </Error>
        </Field>
        <Button css={tw`mt-5`} solid primary lg>
          수정하기
        </Button>
      </Form>
    </Layout>
  );
}

const Layout = styled.div(() => [tw``]);
const MainText = styled.p(() => [
  tw`font-semibold text-2xl whitespace-pre-wrap mb-2`,
]);
const SubText = styled.p(() => [tw`whitespace-pre-wrap text-gray-600`]);
const Wrapper = styled.div(() => [tw`flex`]);
const Icon = styled.i(() => [
  tw`flex justify-center items-center w-14 h-14 bg-primary rounded-full mb-2
`,
]);
const FuncBtn = styled.button(
  () => tw`flex flex-1 flex-col justify-center items-center mt-6`,
);
const Form = styled.form(() => [tw`mt-8`]);
const Field = styled.div(() => [tw`mb-2`]);
const Error = styled.div(() => [
  tw`flex flex-col text-xs font-bold text-red-500`,
]);
