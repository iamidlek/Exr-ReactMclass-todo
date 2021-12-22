import { atom, selector } from "recoil";

// 개발자를 도와주는 도구
// "TO_DO"만 하면 0 으로 숫자로 관리됨
// https://www.typescriptlang.org/ko/docs/handbook/enums.html
export enum Categories {
  "TO_DO" = "TO_DO",
  "DOING" = "DOING",
  "DONE" = "DONE",
}

export interface IToDo {
  text: string;
  id: number;
  category: Categories;
}

export const categoryState = atom<Categories>({
  key: "category",
  default: Categories.TO_DO,
});

export const toDoState = atom<IToDo[]>({
  key: "toDo",
  default: [],
});

// selector atom의 output을 변경시킴
// computed 같은 느낌 계산된 값 반환
// 혹은 계산된 값들의 배열을 반환 (배열도 결국 값)
export const toDoSelector = selector({
  key: "toDoSelector",
  get: ({ get }) => {
    const toDos = get(toDoState);
    const category = get(categoryState);
    return toDos.filter((toDo) => toDo.category === category);
  },
});
