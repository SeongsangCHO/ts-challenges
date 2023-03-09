/**
 * JS
 * in operator는 프로퍼티가 특정객체에 포함되어있는지 체크하는 용도로 return의 타입은 boolean이다. -> const me = {name : "CSS"} , "name" in me => true

 * TS
 * 타입의 범위를 좁히기 위해 사용
 * 제네릭타입에서 iterator역할로 사용
 * [Key in K]는 제네릭타입인 K의 키를 순회함 -> 따라서 K의 키 갯수만큼 순회하며 생성됨.
 */
//

type MyPick<T, K extends keyof T> = {
  [Key in K]: T[Key];
};

interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

type TodoPreview = MyPick<Todo, "title" | "completed">;

const todo: TodoPreview = {
  title: "Clean room",
  completed: false,
};
