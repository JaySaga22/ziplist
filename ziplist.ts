// Declare a union type for elements that can be in the list
type ListElement = string | number;

// Use the defined type in the function signatures
function zipList(list1: ListElement[], list2: ListElement[]): ListElement[] {
  const result: ListElement[] = [];
  for (let i = 0; i < list1.length; i++) {
    result.push(list1[i]);
    result.push(list2[i]);
  }
  return result;
}

function zipListTheFunctionalWay(list1: ListElement[], list2: ListElement[]): ListElement[] {
  return list1
    .map((item: ListElement, index: number): ListElement[] => [item, list2[index]])
    .reduce((acc: ListElement[], val: ListElement[]): ListElement[] => acc.concat(val), []);
}

// Test the functions
console.log(zipList(['a', 'b', 'c'], [1, 2, 3])); // Output: ['a', 1, 'b', 2, 'c', 3]
console.log(zipListTheFunctionalWay(['a', 'b', 'c'], [1, 2, 3])); // Output: ['a', 1, 'b', 2, 'c', 3]
