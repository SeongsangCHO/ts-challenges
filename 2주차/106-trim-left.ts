// 정확한 문자열 타입이고 시작 부분의 공백이 제거된 새 문자열을 반환하는 TrimLeft<T>를 구현하십시오.

// 공백문자가 여러번 나올 수 있으니 TrimLeft<K>로 중복제거
type TrimLeft<T extends string> = T extends `${" " | "\t" | "\n"}${infer K}`
  ? TrimLeft<K>
  : T;

type trimed = TrimLeft<"  Hello World  ">; // 기대되는 결과는 'Hello World  '입니다.
