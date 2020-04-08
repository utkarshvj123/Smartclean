export function findValueWithIndex(array, index, paramToFind) {
  const value = array[index][paramToFind];
  return value;
}

export function jsonCreation(array) {
  const newArray1 = Object.keys(array[0]);
  const newArra = [];
  newArray1.map((val) => {
    let newStr = val.replace(/-/g, " ");
    newArra.push({
      label: newStr.charAt(0).toUpperCase() + newStr.slice(1),
      field: val,
      sort: "asc",
      width: 150,
    });
  });
  return newArra;
}
