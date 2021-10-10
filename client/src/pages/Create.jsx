import Select from '@/components/Create/Select';
import UploadBtn from '@/components/Create/UploadBtn';
import Button from '@/components/elements/Button';
import Input from '@/components/elements/Input';
import Label from '@/components/elements/Label';
import Star from '@/components/shared/Star';
import { useRef, useState } from 'react';
import tw, { styled } from 'twin.macro';

export default function Create() {
  const [score, setScore] = useState(0);
  const [images, setImages] = useState([]);
  const [place, setPlace] = useState('');
  const [address, setAddress] = useState('');
  const [menu, setMenu] = useState('');
  const [tmi, setTmi] = useState('');

  const latitude = useRef(0);
  const longitude = useRef(0);

  const onScore = e => {
    setScore(Number(e.currentTarget.dataset.value));
  };

  const uploadImage = e => {
    setImages(prev => [...prev, e.target.files[0]]);
    const formData = new FormData(); // 서버로 보낼 데이터
    formData.append('images', e.target.files[0]);
    // 사진 올릴 때마다, formData 생성하여 파일 담아 전송하기 (dispatch(uploadImage(formData)))
  };

  const onClick = data => {
    setPlace(data.place_name);
    setAddress(data.road_address_name);
    latitude.current = data.x;
    longitude.current = data.y;
    console.log(data);
  };
  const onChangePlace = e => {
    setPlace(e.target.value);
  };

  const onChangeAddress = e => {
    setAddress(e.target.value);
  };

  const onChangeMenu = e => {
    setMenu(e.target.value);
  };

  const onChangeTmi = e => {
    setTmi(e.target.value);
  };

  const onSubmit = e => {
    e.preventDefault();
    const submitData = {
      score,
      place,
      address,
      menu,
      tmi,
      latitude: latitude.current,
      longitude: longitude.current,
    };
    console.log(submitData);
  };

  return (
    <Form onSubmit={onSubmit}>
      <UploadBtn onChange={uploadImage} count={images.length} />
      <Box>
        <P>맛집 점수를 평가해주세요</P>
        <Star score={score} onClick={onScore} />
      </Box>
      <Field>
        <Label>
          맛집 이름을 검색해주세요. (주소와 이름이 자동으로 등록됩니다.)
        </Label>
        <Select value={place} onChange={onChangePlace} onClick={onClick} />
      </Field>
      <Field>
        <Label>메뉴를 입력해주세요.</Label>
        <Input
          value={menu}
          onChange={onChangeMenu}
          underline
          placeholder="예: 돈까스"
        />
      </Field>
      <Field>
        <Label>맛집 주소를 입력해주세요.</Label>
        <Input
          value={address}
          onChange={onChangeAddress}
          underline
          placeholder="예: 서울 서초구 사평대로 56길 10"
        />
      </Field>
      <Field>
        <Label>(옵션) TMI를 입력해주세요.</Label>
        <Input
          value={tmi}
          onChange={onChangeTmi}
          underline
          placeholder="예: 매장 규모는 작으나, 직원분들이 친절합니다."
        />
      </Field>
      <Button solid primary lg>
        등록하기
      </Button>
    </Form>
  );
}

const Form = styled.form(() => [tw`pt-2`]);
const Field = styled.div(() => [tw`mb-8`]);
const Box = styled.div(() => [tw`flex flex-col items-center my-8`]);
const P = styled.p(() => [tw`text-xl mb-2`]);
