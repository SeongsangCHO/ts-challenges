// T에서 K 프로퍼티만 제거해 새로운 오브젝트 타입을 만드는 내장 제네릭 Omit<T, K>를 이를 사용하지 않고 구현하세요.

// 1. Key in keyof T 는 T의 key들을 순회함 1: title. 2: description, 3: completed
// 2. 순회하는 T의 key를 가지고 extends 조건을 걸음 K에 속하는거면 never, 그렇지 않으면 Key를 타입으로 가짐
// T as Key를 왜함 ? -> 현재 반복중인 Key타입을 추론하기 위해서
type MyOmit<T, K extends keyof T> = {
  [Key in keyof T as Key extends K ? never : Key]: T[Key];
};
type MyOmit2<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

type TodoPreview = MyOmit<Todo, "description" | "title">;
type TodoPreview2 = MyOmit2<Todo, "description" | "title">;

const todo2: TodoPreview = {
  completed: false,
};
