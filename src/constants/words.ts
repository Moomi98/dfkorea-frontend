interface IWords {
  [key: string]: Record<string, string>;
}

const words: IWords = {
  Common: {
    cancel: "취소",
    register: "등록",
    title: "제목",
  },

  Header: {
    logo: "DF Korea",
    productList: "제품 목록",
  },
};

export default function getWord(target: string, key: string): string {
  return words[target][key];
}