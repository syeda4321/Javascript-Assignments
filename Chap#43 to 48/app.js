// Chapter # 43 to 48

// 1. Show an alert box on click on a link.

// function greet() {
//   alert("Hello User");
// }



// 2. Display some Mobile images in browser. On click on an
// image Show the message in alert to user.

// function thanks(){
//     alert('Thanks purchasing phone from us')
// }

// 
// 3. Display 10 student records in table and each row should contain a delete
// button. If you click on a button to delete a record, entire row should be
// deleted.

// function remove(e){
//     e.parentNode.parentNode.remove()

// }

//  4.
//4. Display an image in browser. Change the picture on mouseover and set the
// first picture on mouseout.

// let picture = document.getElementById("picture");
// picture.addEventListener("mouseover", () => {
//    let path =
//     picture.src === "http://127.0.0.1:5500/images/pic5.jpg"
//       ? "http://127.0.0.1:5500/images/pic6.jpg"
//       : "http://127.0.0.1:5500/images/pic5.jpg";

//   picture.src = path;
// });


// 5. Show a counter in browser. Counter should increase on click on increase
// button and decrease on click on decrease button. And show updated counter
// value in browser.


// function increase() {
//     var value = document.getElementById("counter").innerHTML
//     value = parseInt(value)
//     console.log(value)
//     value = value + 1
//     document.getElementById("counter").innerHTML = value
// }
//  function decrease() {
//     var value = document.getElementById("counter").innerHTML
//     value = parseInt(value)
//     value = value - 1
//     document.getElementById("counter").innerHTML = value
// }