/* eslint-disable */
import React, { useEffect, useRef, useState } from 'react';
import tw, { styled } from 'twin.macro';
import PropTypes from 'prop-types';

import Portal from '@/hoc/Portal';
import Modal from './Modal';
import { createMap } from '@/utils/scripts';

MapBtn.propTypes = {
  latitude: PropTypes.string.isRequired,
  longitude: PropTypes.string.isRequired,
};

export default function MapBtn({ latitude, longitude }) {
  const [open, setOpen] = useState(false);
  const onClose = () => setOpen(false);
  const onOpen = e => {
    e.stopPropagation();
    setOpen(true);
  };
  const mapContainer = useRef(null);

  useEffect(() => {
    if (open) {
      createMap(mapContainer.current, longitude, latitude);
    }
  }, [open]);

  return (
    <>
      <Wrapper type="button" onClick={onOpen}>
        🏞 지도에서 보기
      </Wrapper>
      {open && (
        <Portal>
          <Modal open={open} onClose={onClose}>
            <Container>
              <Title>오스틴</Title>
              <Map ref={mapContainer}></Map>
            </Container>
          </Modal>
        </Portal>
      )}
    </>
  );
}

const Wrapper = styled.button(() => [
  tw`self-start mt-2.5 ml-1 cursor-pointer`,
]);
const Container = styled.div(() => [
  tw`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-96 text-center rounded-lg bg-white overflow-hidden`,
]);
const Map = styled.div(() => [tw`absolute left-0 bottom-0 w-full h-5/6`]);
const Title = styled.h1(() => [
  tw`text-lg tracking-wider font-bold h-1/6 flex flex-col justify-center`,
]);
