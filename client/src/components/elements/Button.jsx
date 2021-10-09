import tw, { styled } from 'twin.macro';

const Button = styled.button(({ text, solid, primary, sm, md, lg }) => [
  text && tw`cursor-pointer`,
  solid && tw`rounded-md`,
  primary &&
    solid &&
    tw`background-color[#ea4622] text-white hover:background-color[#b00000]`,
  primary && text && tw`color[#ea4622] hover:(color[#b00000] font-bold)`,
  sm && tw`text-xs font-bold py-1 px-2 `,
  md && tw`text-base py-2 px-4`,
  lg && tw`w-full py-3 text-lg`,
]);

export default Button;
