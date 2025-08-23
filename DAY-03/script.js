console.log('Day 03 assignment loaded');
//1. Odd or Even?
let taskNumber = 5;
let checkOddEven = taskNumber % 2 === 0 ? 'Even' : 'Odd';
console.log(checkOddEven)
document.getElementById('task-1').innerText = checkOddEven;
/*
Task 2. Do you have a Driving License?
Let's check if you are eligible to get a driving license. The eligibility to get a driving licence is 18 years.

 Manage age as a variable.
 Check if the age is elligible for a driving license and print it on the console accordingly.
 */
const ageForLicence = 28;
const isEligible = ageForLicence >= 18 ? 'Eligible for licence' : 'Not Eligible';
document.getElementById('task-2').innerText = isEligible;

console.log("User Age is", ageForLicence, "and he is eligible for driving licence")

/*
Task 3. Calculate CTC with a Bonus

Let's calculate how much you earn from your office.

 You get 12,300 rupees as your monthly salary.
 You get a 20% bonus on your annual salary.
 How much money do you make per annum as a CTC?

*/

const monthlySalary = 12300;
const annualSalary = monthlySalary * 12;
const additionalBonus = (annualSalary * 20) / 100;
const totalAnualSalary = annualSalary + additionalBonus;
document.getElementById('task-3').innerText = totalAnualSalary
console.log(annualSalary)
console.log(additionalBonus)
console.log(totalAnualSalary)

/*
Task 4. Write a program for the Traffic Light Simulation.
Red Light... Green Light... Let's Play!

 Create a color variable.
 Based on the color variable's value print in the console if a traveller needs to STOP or GO. The Red color is for STOP and the Green color is for GO.
*/

const colorRed = "🔴 Red Light";
const colorGreen = "🟢 Green Light";

let color = colorRed;

console.log(color === colorRed ? '🔴 Stop' : color === colorGreen ? ' 🟢 Go' : 'Hold on')

color = colorGreen;

console.log(color === colorRed ? '🔴 Stop' : color === colorGreen ? '🟢 Go' : 'Hold on')


/*
Task 5. Create an Electricity Bill Calculator
Let's calculate how much you pay for electricity bills per month and annually.

 Create a units variable. Based on this value you will calculate the total electricity bill for a months.

 If each day you consume the units and each unit cost 150 rupees, how much will you be charged per month?

 If there is a 20% discount on the annual payment, how much will you be charged for an annual payment?

*/

let unit = 4; // per day
const perUnitBill = 150;

unit = 30 * 4; // for a month
const monthlyBill = unit * perUnitBill;

const annualBill = monthlyBill * 12; // Annual Bill
const annualDiscount = (annualBill * 20) / 100; // 20% discount

const annualBillWithDiscount = annualBill - annualDiscount;

document.getElementById('task-5').innerText = unit;
document.getElementById('task-5-1').innerText = monthlyBill;
document.getElementById('task-5-2').innerText = annualBill;
document.getElementById('task-5-3').innerText = annualDiscount;
document.getElementById('task-5-4').innerText = annualBillWithDiscount;

console.log("Unit", unit)
console.log("Monthly", monthlyBill)
console.log("Annually", annualBill)
console.log("Discount", annualDiscount)
console.log("Final Bill", annualBillWithDiscount)

/*

Task 6. Leap Year Checker
Is 2025 a Leap Year?

 Take year as input.
 Use the arithmetic operator and ternary operator to print if a year is a leap year or not.

 */

 let currentYear = 2025;
 const isLeapYear = currentYear / 4 === 0 ? 'Leap Year' : 'Not a leap year';

 document.getElementById('task-6').innerText = isLeapYear;

 console.log(isLeapYear)

 /*

7. Max of Three Numbers 
Find the max number from the lot.

 Take three numbers and assign them to variables p, q, and r.
 Now find the maximum of these three numbers using the comparison operators.

*/

const p = 33;
const q = "55";
const r = 52;

const maxNumber = p > q && p > r ? 'p is the highest number' :  q > p && q > r ? 'q is the highest number' : r > p && r > q ? 'r is the highest number' : 'Pleace check the values are valid Numbers';

console.log(maxNumber)

/*
8. Bitwise Doubling
A tricky one for you

 Create a variable count and assign a value, say, 5.
 Now use the Bitwise shift operator to make the number double.
 Print it on the console.

*/

/* 32 Bit of 5

5 / 2 = 2 (1)
2 / 2 = 1 (0)
1 / 2 = 0 (1)

 5 = 101
*/

//  double shift

