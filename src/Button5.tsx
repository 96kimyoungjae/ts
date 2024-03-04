interface ButtonProps<T> {
  item: T;
  onClick: (item: T) => void;
}

export const Button = <T,>({ item, onClick }: ButtonProps<T>) => {
  return <button onClick={() => onClick(item)}>버튼</button>;
};

interface Item {
  id: number;
  name: string;
}

const item: Item = {
  id: 1,
  name: "item",
};

const onClick = (item: Item) => {
  console.log(item.name);
};

<Button item={item} onClick={onClick} />;

// 과제 1
// item2를 넘겨주면서 onClick를 호출하면 item2.price을 출력하도록 해주세요.
// item 2 = { id: 2, price: 1000 }
