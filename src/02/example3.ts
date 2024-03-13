// item response
const ITEM_RESPONSE = {
  data: [
    {
      id: 1,
      title: "itemA",
      type: "A",
      price: 1000,
      detailImages: ["https://abc", "https://def"],
    },
    {
      id: 2,
      title: "itemB",
      type: "B",
      price: 2000,
      thumbnailImages: ["https://abc", "https://def"],
    },
  ],
};

type Item = {
  id: number;
  title: string;
  price: number;
};

type ItemA = Item & {
  type: "A";
  detailImages: string[];
};

type ItemB = Item & {
  type: "B";
  thumbnailImages: string[];
};

const fetchExample3 = async () => {
  const res = await fetch("example");
  const { data } = (await res.json()) as {
    data: (ItemA | ItemB)[];
  };
  return data;
};

fetchExample3().then((data) => {
  getItemImage(data[0]);
});

const getItemImage = async (item: ItemA | ItemB) => {
  if (item.type === "A") {
    return item.detailImages;
  }

  return item.thumbnailImages;
};
