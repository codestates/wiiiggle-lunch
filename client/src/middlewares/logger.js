const logger = store => next => action => {
  console.group(action.type);
  console.info('dispatching', action);
  const result = next(action); // next(action) logger는 보통 마지막 미들웨어니까 리듀서에 전달됨 (기본 반환 값은 undefined)
  console.log('next state', store.getState());
  console.groupEnd();
  return result;
};

export default logger;
