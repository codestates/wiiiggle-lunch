import { useCallback, useEffect, useRef, useState } from 'react';

/* parameter
validator: {
  [name]: (value) => {... return null or 'error message'},
  [name]: (value) => {... return null or 'error message'},
}
*/

/* return
errors: {
 [name]: ['error'], // 에러가 있음
 [name]: [null], // 에러가 없음
}
*/
export default function useInputs(initialValue, validator) {
  const [value, setValue] = useState(initialValue);
  const [isSubmitted, setIsSubmit] = useState(false);
  const errors = useRef(
    Object.keys(initialValue).reduce((acc, key) => {
      acc[key] = [];
      return acc;
    }, {}),
  );

  const init = useCallback(() => {
    Object.keys(initialValue).forEach(key => {
      if (typeof validator[key] === 'undefined') {
        validator[key] = () => null;
      }
    });
  }, [initialValue]);

  useEffect(() => {
    init();
  }, []);

  const composeValidator = func => {
    const results = [];
    if (Array.isArray(func)) {
      return args => {
        func.forEach(f => {
          const error = f(args);
          if (error) {
            results.push(error);
          }
        });
        return results;
      };
    }
    return args => {
      const error = func(args);
      return error ? [func(args)] : [];
    };
  };

  const isValid = () => {
    Object.keys(value).forEach(key => {
      errors.current[key] = composeValidator(validator[key])(value[key]);
    });
    setIsSubmit(prev => !prev); // 리렌더링 목적으로 사용
    return Object.values(errors.current).every(list => list.length === 0);
  };

  const onChange = e => {
    errors.current[e.target.name] = composeValidator(validator[e.target.name])(
      e.target.value,
    );
    setValue({
      ...value,
      [e.target.name]: e.target.value,
    });
  };

  return [value, onChange, errors.current, isValid, isSubmitted];
}
