let arr;
let sum = 0;
for (let i = 0; i<arr.length; i++){
  sum += arr[i];
}
let resArr = arr.map(number =>{
  return (sum - number);
})