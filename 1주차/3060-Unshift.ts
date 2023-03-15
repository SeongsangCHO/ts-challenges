// Array.unshift의 타입 버전을 구현하세요.
type Unshift<T extends any[], K>  = [K, ...T];

type Result55 = Unshift<[1, 2], 0>; // [0, 1, 2,]
