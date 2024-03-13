// 과제 1
// makeArray를 만드세요
const makeNumberArray = (defaultValue: number, size: number): number[] => {
  const arr = [];

  for (let i = 0; i < size; i++) {
    arr.push(defaultValue);
  }

  return arr;
};

const makeStringArray = (defaultValue: string, size: number): string[] => {
  const arr = [];

  for (let i = 0; i < size; i++) {
    arr.push(defaultValue);
  }

  return arr;
};

const makeArray = () => {};
