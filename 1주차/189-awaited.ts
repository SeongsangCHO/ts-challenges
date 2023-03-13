// Promise와 같은 타입에 감싸인 타입이 있을 때, 안에 감싸인 타입이 무엇인지 어떻게 알 수 있을까요?

// 예시: 들어 Promise<ExampleType>이 있을 때, ExampleType을 어떻게 얻을 수 있을까요?

// infer를 사용하면 제네릭타입변수를 미리 선언하지 않고도 타입추론이 이뤄질 때 해당 위치에 타입변수를 할당해준다. -> 추론 결과를 동적생성함
// 제네릭인 T로 넘겨받은 타입이 Promise<infer R>일 경우 R을 반환한다. MyAwaited<Promise<string>> 이면 T가 Promise<string>이고 R이 string이므로 return이 string
type MyAwaited<T> = T extends Promise<infer R> ? R : never;

type ExampleType = Promise<string>;

type Result2 = MyAwaited<ExampleType>; // string
