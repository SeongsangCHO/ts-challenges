type First<T extends (string | number)[]> = T[0];

type arr1 = ["a", "b", "c"];
type arr2 = [3, 2, 1];

type head1 = First<arr1>; // expected to be 'a'
type head2 = First<arr2>; // expected to be 3
type head3 = First<"A">; // T가 string | number array가 아님을 조건부로 체크하기에 Type error
