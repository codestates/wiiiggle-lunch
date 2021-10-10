import tw, { styled } from 'twin.macro';

const Input = styled.input(({ outline, underline, error }) => [
  tw`w-full text-gray-700  px-1 focus:(outline-none border-yellow-300)`,
  outline && tw`border-2 rounded-md py-2`,
  underline && tw`border-b-2 border-gray-500 pb-2`,
  error && tw`border-red-400`,
]);

export default Input;
