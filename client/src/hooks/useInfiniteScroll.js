import { useCallback, useEffect, useMemo, useRef, useState } from 'react';

// * 마지막 요소 업데이트하며 observe 해주고, 교차를 감지해서, 콜백함수를 호출해주는 훅이다.
// * root 돔 요소를 담을 수 있는 요소를 반환해준다.
// * 사용할 떄, 인피니티 스크롤을 적용할 컨테이너에 붙여준다.

export default function useInfiniteScroll() {
  const containerRef = useRef(null);
  const [isIntersecting, setIstersecting] = useState(true);

  const callback = useCallback((entries, observer) => {
    if (entries[0].isIntersecting) {
      observer.disconnect();
    }
    setIstersecting(entries[0].isIntersecting);
  }, []);

  const io = useMemo(() => new IntersectionObserver(callback), [callback]);
  // Q: 의존성 배열없이 렌더링 전 매번 실행시켜주는 이유는?
  useEffect(() => {
    const childrenList = containerRef.current?.children;

    if (!childrenList || childrenList.length === 0) return;

    io.observe(childrenList[containerRef.current.children.length - 1]);
  });

  return [containerRef, isIntersecting];
}
