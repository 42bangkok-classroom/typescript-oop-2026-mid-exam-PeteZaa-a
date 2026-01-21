function getUniqueNumbers(arr1: number[], arr2: number[]): number[] {
  // Write your code below
  const sum = (arr1.concat(arr2))
  //console.log(sum);



  const sum2 = sum.filter((item,index) => sum.indexOf(item) === index)
  //console.log(sum2);
  
  return sum2

  
}

const arr1 = [1, 2, 3, 4];
const arr2 = [3, 4, 5, 6];


getUniqueNumbers(arr1,arr2)

