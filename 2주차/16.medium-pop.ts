// 배열 T를 사용해 마지막 요소를 제외한 배열을 반환하는 제네릭 Pop<T>를 구현합니다.

type Pop<T extends Array<any>> = T extends [...infer K, infer P] ? K : never;

type arr12 = ["a", "b", "c", "d"];
type arr23 = [3, 2, 1];

type re1 = Pop<arr12>; // expected to be ['a', 'b', 'c']
type re2 = Pop<arr23>; // expected to be [3, 2]
