// Find Sum
// You are given an integer 
// N
// , and your task is to find the sum of all the even integers starting from 
// 1
//  upto 
// N
//  (
// N
//  inclusive).


const findSum = (n) => {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        if (i % 2 === 0)
            sum += i;
    }
    console.log(sum);
};
findSum(6)