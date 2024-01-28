interface IWords {
  [key: string]: Record<string, string>;
}

const words: IWords = {
  Common: {
    cancel: "취소",
    register: "등록",
    title: "제목",
    more: "자세히 보기",
  },

  Header: {
    logo: "DF Korea",
    productList: "제품 목록",
  },

  Login: {
    invalidId: "아이디가 일치하지 않습니다.",
    invalidPassword: "비밀번호가 일치하지 않습니다.",
  },
};

export default function getWord(target: string, key: string): string {
  return words[target][key];
}
