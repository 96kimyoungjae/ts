// 과제 1
// banner 타입추론이 잘 작동하도록 만들어주세요.
const BANNER_RESPONSE = [
  {
    _id: "1423124q2",
    banner: "https://assets.ilevit.com/~",
    createdAt: "2024-02-19",
    deletedAt: "2024-02-18",
    displayEndData: "2024-02-18",
    displayStartData: "2024-02-18",
    imageType: "brandDealHorizontalBanner",
    isAvailable: true,
  },
];

const fetchImageBannerList = async () => {
  const res = await fetch("banner");
  const { data } = await res.json();
  return data;
};

(async () => {
  const imageBannerList = await fetchImageBannerList();
  imageBannerList[0];
})();

// 과제 2
// webtoon author & socail author의 email을 구하는 함수를 작성해주세요.
//
// author
//  {
//   name: string;
//   age: number;
//  }
//
// social author
// {
//   email: string
//   type: "social"
// }

// webtoon author
// {
//   naverEmail: string
//   type: "webtoon"
// }

const AUTHOR_RESPONSE = {
  data: [
    { name: "name1", age: 20, email: "email1", type: "social" },
    { name: "name2", age: 24, naverEmail: "naverEmail1", type: "webtoon" },
  ],
};

const fetchAuthorList = async () => {
  const res = await fetch("authorList");
  const { data } = await res.json();
  return data;
};

(async () => {
  const authorList = await fetchAuthorList();

  const getAuthorEmail = () => {};

  const emailList = authorList.map((author) => getAuthorEmail(author));
})();
