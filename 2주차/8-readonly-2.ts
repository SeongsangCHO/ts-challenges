// T에서 K 프로퍼티만 읽기 전용으로 설정해 새로운 오브젝트 타입을 만드는 제네릭 MyReadonly2<T, K>를 구현하세요.
// K가 주어지지 않으면 단순히 Readonly<T>처럼 모든 프로퍼티를 읽기 전용으로 설정해야 합니다.

type MyOmit3<T, K extends keyof T> = {
  [Key in keyof T as Key extends K ? never : Key]: T[Key];
};

type MyReadonly2<T, K extends keyof T> = MyOmit3<T, K> & {
  readonly [Key in K]: T[Key];
};

interface Todo3 {
  title: string;
  description: string;
  completed: boolean;
}

const todo4: MyReadonly2<Todo3, "title" | "description"> = {
  title: "Hey",
  description: "foobar",
  completed: false,
};

todo4.title = "Hello"; // Error: cannot reassign a readonly property
todo4.description = "barFoo"; // Error: cannot reassign a readonly property
todo4.completed = true; // OK
