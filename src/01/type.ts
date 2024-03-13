// 1. Boolean
const booleanVariable = true;
const booleanVariable2 = false;

// 2. Number
const numberVariable = 1;

// 3. String
const stringVariable = "Alwayz";

// 4. Array
const numberArray = [1, 2, 3, 4, 5];
const numberOrStringArray = [1, "2", 3, "4", 5];

const numberOrStringFunc = (numberOrStringArray: (number | string)[]) => {
  if (typeof numberOrStringArray[0] === "string") {
    return numberOrStringArray[0].slice(0, 4);
  }
};

// 5. Null
const nullVariable = null;

// 6. Undefined
const undefinedValue = undefined;

// 7 Void
const voidFunction = () => {};
const notVoidFunction = () => {
  return 5;
};

// 8. Any
const numberAny: any = 5;
const stringAny: any = "any";
const booleanAny: any = "boolean";

const numberOrStringFunc2 = (numberOrStringArray: (number | string)[]) => {
  if (typeof numberOrStringArray[0] === "string") {
    return numberOrStringArray[0].slice(0, 4);
  }
};

type User = {
  name: string;
  age: number;
  isDeveloper: boolean;
};

// 9. Object
const objectVariable: User = {
  name: "Alwayz",
  age: 25,
  isDeveloper: true,
};

// 10. Never => 오류를 출력하거나 리턴값을 절대로 보내지 않음.
const neverFunction = () => {
  throw new Error("Error");
};

function infiniteLoop(): never {
  while (true) {}
}

// 11. unknown
// 타입이 뭔지 모르니 타입을 추론해서 사용해야함.
let userInput: unknown;

userInput = 5;
userInput = "alwayz";

if (typeof userInput === "string") {
  userInput.split(" ");
}
