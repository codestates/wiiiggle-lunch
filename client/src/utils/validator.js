export const maxLength = (validLength, message) => {
  return value => {
    if (value.length <= validLength) return null;
    return message;
  };
};

export const minLength = (validLength, message) => {
  return value => {
    if (value.length >= validLength) return null;
    return message;
  };
};

export const passwordCheck = (compare, message) => {
  return value => {
    if (compare === value) return null;
    return message;
  };
};

export const isRequire = message => {
  return value => (value === '' ? message : null);
};
