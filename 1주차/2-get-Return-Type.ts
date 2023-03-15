// 내장 제네릭 ReturnType<T>을 이를 사용하지 않고 구현하세요.

// T extends로 함수타입임을 명시후, T의 리턴타입 P를 추론하여 P 리턴
type MyReturnType<T extends (...args: any) => any> = T extends (
  ...args: any
) => infer P
  ? P
  : never;

const fn = (v: boolean) => {
  if (v) return 1;
  else return 2;
};

type a = MyReturnType<typeof fn>; // should be "1 | 2"
