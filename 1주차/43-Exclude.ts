// T에서 U에 할당할 수 있는 타입을 제외하는 내장 제네릭 Exclude<T, U>를 이를 사용하지 않고 구현하세요.

// ! 유니온 타입에 대해서 extends는 하나씩 다 본다. 'a'(T)가 'a'(U)에 할당되는지, 'b'(T)가 'a'(U)에, 'c'(T)가 'a'(U)에 되는지 봄
type MyExclude<T,U> = T extends U ? never : T;

type Result = MyExclude<'a' | 'b' | 'c', 'a'> // 'b' | 'c'