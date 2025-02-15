This repository demonstrates a common type error in TypeScript when attempting to combine arrays of different types using generics. The bug occurs because the generic type `T` is inferred as `number` from `arr1` and then `arr2` is incompatible because of type `string`. The solution demonstrates a type guard approach to handle arrays of mixed types.