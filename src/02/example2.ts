// feed response
const FEED_RESPONSE_2 = {
  data: [
    {
      id: 1,
      title: "example1",
      description: "description1",
      images: ["https://abc", "https://def"],
    },
    {
      id: 1,
      title: "example1",
      tags: [
        {
          id: 1,
          value: "tag1",
        },
        {
          id: 2,
          value: "tag2",
        },
      ],
    },
  ],
};

type Tag = {
  id: number;
  value: string;
};

type Feed2 = {
  id: number;
  title: string;
  description?: string;
  images?: string[];
  tags?: Tag[];
};

const fetchFeed2 = async () => {
  const res = await fetch("example");
  const { data } = (await res.json()) as { data: Feed2[] };
  return data;
};

fetchFeed2().then((data) => console.log(data));
