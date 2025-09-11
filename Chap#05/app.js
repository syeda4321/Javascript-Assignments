//  Chap # 5

// Q1. Write a program that take two numbers & add them in a new variable. Show the result in your browser?

 let numFirst =3
 let numSecond =5
 let sum = numFirst + numSecond 
 document.write(`Sum of ${numFirst} and ${numSecond} is ${sum} <br> `);

// Q2. Repeat task1 for subtraction, multiplication, division & modulus?

// // Subraction

 let subtraction = numFirst - numSecond
 document.write(`Subraction of ${numFirst} and ${numSecond} is ${subtraction} <br>`)

// // Multiplication

 let multiplication = numFirst * numSecond
 document.write(`Multiplication of ${numFirst} and ${numSecond} is ${multiplication} <br>`)

// // Division

 let division = numFirst / numSecond
document.write(`Division of ${numFirst} and ${numSecond} is ${division} <br>`)

// // Modulus.

 let modules= numFirst % numSecond
 document.write(`Modulus of ${numFirst} and ${numSecond} is ${modules} <br> `)


// Q3. Do the following using JS Mathematic Expressions

// // a. Declare a variable.

 let number;

// // b. Show the value of variable in your browser like “Value after variable declaration is: ??”.

document.write(`“Value after variable declaration is: ${number}”<br>`)

// // c. Initialize the variable with some number.

 number = 5

// // d. Show the value of variable in your browser like “Initial value: 5”.

 document.write(`“Initial value is: ${number}"<br>`)

// // e. Increment the variable.

 number++;

// // f. Show the value of variable in your browser like “Value after increment is: 6”.

 document.write(`“Value after increment is: ${number}” <br>`)

// // g. Add 7 to the variable.

 number +=7

// // h. Show the value of variable in your browser like “Value after addition is: 13”.

 document.write(`“Value after addition is: ${number}” <br>`)

// // i. Decrement the variable.

 number--;

// // j. Show the value of variable in your browser like “Value after decrement is: 12”.

 document.write(` “Value after decrement is: ${number}” <br>`)

// // k. Show the remainder after dividing the variable’s value by 3.

 number = number % 3;

// // l. Output : “The remainder is : 0”.

 document.write(`“The remainder is : ${number}”.`)

// Q4. Cost of one movie ticket is 600 PKR. Write a script to store ticket price in a variable & calculate the cost of buying 5
// tickets to a movie. Example output?

let ticketPrice = 600

 let total = ticketPrice * 5;

 document.write(`Total cost to buy 5 tickets to a movie is ${total} PKR`)

// Q5. Write a script to display multiplication table of any number in your browser. E.g?
// Q5. Write a script to display multiplication table of any number in your browser.

 let table = 4; 

document.write(`Table of ${table} <br><br>`);

 for (let i = 1; i <= 10; i++)
    
 {document.write(`${table} x ${i} = ${table * i} <br>`)};
