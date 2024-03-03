// IF ELSE STATEMENT

// QUESTION 01
var getNumber = +prompt("Write a number which was divisible by 3.");
if(getNumber % 3 === 0){
    console.log("You did a great job.");
}else{
    console.log("Number is not divisible by 3.");
}

// QUESTION 02
var checkNumber = +prompt("Write a numbe to check even or odd.");
if(checkNumber % 2 === 0){
    console.log(checkNumber + " is even.");
}else{
    console.log(checkNumber + " is odd.");
}

// QUESTION 03
var ageInput = +prompt("Whats your age?");
if(ageInput > 18){
    console.log("Old enough.");
}else{
    console.log("Too Young.");
}

// QUESTION 04
var getName = prompt("Whats you name?");
if(getName === "Hasan Raza"){
    console.log("Thats my name too.");
}else{
    console.log("...");
}

// QUESTION 05
console.log("Same as Question 01");

// QUESTION 06
console.log("Not Understood");

// QUESTION 07
var num01Calculation = +prompt("Write down 01 number for calcuation");
var num02Calculation = +prompt("Write down 02 number for calculation");
var plusCalculation = num01Calculation+num02Calculation;
var opertaor = prompt("Give a aithmetic operator");
if(opertaor === "+"){
    console.log(num01Calculation + " + " + num02Calculation + " = " + plusCalculation);
}else if(opertaor === "-"){
    console.log(num01Calculation + " - " + num02Calculation + " = " + num01Calculation-num02Calculation);
}else if(opertaor === "*"){
    console.log(num01Calculation + " X " + num02Calculation + " = " + num01Calculation*num02Calculation);
}else if(opertaor === "/"){
    console.log(num01Calculation + " / " + num02Calculation + " = " + num01Calculation/num02Calculation);
}else if(opertaor === "%"){
    console.log(num01Calculation + " % " + num02Calculation + " = " + num01Calculation%num02Calculation);
}else{
    console.log("Any value was missing!");
}

// QUESTION 08
var timeInput = +prompt("Write down the time at your place. For example: 1900.");
if(timeInput >= "0000" && timeInput < 1200){
    console.log("Good Morning");
}else if(timeInput >= 1200 && time < 1700){
    console.log("Good Afternoon");
}else if(timeInput >= 1700 && timeInput < 2100){
    console.log("Good Evening");
}else{
    console.log("Good Noght");
}

// QUESTION 09
console.log("Not Understood");

// QUESTION 10
var password = "Hasan Raza";
var inputPassword = prompt("Write down a passwod");
if(inputPassword === " "){
    console.log("Enter Password");
}else if(inputPassword === password){
    console.log("Correct! The password you entered matches the orignal password.");
}else{
    console.log("Incorrect Password");
}

// QUESTION 11
var firstName = prompt("Whats your name?");
if(firstName === "Fahad"){
    console.log("Hello Fahad");
}else{
    console.log("You are not Fahad");
}

// QUESTION 12
var hour = 13;
if(hour < "18"){
    console.log("Good Day");
}else{
    console.log("Good Evening");
}

// QUESTION 13
var value01 = +prompt("Write down vaue one to check which was greater");
var value02 = +prompt("Write down vaue two to check which was greater");
if(value01 > value02){
    console.log(value01 + " is greater than " + value02);
}else if( value02 > value01){
    console.log(value02 + " is greater that " + value01);
}else{
    console.log(value01 + value02 +  " are equal.");
}

// QUESTION 14
var numberCheck = +prompt("Write a number to check a number is positive negative or zero.");
if(numberCheck > "0"){
    console.log(numberCheck + " is positive.");
}else if(numberCheck < "0"){
    console.log(numberCheck + " is negative.");
}else{
    console.log(numberCheck + " is Zero");
}

// QUESTION 15
var timeCheck = prompt("What was the current hour is?");
if(timeCheck >= "6 am" && timeCheck <= "9 am"){
    console.log("Breakfast is served");
}else if(timeCheck >= "17 pm" && timeCheck <= "20 pm"){
    console.log("Its dinner time");
}else{
    console.log("Sorry, you'll have to wait, or go get a snack.");
}

// QUESTION 16
console.log("Not understood.");

// QUESTION 17
var getvowels = prompt("Give a vowel character");
if(getvowels === "a" && getvowels === "e" && getvowels === "i" && getvowels === "o" && getvowels === "u"){
    console.log("True its a vowel");
}else{
    ("False its not a vowel");
}

// QUESTION 18
var comparisionOpertaor = 8;
if(10 !== comparisionOpertaor){
    console.log("True");
}else{
    console.log("False");
}

// QUESTION 19
console.log("Switch case! Not learn till yet.")