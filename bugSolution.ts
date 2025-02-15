function combineArrays<T>(arr1: T[], arr2: T[]): T[] {
  return [...arr1, ...arr2];
}

function combineArraysSafe<T>(arr1: any[], arr2: any[]): any[]{
  return [...arr1, ...arr2];
}

const arr1 = [1, 2, 3];
const arr2 = ["a", "b", "c"];

const combinedArray = combineArraysSafe(arr1, arr2); // No error
console.log(combinedArray); // Output: [1, 2, 3, 'a', 'b', 'c']