import tw, { styled } from 'twin.macro';

export default function SearchBar() {
  const onChange = e => {
    console.log(e.currentTarget.value);
  };

  return (
    <div css={tw`flex justify-center items-center`}>
      <Label>
        <Input onChange={onChange} placeholder="예: 돈까스" />
      </Label>
    </div>
  );
}

const Label = styled.label(() => [tw`relative w-full`]);
const Input = styled.input(() => [
  tw`px-2 h-10 w-full bg-gray-300 border-2 rounded-md border-black border-opacity-50 outline-none 
  focus:text-black focus:bg-white focus:border-primary transition duration-200 focus:transform focus:-translate-x-0.5`,
]);
