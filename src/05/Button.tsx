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
