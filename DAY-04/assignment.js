console.log('Day 4 Assignment Script is loaded')

// 1. What will be the output of this code snippet and why?
/*
let day = "Monday";

switch (day) {
   case "monday":
       console.log("It's the start of the week.");
       break;
   default:
       console.log("It's a normal day.");
}
*/
console.log("Ans: It's a normal day.")

/*
2. Build an ATM Cash Withdrawal System

Rajan goes to the Axis bank ATM. He enters an amount to withdraw. The ATM only allows multiples of 100. Print “Withdrawal successful” if valid, otherwise print “Invalid amount”.
*/

let amount = 850;

if (amount % 100 === 0) {
    console.log("Withdrawal successful")
} else {
    console.log("Invalid amount")
}


/*
3. Build a Calculator with switch-case

Write a simple calculator that takes an operator (+, -, , /, %) as input, and performs the operation on two numbers. Print the output on the console.
*/
let firstNumber = 10;
let secondNumber = 20;

let addingNumber = "%";

switch (addingNumber) {
    case "+" : console.log(firstNumber + secondNumber);
    break;
    case "-" : console.log(firstNumber - secondNumber);
    break;
    case "/" : console.log(firstNumber / secondNumber);
    break;
    case "%" : console.log(firstNumber % secondNumber);
    break;
    default: console.log('Please check the Operator');
}
/*
4. Pay for your movie ticket
Imagine, the INOX charges ticket prices based on age:

Children (<18 years): $3
Adults (18 - 60 years): $10
Seniors (60+ years): $8
Write a program that prints the ticket price based on the person’s age.

//=== I improved it by adding viewers to calculate the mass price of the tickets.
*/

let age;
let viewers = 10;

age = 10;
viewers;

const childrensTicket = 3;
const adultsTicket = 10;
const seniorsTicket = 8;

if (age < 18) {
    console.log("Your Ticket Price is " , childrensTicket * viewers)
} else if (age >= 18 && age <= 60) {
    console.log("Your Ticket Price is " , adultsTicket * viewers)
} else if (age >= 60){
    console.log("Your Ticket Price is " , seniorsTicket * viewers);
}
/*
5. Horoscope Sign Checker

Write a program that prints the zodiac sign(Aries, Taurus, Gemini, etc.) based on a person’s birth month. Make it month bases, not date based. Like March and April borns are Aries, Aplil and May born are Taurus, and so on. Do not use if-else.
*/

let month;

month = "July";

switch (month) {
    case "March":
    case "April":
        console.log("Aries ♈️");
        break;
    case "May":
    case "Jun":
        console.log("Taurus ♉️");
        break;
    case "July":
    case "August":
        console.log("Twins ♊️");
        break;
    case "September":
    case "October":
        console.log("Cancer ♋️");
        break;
    case "November":
    case "December":
        console.log("Leo ♌️");
        break;
    case "January":
    case "February":
        console.log("Virgo ♍️");
        break
    default:
        console.log("Please ensure that you write the full name of the month with the first letter capitalized.");
        break;
}
