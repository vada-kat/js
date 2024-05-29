function sumOfSquares(nums) {
    let sum = 0;
    
    for (let i = 0; i < nums.length; i++) {
       
        sum += nums[i] ** 2;
    }
    return sum;
}


const numbers = [1, 2, 3, 4, 5];
console.log(sumOfSquares(numbers));