// * 식당 조회하기 데이터 - restaurants/:id

/*
```
{
  // 음식점 기본 정보
  "restaurant" : { 
      "name": "오스틴",
      "menu": "퀘사디아",
      "address": "서울 서초구 서초대로 77길 ..."
      "longitude" : 32.134,
      "latitude" : 102.142,
  },
  // 음식점에 관계된 posts의 평균 점수
  "averageScore": 3.4,
  // 음식점에 관계된 posts 배열
  posts: [
      {         
          userInfo: {
            nickname: '익명-1',
          },
          images: [user_1.jpg, ...]
          tmi: '이 메뉴가 정말 맛있습니다.',
          score: 4,
          like: 167
      },
      {
          userInfo: {
            nickname: '익명-2',
          },
          images: [user_1.jpg, ...]
          tmi: '이 메뉴가 정말 맛있습니다.',
          score: 4,
          like: 21
      },
      ...
  ]
}
```
*/
