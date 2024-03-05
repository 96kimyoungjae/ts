// 과제 1
// makeArray를 만드세요
const makeArrayAnswer = <T>(defaultValue: T, size: number): T[] => {
  const arr = [];

  for (let i = 0; i < size; i++) {
    arr.push(defaultValue);
  }

  return arr;
};

makeArrayAnswer(1, 10);
makeArrayAnswer("alwayz", 10);
