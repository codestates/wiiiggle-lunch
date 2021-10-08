import { useEffect, useRef, useState } from 'react';
import tw, { styled } from 'twin.macro';

import { createKaKaoScriptTag } from '@/utils/scripts';
import kakaoAPI from '@/services';

function Select() {
  const [value, setValue] = useState('');
  const [list, setList] = useState([]);
  const timerId = useRef(null);

  const search = async query => {
    if (query.trim() === '') {
      setList([]);
      return;
    }
    const res = await kakaoAPI.searchPlace(query);
    setList(res.documents);
  };

  useEffect(() => {
    createKaKaoScriptTag();
  }, []);

  useEffect(() => {
    if (timerId.current) {
      clearTimeout(timerId.current);
    }

    timerId.current = setTimeout(() => search(value), 800);

    return () => {
      if (timerId.current) {
        clearTimeout(timerId.current);
      }
    };
  }, [value]);

  const onChange = e => {
    setValue(e.target.value);
  };

  return (
    <Container>
      <StyledInput
        placeholder="예: 아빠곰 수제 돈까스"
        value={value}
        onChange={onChange}
      />
      <List open={list.length !== 0}>
        {list.map(data => (
          <Wrapper className="group">
            {data.place_name}
            <Span>선택</Span>
          </Wrapper>
        ))}
      </List>
    </Container>
  );
}

const Container = styled.div(() => [tw``]);
const StyledInput = styled.input(() => [
  tw`border-b-2 border-gray-300 focus:outline-none px-1 py-2 text-gray-400`,
]);
const List = styled.ul(({ open }) => [
  tw`border-2 rounded-md mt-3 max-h-44 overflow-auto p-1`,
  !open && tw`hidden`,
]);

const Wrapper = styled.li(() => [
  tw`text-blue-500 py-3 cursor-pointer flex justify-between items-center hover:(text-blue-700 font-bold)`,
]);
const Span = styled.span(() => [
  tw`visibility[hidden] group-hover:visible border-2 border-blue-500 text-xs p-1 rounded ml-2`,
]);

export default Select;
