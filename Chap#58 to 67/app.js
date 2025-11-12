// Q1:
// i. Get element of id “main-content”
// let mainContent = document.getElementById("main-content");
// console.log(mainContent);

// ii. Display all child elements of “main-content”
// console.log(mainContent.children);

// iii. Get all elements of class “render” and show their innerHTML
// let renderElements = document.getElementsByClassName("render");
// for (let i = 0; i < renderElements.length; i++) {
//   document.write(renderElements[i].innerHTML + "<br>");
// }

// iv. Fill input value whose id is first-name
// document.getElementById("first-name").value = "Alex";

// v. Fill last-name and email
// document.getElementById("last-name").value = "Bank";
// document.getElementById("email").value = "alexbank@example.com";

// Q:2 use HTML code of question 1 and show the result on browser.


// Node type of element with id "form-content"
// let formContent = document.getElementById("form-content");
// console.log(formContent.nodeType);   // 1 (means element node)
// 
// ii. Node type of id "lastName" and its child
// let lastName = document.getElementById("lastName");
// console.log(lastName.nodeType);           // 1 (element)
// console.log(lastName.firstChild.nodeType); // 3 (text node)

// iii. Update child node (change text)
// lastName.firstChild.nodeValue = "Last Name: Aisha";

// iv. Get First and Last child of main-content
// console.log(mainContent.firstChild);
// console.log(mainContent.lastChild);

// v. Get next and previous siblings of id “lastName”
// console.log(lastName.nextSibling);
// console.log(lastName.previousSibling);

// vi. Get parent node and node type of element having id “email”
// let email = document.getElementById("email");
// console.log(email.parentNode);
// console.log(email.nodeType);
