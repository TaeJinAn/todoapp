import { atom } from "recoil";

export const todosAtom = atom({
  key: "app/todosAtom",
  default: [
    {
      id: 3,
      regDate: "2022-04-27 12:12:12",
      content: "명상"
    },
    {
      id: 2,
      regDate: "2022-04-27 12:12:12",
      content: "공부"
    },
    {
      id: 1,
      regDate: "2022-04-27 12:12:12",
      content: "운동"
    }
  ],
});
