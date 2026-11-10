const arr = [1, 2, 3, 4, 1, 0, 2, 2];

const divide = (arr, n) => {
  if (!arr || arr.length === 0) return [];
  
  const limit = Number(n);
  const result = [];
  let currentSubarray = [];
  let currentSum = 0;

  for (const num of arr) {
    if (currentSum + num <= limit) {
      currentSubarray.push(num);
      currentSum += num;
    } else {
      result.push(currentSubarray);
      currentSubarray = [num];
      currentSum = num;
    }
  }

  if (currentSubarray.length > 0) {
    result.push(currentSubarray);
  }

  return result;
};

const n = prompt("Enter n: ");
alert(JSON.stringify(divide(arr, n)));
