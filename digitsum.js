// Find the sum of the digits of a given number.
// Write a program that takes a number from the user and get the sum of the digits present in the number.

// Note: You have to complete Number_Sum. No need to take any input.

const Number_Sum = (N) => {
    let sum = 0;
    while (N) {
        sum = sum + N % 10;
        N = parseInt(N / 10);
        console.log(sum);
    }
    console.log(sum);
};
Number_Sum(1234);