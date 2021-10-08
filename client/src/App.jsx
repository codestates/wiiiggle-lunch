import tw from 'twin.macro';

import Card from './components/shared/Card';

export default function App() {
  return (
    <div css={tw`flex flex-col w-screen h-screen justify-center items-center`}>
      <Card />
    </div>
  );
}
