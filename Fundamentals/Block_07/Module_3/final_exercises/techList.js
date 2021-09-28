function techList(arr, nm) {
  const techArray = arr.sort();
  const finalArray = [];

  for (let i = 0; i < arr.length; i += 1) {
    finalArray.push({ tech: techArray[i], name: nm });
  }

  return (arr.length <= 0)
    ? 'Vazio!'
    : finalArray;
}

module.exports = techList;
