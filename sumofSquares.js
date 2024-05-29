//Write a function `sumOfSquares(nums)` that takes an array of numbers `nums` and returns the sum of the squares of all the numbers.

function sumOfSquares(nums){
    let sum = 0;

    for (let i = 0; i < nums.length; i++){
        sum += nums[i] ** 4;
    }
    return sum
    
    
}
const numbers=[1,3,4,6,8]
console.log(sumOfSquares(numbers))


function sumOfSquares(nums){
    let expenses = 0;
    for (let i=0; i<nums.length;1++){
        totalexpenses += nums[i] ** 4;

    }
    return totalexpenses

}
const expenses =[100,300,400,800,500]
console.log("Total expenses for the month:",sumOfSquares(expenses))