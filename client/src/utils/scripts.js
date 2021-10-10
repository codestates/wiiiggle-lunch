/* global kakao */
import dotenv from 'dotenv';

dotenv.config();

export function createKaKaoScriptTag() {
  const script = document.createElement('script');
  script.type = 'text/javascript';
  script.async = 'async';
  script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.REACT_APP_MAP_API_KEY}`;
  document.head.appendChild(script);
}

export function createMap(mapContainer, latitude, longitude) {
  const options = {
    // 지도를 생성할 때 필요한 기본 옵션
    center: new kakao.maps.LatLng(latitude, longitude), // 지도의 중심좌표.
    level: 3, // 지도의 레벨(확대, 축소 정도)
  };

  const map = new kakao.maps.Map(mapContainer, options); // 지도 생성 및 객체 리턴
  // 마커가 표시될 위치입니다
  const markerPosition = new kakao.maps.LatLng(latitude, longitude);
  console.log('map', map);
  console.log('markerPosition', markerPosition);

  // 마커를 생성합니다
  const marker = new kakao.maps.Marker({
    position: markerPosition,
  });

  // 마커가 지도 위에 표시되도록 설정합니다
  marker.setMap(map);
}
