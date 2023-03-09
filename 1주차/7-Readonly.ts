/**
 * keyof를 붙여주는 이유는 제네릭 T의 property임을 명시해주어야 하기 때문에 붙임
 * type MyPick<T, K extends keyof T> = { [Key in K]: T[Key]; }; ->이미 K는 T의 key속성임을 지정해주었기에 keyof를 따로 지정할 필요가 없음
 */

type MyReadonly<T> = {
  readonly [Key in keyof T]: T[Key];
};
