import { useEffect, useRef, useState } from 'react';
import tw, { styled } from 'twin.macro';
import { ReactComponent as Search } from 'assets/search.svg';
import PropTypes from 'prop-types';
import { createKaKaoScriptTag } from '@/utils/scripts';
import kakaoAPI from '@/services';

Select.defaultProps = {
  onItemClick: () => null,
};

Select.propTypes = {
  onItemClick: PropTypes.func,
};

function Select({ onItemClick }) {
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
          <Wrapper
            key={data.id}
            onClick={() => onItemClick(data)}
            className="group"
          >
            {data.place_name}
            <Span>선택</Span>
          </Wrapper>
        ))}
      </List>
      <Search css={tw`absolute right-2 top-2 w-6 h-6 text-gray-500`} />
    </Container>
  );
}

const Container = styled.div(() => [tw`relative`]);
const StyledInput = styled.input(() => [
  tw`w-full border-b-2 border-gray-500 focus:outline-none px-1 py-2 text-gray-400`,
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
