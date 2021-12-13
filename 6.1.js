function evenOddNums () {
  let arr = [4, 18, 0, 3, 1, 99];
  let evenNums;
  let oddNums;
for (i = 0; i < arr.length; i++) {
  if (typeof arr[i] == ‘number’ && arr[i] !== 0 && arr[i] % 2 === 0) {
      return evenNums++;
    } else if (arr[i] !== 0) {
       return oddNums++;
    } else if (arr[i] == 0) {
      console.log(‘there is 0 in the array’)
    } else {
      console.log(‘there is NaN in the array’)
    }
}
  
}

evenOddNums()
