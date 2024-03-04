interface ButtonProps<T, U> {
  item: T;
  item2: U;
  onClick: (item: T, item2: U) => void;
}

export const Button = <T, U>({ item, item2, onClick }: ButtonProps<T, U>) => {
  return <button onClick={() => onClick(item, item2)}>버튼</button>;
};

interface Item {
  id: number;
  name: string;
}

interface Item2 {
  id: number;
  price: number;
}

const item: Item = {
  id: 1,
  name: "item",
};
const item2: Item2 = {
  id: 2,
  price: 10000,
};

const onClick = (item: Item, item2: Item2) => {
  console.log(item.name);
  console.log(item2.price);
};

<Button item={item} item2={item2} onClick={onClick} />;

// 과제 1
// item2를 넘겨주면서 onClick를 호출하면 item2.price을 출력하도록 해주세요.
// item 2 = { id: 2, price: 1000 }
