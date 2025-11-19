// 1. Suppose You have an array of object
// var itemsArray = [
// {name:”juice”,price:”50”, quantity:”3”},
// {name:”cookie”,price:”30”, quantity:”9”},
// {name:”shirt”,price:”880”, quantity:”1”},
// {name:”pen”,price:”100”, quantity:”2”}];
// Calculate total price of each item and all items;


// var itemsArray = [
//   { name: "juice", price: 50, quantity: 3 },
//   { name: "cookie", price: 30, quantity: 9 },
//   { name: "shirt", price: 880, quantity: 1 },
//   { name: "pen", price: 100, quantity: 2 }
// ];

// itemsArray.forEach(item => {
//   console.log(`${item.name} Total Price = ${item.price * item.quantity}`);
// });

// let totalAll = 0;

// itemsArray.forEach(item => {
//   totalAll += item.price * item.quantity;
// });

// console.log(`Total of All Items = ${totalAll}`);


// 2. Create an object with properties name, email, password, age,
// gender, city, country.
// Check if age and country properties exist in object or not.
// Also check firstName and lastName properties in object.


// let obj = {
//   name: "Aisha",
//   email: "aisha12@gmail.com",
//   password: "12345",
//   age: 19,
//   gender: "female",
//   city: "Karachi",
//   country: "Pakistan"
// };

// console.log(`Age Exists? ${"age" in obj}`);
// console.log(`Country Exists? ${"country" in obj}`);

// console.log(`firstName Exists? ${"firstName" in obj}`);
// console.log(`lastName Exists? ${"lastName" in obj}`);



// 3. Create a constructor function with some properties. Now
// create multiple records using the constructor.

// function Student(name, age, city){
//     this.name = name;
//     this.age = age;
//     this.city = city;
// }

// let std1 = new Student("Aisha", 19, "Karachi");
// let std2 = new Student("Hina", 22, "Lahore");

// console.log(`Student 1 → Name: ${std1.name}, Age: ${std1.age}, City: ${std1.city}`);
// console.log(`Student 2 → Name: ${std2.name}, Age: ${std2.age}, City: ${std2.city}`);


// 4. Suppose you want to check population of your area, their
// educations and professions.
// Create a constructor function which holds following
// properties:
// Name, gender, address, education, profession,
// Enter all records one by one.
// Hint:

//  use select box for education and profession,
//  use radio box for gender

// Bonus : use can use localStorage to save records.


// function Person(name, gender, address, education, profession){
//     this.name = name;
//     this.gender = gender;
//     this.address = address;
//     this.education = education;
//     this.profession = profession;
// }

// let p1 = new Person("Aisha", "female", "Karachi", "Bachelors", "Teacher");

// console.log(`
// Person Record:
// Name: ${p1.name}
// Gender: ${p1.gender}
// Address: ${p1.address}
// Education: ${p1.education}
// Profession: ${p1.profession}
// `);

// let people = [];

// function addPerson(person){
//     people.push(person);
//     localStorage.setItem("populationData", JSON.stringify(people));
//     console.log(`Record Saved: ${person.name}`);
// }

// addPerson(p1);


// let saved = JSON.parse(localStorage.getItem("populationData"));
// console.log(`Saved Records = ${saved.length}`);



