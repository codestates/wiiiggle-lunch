import { useState } from 'react';
import tw from 'twin.macro';

import Select from './components/Create/Select';
import UploadBtn from './components/Create/UploadBtn';

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
      <form onSubmit={onSubmit} css={tw`flex flex-col items-center space-y-5`}>
        <UploadBtn onChange={onChangeImages} count={images.length} />
        <Select />
        <button type="submit">제출</button>
      </form>
    </div>
  );
}
