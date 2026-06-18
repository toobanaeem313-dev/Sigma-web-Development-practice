// alert("Enter the value of a")
// let a =prompt("Enter a here")
// document.write(a)
// let write= confirm("Do you want it to write it to the page")
// if(write){
//     document.write(a)
// }
// else{
//     document.write("please allow me to write")
// }
// console.log(window)
// console.log(document)
// console.log(document.body)
// document.body.style.background="yellow"


//   let repeat=true;
//   while(repeat){
//  let age= Number(prompt("Enter your age"))
//  if(age<0){
//     console.error("Age cannot be negative")
//     alert("Invalid age")
//  }
// else if (age>=18){
//     alert("you can drive")
// }
// else{
//     alert("You can not drive")
// }

// repeat=confirm("Do you want your age again")
//   }

// let color=Number(prompt("Plz Enter color number"))
// if(color===2){
//     document.body.style.backgroundColor="red"
// }
// else if(color===3){
//     document.body.style.backgroundColor="purple"
// }
// else{
//     alert("invalid color")
// }

// 🟢 Q1 Age Category

// Prompt se age lo.


// 13–17 → “Teen”

// 18–59 → “Adult”

// 60+ → “Senior”

// Har result ke baad confirm:
// “Check another age?”

// let repeat=true;
// while(repeat){
// let age=Number(prompt("Enter your age"))
// if(age<13){
//     alert("child")
// }
// else if(age>=13 && age<=17 ){
//     alert("Teen")
// }
// else if(age>=18 && age<=59){
//     alert("Adult")
// }
// else if(age>60){
//     alert("Senior")
// }
// repeat=confirm("check another age?")
// }


// 🟢 Q2 Number Guess Even/Odd

// User se number lo.

// even → alert “Even number”

// odd → alert “Odd number”

// Confirm:
// “Check another number?”

// let repeat=true;
// while(repeat){
//     let number = Number(prompt("Enter any Number"))
//     if(number%2==0){
//         alert("Even Number")
//     }
//     else{
//         alert("odd Number")
//     }
//     repeat=confirm("Check another Number?")
// }



// 🟢 Q3 Simple Login Check

// Prompt username lo.
// Prompt password lo.

// Correct:

// username: admin

// password: 1234

// Result:

// correct → “Login successful”

// wrong → “Invalid credentials”

// Confirm:
// “Try again?”
// let repeat=true;
// while(repeat){
//     let username=prompt("Enter your username")
//     let password=Number(prompt("Enter your password"))
//     if(username=="admin" && password==1234){
//         alert("Login successful")
//     }
//     else{
//         alert("Invalid credentials")
//     }
//     repeat=confirm("Try again?")
// }


// 🟢 Q4 Color Menu

// Prompt:

// 1 = red
// 2 = green
// 3 = blue


// Input ke base par background color change karo.
// Invalid par console.log.

// Confirm:
// “Change color again?

// let repeat=true;
// while(repeat){
//     let number=Number(prompt("Enter color Number"))
//     if(number==1){
//         document.body.style.backgroundColor="red"
//     }
//     else if(number==2){
//         document.body.style.backgroundColor="green"
//     }
//     else if(number==3){
//         document.body.style.backgroundColor="blue"
//     }
//     else{
//         alert("Invalid Number ")
//     }
//     repeat=confirm("Change color again")
// }

// Calculator:

// Prompt:

// Enter first number
// Enter operator (+ - * /)
// Enter second number


// Result alert.

// Confirm:
// “Another calculation?”

// let repeat=true;
// while(repeat){
//     let firstnumber=Number(prompt("Enter first Number"))
//     let operator=prompt("Enter operator + - * /")
//     let secondnumber=Number(prompt("Enter second Number"))
//     let result;
//     if(operator==="+"){
//           result=firstnumber + secondnumber;
//     }
//     else if(operator==="-"){
//         result=firstnumber - secondnumber;
//     }
//     else if(operator==="*"){
//         result=firstnumber * secondnumber;
//     }
//     else if(operator==="/"){
//         result=firstnumber / secondnumber;
//     }
//     else{
//         alert("invalid operator ")
//         // continue;
//     }
//     alert("result = "+result)
//     repeat=confirm("Another calculation")
// }

// let number= Number(prompt("Enter a number"))
// if(number>4){
//     window.location.href="https://www.instagram.com"
// }

// Q2: Age Verification with Redirect

// Prompt: enter age

// Age < 0 → console.error “Invalid age”

// Age ≥ 18 → redirect to https://www.youtube.com

// Age < 18 → alert “You are underage”

// Confirm → “Check another age?”


// let repeat=true;

// while(repeat){
//      let age= Number(prompt("Enter age"))
//      if (age<0){
//         console.error("Invalid age")
//      }
//      else if(age>=18){
//         window.location.href="https://www.youtube.com"
//      }
//      else if(age<18){
//         alert("You are underage")
//      }
//      repeat=confirm("Check another age?")
// }


// Q3: Color Chooser with URL

// Prompt: enter number 1–3

// 1 → https://www.red.com

// 2 → https://www.green.com

// 3 → https://www.blue.com

// Else → alert “Invalid choice”

// Confirm → “Choose again?”

// let repeat=true;

// while(repeat){
//     let num=Number(prompt("Enter number"))
//     if(num===1){
//         window.location.href="https://www.red.com"
//     }
//     if(num===2){
//         window.location.href="https://www.green.com"
//     }
//     if(num===3){
//         window.location.href="https://www.blue.com"
//     }
//     repeat=confirm("Choose Again?")
// }

  // console.log(document.body.firstChild)
  // console.log(document.body.lastChild)
  // console.log(document.body.childNodes)
//   let arr=Array.from(document.body.childNodes)
//  console.log(arr)

// console.log(document.body.firstChild)
// a = document.body.firstChild
// console.log(a.parentNode)
// console.log(a.parentElement)
// console.log(a.firstChild.nextSibling)

// let b=document.body
// console.log("First child of b is:".replace, b.firstChild)
// console.log("First Element child of b is:",b.firstElementChild)



// AGAIN::

// console.log("Hello")
// let a =4;
// let b=2;
// console.log(a+b)

// alert("Enter the value of z!")
// let z =prompt("Enter a here")
// document.write(z)
// z=Number.parseInt(z)
// alert("you entered z of type"+(typeof z))

// let write=confirm("Do you want to write it to the page")
// if(write){
//   document.write(z)
// }
// else{
//   document.write("please allow me to write")
// }

// window.console.log(window)
// console.log(document.body)
// document.body.style.backgroundColor="red"

// let name=prompt("Enter your Name")
// alert("Hello" +" "+name +" "+ "Welocome!" )

// let age= Number(prompt("Please Enter your Age"))
// if(age>=18){
//   alert("You are allowed")
// }
// else{
//   alert("You are not allowed")
// }

// console.log(document.body.firstChild)
// a= document.body.firstChild
// console.log(a.parentNode)
// console.log(a.parentElement)
// console.log(a.firstChild.nextSibling)

// let b=document.body
// console.log("First child of b is:" , b.firstChild)
// console.log("First Element child of b is:", b.firstElementChild)
// console.log("second Element child of b is:", b.nextElementSibling)
// console.log("The last Elemeent child of b is:",b.lastElementChild)

// let t=document.body.firstElementChild.firstElementChild
// let elements=document.getElementsByClassName("box");
// elements[1].style.backgroundColor="yellow";
// elements[2].style.backgroundColor="purple"

// let boxes=document.querySelectorAll(".box")
// for(let i=0;i<boxes.length;i++){
//   boxes[i].style.backgroundColor="yellow"
// }



