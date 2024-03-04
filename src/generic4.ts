const genericFunc = <T>(arg: T): T => arg;

genericFunc(1);
genericFunc("Alwayz");

const genericFunc2 = <T, U>(arg: T, arg2: U): [T, U] => [arg, arg2];

genericFunc2(1, 1);
genericFunc2("1", 2);

function getProperty<T, K extends keyof T>(obj: T, key: K) {
  return obj[key];
}

const x = { a: 1, b: 2, c: 3, d: 4 };

getProperty(x, "a"); // 성공
getProperty(x, "m"); // 오류: 인수의 타입 'm' 은 'a' | 'b' | 'c' | 'd'에 해당되지 않음.

function mergeArrays<T, U, V>(
  arr1: T[],
  arr2: U[],
  mergeFn: (item1: T, item2: U) => V
): V[] {
  const mergedArray: V[] = [];
  const minLength = Math.min(arr1.length, arr2.length);

  for (let i = 0; i < minLength; i++) {
    const mergedItem = mergeFn(arr1[i], arr2[i]);
    mergedArray.push(mergedItem);
  }

  return mergedArray;
}

// 예시: 두 개의 배열을 합쳐서 문자열 배열로 반환
const numbers = [1, 2, 3, 4, 5];
const strings = ["one", "two", "three", "four", "five"];

const mergedStrings = mergeArrays(
  numbers,
  strings,
  (num, str) => `${num}: ${str}`
);
console.log(mergedStrings); // ["1: one", "2: two", "3: three", "4: four", "5: five"]

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
