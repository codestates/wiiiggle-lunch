import { useState } from 'react';
import tw from 'twin.macro';

import Select from './components/Create/Select';
import UploadBtn from './components/Create/UploadBtn';
import Button from './components/elements/Button';
import Input from './components/elements/Input';
import Label from './components/elements/Label';

export default function App() {
  const [images, setImages] = useState([]);

  const onChangeImages = e => {
    setImages(prev => [...prev, e.target.files[0]]);
  };

  const onSubmit = e => {
    e.preventDefault();
    const formData = new FormData();
    images.forEach(image => {
      formData.append('images', image);
    });
  };

  return (
    <div css={tw`flex flex-col w-screen h-screen justify-center items-center`}>
      <form onSubmit={onSubmit} css={tw`flex flex-col items-start w-full p-5`}>
        <UploadBtn onChange={onChangeImages} count={images.length} />
        <Select />
        <Label>이메일</Label>
        <Input placeholder="example@google.com" outline success />
        <Label>비밀번호</Label>
        <Input placeholder="example@google.com" outline error />
        <Label>(옵션) TMI를 입력해주세요.</Label>
        <Input
          placeholder="예: 매장 규모는 작으나, 직원분들이 친절해요."
          underline
        />
        <Button>제출</Button>
      </form>
    </div>
  );
}
