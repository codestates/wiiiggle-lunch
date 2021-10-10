import Select from '@/components/Create/Select';
import UploadBtn from '@/components/Create/UploadBtn';
import Input from '@/components/elements/Input';
import Label from '@/components/elements/Label';
import Star from '@/components/shared/Star';
import { useState } from 'react';
import tw, { styled } from 'twin.macro';

export default function Create() {
  const [score, setScore] = useState(0);
  const onClick = e => {
    setScore(Number(e.currentTarget.dataset.value));
  };
  return (
    <Form>
      <UploadBtn />
      <Box>
        <P>맛집 점수를 평가해주세요</P>
        <Star score={score} onClick={onClick} />
      </Box>
      <Field>
        <Label>
          맛집 이름을 검색해주세요. (주소와 이름이 자동으로 등록됩니다.)
        </Label>
        <Select />
      </Field>
      <Field>
        <Label>메뉴를 입력해주세요.</Label>
        <Input underline placeholder="예: 돈까스" />
      </Field>
      <Field>
        <Label>맛집 주소를 입력해주세요.</Label>
        <Input underline placeholder="예: 서울 서초구 사평대로 56길 10" />
      </Field>
      <Field>
        <Label>(옵션) TMI를 입력해주세요.</Label>
        <Input
          underline
          placeholder="예: 매장 규모는 작으나, 직원분들이 친절합니다."
        />
      </Field>
    </Form>
  );
}

const Form = styled.form(() => [tw`pt-2`]);
const Field = styled.div(() => [tw`mb-8`]);
const Box = styled.div(() => [tw`flex flex-col items-center my-8`]);
const P = styled.p(() => [tw`text-xl mb-2`]);
