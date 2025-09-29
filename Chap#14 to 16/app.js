// Q1. Declare an empty array using JS literal notation to store student names in future. 

// let students=[];

// Q2. Declare an empty array using JS object notation to store student names in future. 

// let students = new Array();


// Q3. Declare and initialize a strings array.
//let colors = ["Yellow", "Orange", "Red", "Purple", "Blue"];
//document.write(`String Array:<br/> ${colors.join("<br/>")} <br/><br/><br/>`);

// Q4.  Declare and initialize a numbers array. 
// let marks = [203, 212, 288, 233, 264];
// document.write(`Number Array:<br/> ${marks.join("<br/>")} <br/><br/><br/>`);

// Q5.  Declare and initialize a boolean array. 
// let bool = [true, false, false, true];
// document.write(`Boolean Array:<br/> ${bool.join("<br/>")} <br/><br/><br/>`);

// Q6. Declare and initialize a mixed array. 
// let data = ["Aisha", "Aqeel", 23, true];
// document.write(`Mixed Array:<br/> ${data.join("<br/>")} <br/><br/><br/>`);

// Q7. Declare and Initialize an array and store available education qualifications in Pakistan (e.g. SSC, HSC, BCS, BS, BCOM, MS, M. Phil., PhD).
// let qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M.Phil", "PHD"];
//document.write("Qualifications:<br/><br/>");

//for (let i = 0; i < qualifications.length; i++) {
//    document.write(`${i + 1}) ${qualifications[i]} <br/>`);
//}
// Q8. Write a program to store 3 student names in an array.Take another array to store score of these three students.
// Assume that total marks are 500 for each student, display the scores & percentages of students like: 

//let students = ["Aisha",Fatima","Hifza"];
//let scores = [450, 400, 350];
//let total = 500;

//for (let i = 0; i < students.length; i++) {
//    let percentage = (scores[i] / total) * 100;
//    document.write(`Score of ${students[i]} is ${scores[i]}. Percentage: ${percentage}% <br/>`);
//}


// Q9. Initialize an array with color names. Display the array elements in your browser.

// let colors = [];


// a. Ask the user what color he/she wants to add to the beginning & add that color to the beginning of the array.

// let userColor=prompt('Enter your desire color to be added in the beginning of the array');
// colors.unshift(userColor);

// document.write(`Updated array:<br/> ${colors.join("<br/>")} <br>`)

// b. Ask the user what color he/she wants to add to the end & add that color to the end of the array. 

// let userColorend=prompt('Enter your desire color to be added at the end  of the array');
// colors.push(userColorend);
// document.write(`Updated array:<br/> ${userColorend.join("<br/>")} <br>`)

// c. Add two more color to the beginning of the array. 

//let addColor1=prompt("Add first color to the beginning of the array");
//let addColor2=prompt("Add second color to the beginning of the array");
//colors.unshift(addColor1,addColor2)
//document.write(`Updated array:<br/>  ${colors.join("<br/>")} <br/>`);

// d. Delete the first color in the array. 

// colors.shift();
// document.write(`Updated array:<br/>  ${colors.join("<br/>")} <br/>`)

// e. Delete the last color in the array

// colors.pop();
// document.write(`Updated array:<br/>  ${colors.join("<br/>")} <br/>`)

// f. Ask the user at which index he/she wants to add a color & color name. Then add the color to desired position/index.

// let index=+prompt("At which index no you want to add color");
// let colorName=prompt("And which color ?");
// colors.splice(index,0,colorName);
// document.write(`Updated array:<br/>  ${colors.join("<br/>")} <br/>`)

// g. Ask the user at which index he/she wants to delete color(s) & how many colors he/she wants to delete

// index=+prompt("At which index you want to delete color" );
// let deleteCount=+prompt("How many colors do you want to delete?);
// colors.splice(index,deleteCount);
// document.write(`Updated array:<br/>  ${colors.join("<br/>")} <br/>`)

// Q10. Write a program to store student scores in an array & sort the array in ascending order using Array’s sort method. 

// let score=[320,230,480,120];
// document.write(`Scores of Students : ${score.join("<br/>")} <br>`);   
// document.write(`Ordered Scores of Students : ${score.sort((a, b) => a - b)("<br/>")} <br>`);

//Q11. Write a program to initialize an array with city names. Copy 3 array elements from cities array to selectedCities array. 

// let cityNames=["Karachi","Lahore","Multan","Islamabad","Quetta"];
// document.write(`Cities List : ${cityNames.join("<br/>")} <br>`)
// let selectedCities=cityNames.slice(2,5);
// document.write(`Selectedcities List : ${selectedCities.join("<br/>")} <br>`)

// Q12. Write a program to create a single string from the below mentioned array: var arr = [“This ”, “ is ”, “ my ”, “ cat”];

// let array=["This","is","my","cat"];
// document.write(`Array : ${array} <br>`);
// let string = array.join(' ');
// document.write(`String : ${string} <br/>`);


// Q13&14. Create a new array. Store values one by one in such a way that you can access the values in the order in which they were stored. (FIFO-First In First Out)

//  let devices = ["keyboard","mouse","printer","monitor"];
//  let out;
//  document.write(`Devices : ${devices} <br>`);
//  out = devices.shift();
//  document.write(`Out: <br> ${out} <br`)

// out = devices.shift();
// document.write()`Out: <br> ${out} <br>`)
// out = devices.shift();
// document.write(`Out: <br> ${out} <br>`)
// out = devices.shift();
// document.write(`Out: <br> ${out} <br>`)



// Q15.  Write a program to store phone manufacturers (Apple, Samsung, Motorola, Nokia, Sony & Haier) in an array. Display the following dropdown/select menu in  browser using document.write() method: 

// let phoneMenu = ["Apple","Samsung","Motorola","Nokia", "Sony","Haier"];
// let index = 0;
// document.write("<select>");
// document.write(`<option>${phoneMenu[index++]}</option>`);
// document.write(`<option>${phoneMenu[index++]}</option>`);
// document.write(`<option>${phoneMenu[index++]}</option>`);
// document.write(`<option>${phoneMenu[index++]}</option>`);
// document.write(`<option>${phoneMenu[index++]}</option>`);
// document.write(`<option>${phoneMenu[index++]}</option>`);
// document.write("<select>");