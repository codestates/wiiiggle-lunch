import PropTypes from 'prop-types';
import Badge from '@/components/shared/Badge';
import MapBtn from '@/components/shared/MapBtn';
import Modal from '@/components/shared/Modal';
import Portal from '@/hoc/Portal';
import { useCallback, useEffect, useRef, useState } from 'react';
import {
  Container,
  Name,
  TitleImg,
  OpenSlider,
  Slider,
  Slide,
  Img,
  Dim,
  Alert,
  Menu,
  StyledLink,
  Indicator,
} from './Card.styled';

Card.defaultProps = {
  name: '식당 이름 정보가 없습니다.',
  menu: '메뉴정보가 없습니다.',
  address: '주소정보가 없습니다.',
  averageScore: 0,
  images: [],
  latitude: null,
  longitude: null,
};

Card.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string,
  menu: PropTypes.string,
  address: PropTypes.string,
  averageScore: PropTypes.string,
  images: PropTypes.arrayOf(PropTypes.string),
  latitude: PropTypes.string,
  longitude: PropTypes.string,
};

export default function Card({
  id,
  name,
  menu,
  address,
  averageScore,
  images,
  latitude,
  longitude,
}) {
  const [open, setOpen] = useState(false);
  const [currentTranslate, setCurrentTranslate] = useState(100); // 현재 슬라이더 위치 상태 값
  const offSlide = useCallback(() => setOpen(false), []);
  const openSlide = useCallback(() => setOpen(true), []);
  const slides = useRef(new Array(images.length).fill(null));
  // * 슬라이더 관련 변수
  const isDragging = useRef(false);
  const newState = useRef(0);
  const startPos = useRef(0); // 이벤트 시작좌표를 저장하는 변수
  const currentPos = useRef(0); // 이벤트 발생 좌표를 저장하는 변수
  const prevTranslate = useRef(0); // 이전 좌표를 저장하는 변수
  const animationID = useRef(0); // 애니메이션 id
  const currentIndex = useRef(0); // 슬라이더 인덱스

  // console.group();
  // console.info(`isDragging: ${isDragging.current}`);
  // console.info(`startPos: ${startPos.current}`);
  // console.info(`prevTranslate: ${prevTranslate.current}`);
  // console.info(`animationID: ${animationID.current}`);
  // console.info(`currentIndex: ${currentIndex.current}`);
  // console.groupEnd();

  // * 애니메이션 함수 (requestAnimationFrame 요청하는 함수는 이벤트 헨들러와 분리되어야 함)
  const animation = () => {
    // FIXME: 상태 값이 변하지 않는 버그
    // 함수형 업데이트에서 useRef로 최신상태 담기
    if (isDragging.current) {
      setCurrentTranslate(prevState => {
        newState.current = prevState;
        return prevTranslate.current + currentPos.current - startPos.current;
      });
      console.log(
        `CARD: 현재 슬라이더 위치: ${prevTranslate.current} + ${currentPos.current} - ${startPos.current} = ${newState.current}`,
      );
    }
    // ! 상태 값을 변경 -> css 변경(애니메이션) recursively calls itself.
    animationID.current = requestAnimationFrame(animation);
  };
  // * 이벤트 헨들러
  const touchMove = event => {
    if (isDragging.current) {
      currentPos.current = event.type.includes('mouse')
        ? event.pageX
        : event.touches[0].clientX;
    }
  };

  // * 이벤트 헨들러
  const touchStart = index => {
    return event => {
      currentIndex.current = index;
      startPos.current = event.type.includes('mouse')
        ? event.pageX
        : event.touches[0].clientX; // 시작위치
      isDragging.current = true; // 터치 시작 or 마우스를 눌렀을 때.

      animationID.current = requestAnimationFrame(animation); // 이거 언제 시작할까?
    };
  };

  const touchEnd = () => {
    isDragging.current = false;
    cancelAnimationFrame(animationID.current);
    console.error('CARD: touchEnd');

    const movedBy = newState.current - prevTranslate.current; // +: 오른쪽 방향 드래그, -: 왼쪽 방향 드래그

    console.log(
      `CARD: movedBy: ${newState.current} - ${prevTranslate.current} = ${movedBy}`,
    );

    console.log(
      `CARD: 페이지 인덱스 이동 조건: movedBy:${movedBy} 현재 인덱스:${
        currentIndex.current
      }  슬라이드 개수:${slides.current.length - 1}`,
    );

    if (movedBy < -150 && currentIndex.current < slides.current.length - 1)
      currentIndex.current += 1;
    if (movedBy > 150 && currentIndex.current > 0) currentIndex.current -= 1;

    prevTranslate.current = currentIndex.current * -window.innerWidth;
    console.log(
      `CARD: prevTranslate: ${currentIndex.current} * ${-window.innerWidth} = ${
        prevTranslate.current
      }`,
    );
    setCurrentTranslate(currentIndex.current * -window.innerWidth);
  };

  useEffect(() => {
    if (
      open &&
      Array.isArray(slides.current) &&
      slides.current.every(el => el)
    ) {
      slides.current.forEach((element, index) => {
        // 드래그 이벤트 막기
        const slideImage = element.querySelector('img');
        slideImage.addEventListener('dragstart', e => e.preventDefault());
        // touch event
        element.addEventListener('touchstart', touchStart(index));
        element.addEventListener('touchend', touchEnd);
        element.addEventListener('touchmove', touchMove);
        // mouse event
        element.addEventListener('mousedown', touchStart(index));
        element.addEventListener('mouseup', touchEnd);
        element.addEventListener('mouseleave', touchEnd);
        element.addEventListener('mousemove', touchMove);
      });
    }
    return () => {
      // 이벤트 헨들러 취소
      if (
        open &&
        Array.isArray(slides.current) &&
        slides.current.every(el => el)
      ) {
        slides.current.forEach((element, index) => {
          // 드래그 이벤트 막기
          const slideImage = element.querySelector('img');
          slideImage.removeEventListener('dragstart', e => e.preventDefault());
          // touch event
          element.removeEventListener('touchstart', touchStart(index));
          element.removeEventListener('touchend', touchEnd);
          element.removeEventListener('touchmove', touchMove);
          // mouse event
          element.removeEventListener('mousedown', touchStart(index));
          element.removeEventListener('mouseup', touchEnd);
          element.removeEventListener('mouseleave', touchEnd);
          element.removeEventListener('mousemove', touchMove);
        });
      }
      // 애니메이션 취소
      cancelAnimationFrame(animationID.current);
    };
  }, [open]);
  return (
    <Container>
      <StyledLink className="group" to={`/restaurants/${id}`}>
        <Name>{name}</Name>
        <Badge score={averageScore} />
      </StyledLink>
      <OpenSlider className="group" onClick={openSlide}>
        <TitleImg src={images.length !== 0 ? images[0] : '#'} />
        <Menu>대표메뉴: {menu}</Menu>
        <Alert>이미지 슬라이더로 보기</Alert>
        <Dim />
      </OpenSlider>
      {open && (
        <Portal>
          <Modal open={open} onClose={offSlide}>
            <Slider currentTranslate={currentTranslate}>
              {images.map((img, index) => (
                <Slide index={index} ref={el => (slides.current[index] = el)}>
                  <Img src={img} />
                  <Indicator>
                    {currentIndex.current + 1} / {slides.current.length}
                  </Indicator>
                </Slide>
              ))}
            </Slider>
          </Modal>
        </Portal>
      )}
      <MapBtn latitude={latitude} longitude={longitude} address={address} />
    </Container>
  );
}
