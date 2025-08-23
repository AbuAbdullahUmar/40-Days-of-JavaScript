console.log('Day 6 Assignment Script is loaded')
/*

7. Use an IIFE to Print “Hello, JavaScript!”
Write an IIFE that prints "Hello, JavaScript!" to the console. Here the Second word must be supplied using paramneter and argument.

8. Create a Simple Callback Function
Write a function greet(name, callback), where callback prints a message using the name parameter.

9. Create Call Stack Execution Diagram for this flow
function f1() {}
function f2() {
    f1();
}
f2();
10. Create Call Stack Execution Diagram for this flow
function f1() {}
function f2() {}
function f3() {
    f1();
}
f2();
f3();
f1();

*/

/*
1. Write a Function to Convert Celsius to Fahrenheit
Create a function celsiusToFahrenheit(celsius) that converts a temperature from Celsius to Fahrenheit. Formula: (Celsius * 9/5) + 32 = Fahrenheit
*/

function celsiusToFahrenheit(celsius){
    let conveter = (celsius * 9/5) + 32;
    return conveter;
}
console.log(celsiusToFahrenheit(36));

console.log("=====> TASK 1 ⬆️ ENDS <=====")
/* 
2. Create a Function to Find the Maximum of Two Numbers
Write a function findMax(num1, num2) that returns the larger of the two numbers. It should work for negative numbers as well.
*/

function findMax(num1, num2){
    if (num1 > num2){
        return num1
    } else{
        return num2
    }
}
console.log(findMax(3, 11))

console.log("=====> TASK 2 ⬆️ ENDS <=====")

/* 
3. Function to Check if a String is a Palindrome
Create a function isPalindrome(str) that checks if a given string is a palindrome (reads the same forward and backward). You can not use any string function that we have not learned in the series so far.
*/
console.log("=====> TASK 3 ❌ is incompleted due to lack of knowledge <=====")

/**
4. Write a Function to Find Factorial of a Number
Create a function factorial(n) that returns the factorial of n. Example 5! = 5 * 4 * 3 * 2 * 1
*/

function factorial(n) {
    let number = 1;
    while (n > 0) {  
        number = number * n;
        n--;
    }
    return number;
}

console.log(factorial(3)); 

console.log("=====> TASK 4 ⬆️ ENDS <=====")

/* 
5. Write a function to Count Vowels in a String
Write a function countVowels(str) that counts the number of vowels (a, e, i, o, u) in a given string.
*/

let learningJs = "40 days of Javascripts by tapaScript"
function countVowels(str){
    let vowels = 0;
    for (str of learningJs){
        if (str == "a" || str == "e"||str == "i" || str == "o"||str == "u"){
            vowels++
        }
    }
    return vowels;
}

let total = countVowels(learningJs);

console.log("Total Vowels:", total)

/**
6. Write a Function to Capitalize the First Letter of Each Word in a Sentence
Write a function capitalizeWords(sentence) that takes a sentence and capitalizes the first letter of each word. You can use the toUpperCase() method of string to convert the lowercase to uppercase.
*/