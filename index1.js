// Find the number of digits
// Take a number from the user and print the count of digits in that number.

// Note: You have to complete Find_Digits. No need to take any input.



const Find_Digits = (N) => {
    let count = 1;
    while (parseInt(N / 10) >= 1) {
        N = parseInt(N / 10);
        count++;
    }
    console.log(count);


};
Find_Digits(127);