// interface
interface UserInterface {
  name: string;
  age: number;
}

interface Author {
  name: string;
  age: number;
}

interface SocialAuthor extends Author {
  facebook: string;
  twitter: string;
  email: string;
}

interface WebtoonAuthor extends Author {
  naverEmail: string;
}

// type
type userAge = number;

type UserType = {
  name: string;
  age: number;
};

type SocialAuthorType = UserType & {
  facebook: string;
  twitter: string;
  email: string;
};

type WebtoonAuthorType = UserType & {
  naverEmail: string;
};

const author: SocialAuthor = {
  name: "Alwayz",
  age: 25,
  email: "email",
  facebook: "facebook",
  twitter: "twitter",
};

const author2: WebtoonAuthor = {
  name: "Alwayz",
  age: 25,
  naverEmail: "naver-email",
};

const getEmail = (author: SocialAuthor | WebtoonAuthor) => {
  if ("naverEmail" in author) {
    return author.naverEmail;
  }

  return author.email;
};

getEmail(author);
getEmail(author2);

// optional & union
interface UserInterface3 {
  name: string;
  age?: number;
}
