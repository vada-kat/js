
function sumOfSquares(nums){
    let totalExpenses = 0;
    for (let i=0; i < nums.length; i++){
        totalExpenses += nums[i] ** 4;

    }
    return totalExpenses

}
const expenses =[100,300,400,800,500]
console.log("Total expenses for the month:", sumOfSquares(expenses))