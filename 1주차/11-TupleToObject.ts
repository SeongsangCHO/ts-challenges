type TupleToObject  <T extends readonly (string|number)[]>  = {
  [Key in T[number]] : Key;
}

const tuple = ["tesla", "model 3", "model X", "model Y"] as const;

type result = TupleToObject<typeof tuple>; // expected { tesla: 'tesla', 'model 3': 'model 3', 'model X': 'model X', 'model Y': 'model Y'}
