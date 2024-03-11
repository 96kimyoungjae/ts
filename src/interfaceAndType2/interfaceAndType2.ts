interface Author3 {
  name: string;
  age: number;
}

interface SocialAuthor3 extends Author3 {
  facebook: string;
  twitter: string;
  email: string;
  type: "social";
}

interface WebtoonAuthor3 extends Author3 {
  naverEmail: string;
  type: "webtoon";
}

const getEmail3 = (author: SocialAuthor3 | WebtoonAuthor3) => {
  if (author.type === "webtoon") {
    return author.naverEmail;
  }

  return author.email;
};

// 과제 1
// banner interface를 만든 후 타입추론이 잘 작동하도록 만들어주세요.
const fetchImageBannerList = async () => {
  const res = await fetch("banner");
  const { data } = await res.json();
  return data;
};

const imageBannerList = fetchImageBannerList();
