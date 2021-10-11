import { useRef, useState } from 'react';
import tw, { styled } from 'twin.macro';
import { useDispatch, useSelector } from 'react-redux';

import Select from '@/components/Create/Select';
import UploadBtn from '@/components/Create/UploadBtn';
import Button from '@/components/elements/Button';
import Input from '@/components/elements/Input';
import Label from '@/components/elements/Label';
import Star from '@/components/shared/Star';

import { uploadImgRequest } from '@/store/reducers/photos';
import { addPostsRequestAction } from '@/store/reducers/posts';

export default function Create() {
  const [score, setScore] = useState(0);
  const [images, setImages] = useState([]);
  const [name, setPlace] = useState('');
  const [address, setAddress] = useState('');
  const [menu, setMenu] = useState('');
  const [tmi, setTmi] = useState('');

  const latitude = useRef(0);
  const longitude = useRef(0);

  const dispatch = useDispatch();
  const { userInfo } = useSelector(state => state.users);
  const { imagesUrls } = useSelector(state => state.photos);

  const onScore = e => {
    setScore(Number(e.currentTarget.dataset.value));
  };

  const uploadImage = e => {
    setImages(prev => [...prev, e.target.files[0]]);
    const formData = new FormData(); // 서버로 보낼 데이터
    formData.append('image', e.target.files[0]);
    dispatch(uploadImgRequest(formData));
  };

  const onClick = data => {
    setPlace(data.place_name);
    setAddress(data.road_address_name);
    latitude.current = data.x;
    longitude.current = data.y;
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
      id: userInfo.id,
      score,
      name,
      images: imagesUrls,
      menu,
      address,
      tmi,
      latitude: latitude.current,
      longitude: longitude.current,
    };
    dispatch(addPostsRequestAction(submitData));
  };

  return (
    <Form onSubmit={onSubmit}>
      <Flex>
        <UploadBtn onChange={uploadImage} count={images.length} />
        {images.map(image => (
          <Img src={window.URL.createObjectURL(image)} />
        ))}
      </Flex>
      <Box>
        <P>맛집 점수를 평가해주세요</P>
        <Star score={score} onClick={onScore} />
      </Box>
      <Field>
        <Label>
          맛집 이름을 검색해주세요. (주소와 이름이 자동으로 등록됩니다.)
        </Label>
        <Select value={name} onChange={onChangePlace} onClick={onClick} />
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
const Flex = styled.div(() => [tw` flex items-center`]);
const Img = styled.img(() => [
  tw`object-fill self-end w-16 h-16 border-2 border-gray-600 mx-3 p-1`,
]);
