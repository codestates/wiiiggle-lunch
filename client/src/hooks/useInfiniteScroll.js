import { useCallback, useEffect, useMemo, useRef, useState } from 'react';

// * 마지막 요소 업데이트하며 observe 해주고, 교차를 감지해서, 콜백함수를 호출해주는 훅이다.
// * root 돔 요소를 담을 수 있는 요소를 반환해준다.
// * 사용할 떄, 인피니티 스크롤을 적용할 컨테이너에 붙여준다.

/* eslint-disable */
export default function useInfiniteScroll(deps = []) {
  const containerRef = useRef(null);
  const isFirstRef = useRef(true);
  const [isIntersecting, setIstersecting] = useState(true);

  const callback = useCallback((entries, observer) => {
    // 교차되었으면, 기존 감지는 없앤다.
    if (entries[0].isIntersecting) {
      if (!isFirstRef.current) {
        observer.disconnect();
      }
      isFirstRef.current = false;
    }
    // 상태 값 변화 (교차 감지)
    setIstersecting(entries[0].isIntersecting);
  }, []);

  const io = useMemo(() => new IntersectionObserver(callback), [callback]);
  // 비동기 요청 의존성 필요함(비동기 완료 이후, 마지막 요소를 등록해야 함)
  useEffect(() => {
    const childrenList = containerRef.current?.children;

    if (!childrenList || childrenList.length === 0) return;

    io.observe(childrenList[containerRef.current.children.length - 1]);
  }, [...deps]);

  return [containerRef, isIntersecting];
}
