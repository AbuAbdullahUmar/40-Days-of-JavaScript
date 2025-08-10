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
