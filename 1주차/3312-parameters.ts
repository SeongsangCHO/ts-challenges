// 내장 제네릭 Parameters<T>를 이를 사용하지 않고 구현하세요.

// keyof T는 T타입의 모든 속성을 유니온 타입으로 가져옴
//
type MyParameters<T extends (...args: any) => any> = T extends (
  ...args: infer P
) => any
  ? P
  : never;

// T에 함수이외의 타입을 줄 수 있으니 함수라는걸 명시하기 위해 extends (...args:any) => any로 타입을 좁혀주는게 좋을듯.
// 함수의 경우 파라미터도 함수의 속성이 되기 때문에 in keyof T로 순회가 가능하나 이외의 속성들도 타입으로 만들어버리기에 해당방식이 좋진 않은듯.
type MyParameters2<T> = {
  [Key in keyof T]: Key;
};

const foo = (arg1: string, arg2: number): void => {};

// [arg1: string, arg2:string]은 tuple parameter로 부르고, 파라미터의 타입을 배열형태로 정의할 수 있음
const foo2 = (params: [arg1: string, arg2: string]): void => {};

type FunctionParamsType = MyParameters<typeof foo>; // [arg1: string, arg2: number]
type FunctionParamsType2 = MyParameters2<typeof foo>; // [arg1: string, arg2: number]

type FunctionParamsType3 = MyParameters2<typeof foo>;
