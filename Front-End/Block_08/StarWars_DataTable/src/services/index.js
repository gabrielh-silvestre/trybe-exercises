export function sortObjAsc(arr, objKey) {
  return arr.sort((a, b) => a[objKey] - b[objKey]);
}

export function sortObjDesc(arr, objKey) {
  return arr.sort((a, b) => b[objKey] - a[objKey]);
}

export function sortObjAlf(arr, objKey = 'name') {
  return arr.sort((a, b) => a[objKey].localeCompare(b[objKey]));
}
