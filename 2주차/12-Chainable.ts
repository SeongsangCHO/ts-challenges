// T는 default값으로 빈 객체를 사용
// option은 K, V를 제네릭으로 사용하는데, key는 K, value는 V를 사용
// 해당 함수의 리턴타입은 제네릭으로 받은 T값 + 함수로 인해 호출된 Key : Value를 타입으로써 추가
// get은 확장되는 객체

type Chainable<T = {}> = {
  option<K extends string, V>(key: K, value: V): Chainable<T & { [P in K]: V }>;
  get(): T;
};
