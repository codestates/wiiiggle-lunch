import tw from 'twin.macro';

import Select from './components/Create/Select';

export default function App() {
  return (
    <div css={tw`flex flex-col w-screen h-screen justify-center items-center`}>
      <Select />
    </div>
  );
}
