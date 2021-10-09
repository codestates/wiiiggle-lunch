import tw, { styled } from 'twin.macro';

export default function SearchBar() {
  const onChange = e => {
    console.log(e.currentTarget.value);
  };

  return (
    <div>
      <Input onChange={onChange} placeholder="예: 돈까스" />
    </div>
  );
}

const Input = styled.input(() => [
  tw`border-2 border-gray-500 focus:outline-none px-3 py-2 rounded-md`,
]);
