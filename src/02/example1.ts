// feed response
const FEED_RESPONSE = {
  data: [
    {
      id: 1,
      title: "example1",
      description: "description1",
    },
    {
      id: 2,
      title: "example2",
    },
  ],
};

type Feed = {
  id: number;
  title: string;
  description?: string;
};

const fetchFeed = async () => {
  const res = await fetch("example");
  const { data } = (await res.json()) as { data: Feed[] };
  return data;
};
