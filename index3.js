// Write a program which takes a number from user and print all odd numbers in between 2 and N, but print 2 first.

// Note: You have to complete Print_Odd.No need to take any input.



const Print_Odd = (N) => {
    let i = 0;
    do {

        if (i % 2 === 0) {

            console.log(i);
            i++;

        }
    } while (i < N);
};
Print_Odd(10);