// American
// SSN => 미국인 주민번호
// Korean
// RRN => 주민번호

type Person = {
  name: string;
  age: number;
};

type American = Person & {
  SSN: string;
};

type Korean = Person & {
  RRN: string;
};

const person: Person = {
  name: "alwayz",
  age: 25,
};

const korean: Korean = {
  name: "test",
  age: 25,
  RRN: "123456-1234567",
};

const american: American = {
  name: "test",
  age: 25,
  SSN: "123456-1234567",
};
