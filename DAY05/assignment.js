console.log('Day 5 Assignment Script is loaded')
/*

> **DO NOT USE AI to FIND ANSWERS**. If you are stuck, let's discuss it on DISCORD and learn. Also, please note that none of the answers need you to create any UI. Just focus on the logic building and print the output on the browser console.






## 6. Write your understanding on the difefrences between for, while, and do-while loop. Create their flow charts.
*/

/*
## 1. Generate a Pyramid Pattern using Nested Loop as it is shown below:

```bash
*
* *
* * *
* * * *
* * * * *
```
*/

for (let i = 1; i <= 5; i++){
    for (j = 1; j <= i; j++){
        console.log(i)
    }
}
console.log("=====> TASK 1 ⬆️ ENDS <=====")
/*
## 2. Craete Multiplication Table (Using for loop)
Write a program to print the multiplication table of a given number up to 10.
For Example: If N = 3, output should be:

```bash
3 x 1 = 3
3 x 2 = 6
...
3 x 10 = 30
```
*/

for (let number = 1; number <=10; number++){
    console.log( "3 x", number, "=",3 * number);
}
console.log("=====> TASK 2 ⬆️ ENDS <=====")
/*
## 3. Find the summation of all odd numbers between 1 to 500 and print them on teh console log.
*/

for (let number = 1; number <= 500 ; number++){
    if (number % 2 === 0){
        console.log(number);
    }
}
console.log("=====> TASK 3 ⬆️ ENDS <=====")
/*
## 4. Skipping Multiples of 3
Write a program to print numbers from 1 to 20, but skip multiples of 3.
*/

for (let number = 1; number <= 20; number++){
    if (number % 3 === 0){
        continue
    }
    console.log(number)
}
console.log("=====> TASK 4 ⬆️ ENDS <=====")
/*
## 5. Reverse Digits of a Number (Using while loop)
Write a program to reverse the digits of a given number using a while loop.

Example:

```bash
Input: 6789
Output: 9876
```
*/

let number = 1;

while (number <= 5) { 
    console.log(number); 
    number++;
}
