import tw, { styled, css } from 'twin.macro';
import { Link } from 'react-router-dom';

export const Container = styled.div(() => [
  tw`border-2 border-gray-700 rounded-md py-3 px-2 flex flex-col mb-3`,
  css``,
]);

export const Name = styled.h3(() => [
  tw`mr-2 text-2xl group-hover:(underline text-blue-600)`,
]);
export const TitleImg = styled.img(() => [tw`w-full h-full object-cover`]);
export const OpenSlider = styled.div(() => [
  tw`relative w-full h-52  bg-gray-100 px-1 py-2 mb-2 rounded-md cursor-pointer`,
]);

const setPosition = currentTranslate =>
  css`
    transform: ${`translateX(${currentTranslate}px)`};
  `;

export const Slider = styled.div(({ currentTranslate }) => [
  tw`relative inline-flex h-screen justify-center overflow-hidden`,
  css`
    cursor: grab;
    transform: translateX(0);
    transition: transform 0.3s ease-out;
    margin-top: 25vh;
    max-height: 40vh;
    ${setPosition(currentTranslate)}
  `,
]);
export const Slide = styled.div(() => [
  tw`relative`,
  css`
    width: 100vw;
  `,
]);
export const Img = styled.img(() => [
  tw`w-full object-cover transition-transform`,
]);
export const Indicator = styled.span(() => [
  tw`absolute left-1/2 transform -translate-x-1/2 top-2 px-2 py-1 bg-black rounded-lg text-lg text-blue-200 font-bold`,
]);

export const Dim = styled.div(() => [
  tw`absolute top-0 bottom-0 left-0 right-0 hidden group-hover:block`,
  css`
    background-color: rgba(0, 0, 0, 0.5);
  `,
]);
export const Alert = styled.span(() => [
  tw`hidden z-10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gray-800 p-1 text-white font-semibold group-hover:block`,
]);
export const Menu = styled.span(() => [
  tw`hidden absolute left-2 bottom-1 font-semibold text-gray-100 group-hover:inline-block`,
]);

export const StyledLink = styled(Link)(() => [
  tw`flex items-center mb-3 relative`,
]);
