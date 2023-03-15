// Array.push의 제네릭 버전을 구현하세요.
type Push<T extends any[], K> = [...T, K];
type Result3 = Push<[1, 2], "3">; // [1, 2, '3']
