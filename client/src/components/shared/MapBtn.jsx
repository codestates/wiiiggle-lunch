/* eslint-disable */
import React, { useEffect, useRef, useState } from 'react';
import tw, { styled } from 'twin.macro';
import PropTypes from 'prop-types';

import { ReactComponent as MapIcon } from 'assets/map.svg';
import { createMap } from '@/utils/scripts';
import Portal from '@/hoc/Portal';
import Modal from './Modal';

MapBtn.propTypes = {
  latitude: PropTypes.string.isRequired,
  longitude: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
};

export default function MapBtn({ latitude, longitude, address }) {
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
      <Wrapper onClick={onOpen}>
        <MapIcon css={tw`h-5 w-5 mr-2 text-green-900`} />
        {address}
      </Wrapper>
      {open && (
        <Portal>
          <Modal open={open} onClose={onClose}>
            <Container>
              <Map ref={mapContainer} />
              <Desc>{address}</Desc>
            </Container>
          </Modal>
        </Portal>
      )}
    </>
  );
}

const Wrapper = styled.div(() => [
  tw`flex items-center cursor-pointer text-sm font-semibold text-blue-600 underline`,
]);
const Container = styled.div(() => [
  tw`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-96 text-center rounded-lg bg-white overflow-hidden`,
]);
const Map = styled.div(() => [tw`absolute left-0 top-0 w-full h-5/6`]);
const Desc = styled.div(() => [
  tw`absolute left-0 bottom-0 flex flex-col justify-center w-full h-1/6 text-sm font-semibold bg-gray-100 px-1 py-2 rounded-md`,
]);
