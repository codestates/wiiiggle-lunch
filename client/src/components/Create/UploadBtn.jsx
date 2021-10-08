import tw, { styled } from 'twin.macro';
import PropTypes from 'prop-types';
import { ReactComponent as Camera } from 'assets/camera.svg';

// * UploadBtn을 사용하는 폼에서 정의하는 함수
// const [images, setImages] = useState([]);

// const onChangeImages = e => {
//   setImages(prev => [...prev, e.target.files[0]]);
// };

// const onSubmit = e => {
//   e.preventDefault();
//   const formData = new FormData(); // 서버로 보낼 데이터
//   images.forEach(image => {
//     formData.append('images', image);
//   });
// };

UploadBtn.defaultProps = {
  onChange: () => null,
  limit: 3,
  count: 0,
};

UploadBtn.propTypes = {
  onChange: PropTypes.func,
  limit: PropTypes.number,
  count: PropTypes.number,
};

export default function UploadBtn({ onChange, limit, count }) {
  return (
    <Container className="group">
      <Camera css={tw`w-8 h-8 text-gray-500 group-hover:text-gray-700`} />
      <Info>
        <span>{count}</span>
        <span>/</span>
        <span>{limit}</span>
      </Info>
      <UploadInput
        onChange={onChange}
        disabled={count >= limit}
        type="file"
        hidden
        capture="camera"
        accept="image/jpg, image/png, image/jpeg, image/gif"
      />
    </Container>
  );
}

const Container = styled.label(() => [
  tw`inline-block border-2 py-2 px-4 rounded cursor-pointer hover:border-gray-500`,
]);
const UploadInput = styled.input(() => [tw``]);
const Info = styled.div(() => [tw`flex justify-between text-sm font-bold`]);
