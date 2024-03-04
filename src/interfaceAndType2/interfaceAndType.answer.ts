// 과제 1
// banner interface를 만든 후 타입추론이 잘 작동하도록 만들어주세요.
// hint: (await res.json() as Promise<Banner[]>)
interface Banner {
  _id: string;
  banner: string;
  createdAt: string;
  deletedAt: string;
  displayEndDate: string;
  displayStartDate: string;
  imageType: string;
  isAvailable: boolean;
}

const fetchImageBannerListAnswer = async () => {
  const res = await fetch("banner");
  const { data } = (await res.json()) as {
    data: Promise<Banner[]>;
    status: number;
  };
  return data;
};

const getBannerListAnswer = async () => {
  const data = await fetchImageBannerListAnswer();
  console.log(data[0].createdAt);
};
