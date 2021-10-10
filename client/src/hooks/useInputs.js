import { useCallback, useEffect, useRef, useState } from 'react';

/* parameter
validator: {
  [name]: (value) => {... return null or 'error message'},
  [name]: (value) => {... return null or 'error message'},
}
*/

/* return
errors: {
 [name]: 'error message' or null 
}
*/
// FIXME: 특정 입력필드에 오류가 있는 지 없는 지 제공하는 방법이 필요함
export default function useInputs(initialValue, validator) {
  const [value, setValue] = useState(initialValue);
  const [isSubmitted, setIsSubmit] = useState(false);
  const errors = useRef({});

  const init = useCallback(() => {
    Object.keys(initialValue).forEach(key => {
      if (typeof validator[key] === 'undefined') {
        validator[key] = () => null;
      }
    });

    Object.keys(initialValue).forEach(key => {
      errors.current[key] = [];
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
    return args => [func(args)];
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
