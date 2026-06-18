// console.log("Hello world");
// console.log("code is running");
// let age=18;

// let result=(age>=18)?"you can drive":"you cannot drive"
// console.log(result)

// let number=20;
// if(number % 2==0){
//     console.log("NUMBER IS DIVISIBLE BY 2")
// }
// else{
//     console.log("NOT DIVISIBLE BY 2")
// }



// let person={
//     name:"Ali",
//     age:20
// }
// for (let key  in person) {
//      let Element=person[key]
//   console.log(key,Element)
    
    
// }


// let arr =[10,20,30];

// for (let value of arr) {
//     console.log(value)
// }

// let name="coco";
// for (let ch of name) {
//     console.log(ch)
    
// }
// let naam="my name is Tooba";
// let i=1;
// while(i<=5){
    
//      console.log(naam)
//     i++;
   
// }
// let j=6;
// do{
//     console.log(j)
//     j++;
// }
// while(i<=5);

// let product=7;
// for(let i=1;i<=10;i++){
// console.log(product,"x",i, "=" ,(product*i)) 
// }

// let zarb=9;
// let k=1;
// while(k<=10){
//     console.log(zarb,"x",k, "=",(zarb*k))
//     k++;
// }
// let obj={Harry:98,
//         Ali:70,
//         Akash:56
// }
// for (const key in obj) {
//     const element = obj[key];
//     console.log(key,element)
    
    
// }

// let number=1;
// for(let t=1;t<=10;t++){
//     console.log(t)
// }

// for(let q=1;q<=20;q++){
//     if(q%2==0){
//         console.log(q)
//     }
// }

// let product=5;
// let r=1;
// while(r<=10){
//     console.log(product + "x" + r + "="+(product*r))
//     r++;
// }


// let w=10;

// while(w>=1){
//     console.log(w)
//     w--;
// }
// console.log("Hello world")

// for(let c = 1; c <= 5; c++){
//   let stars = "";

//   for(let v = 1; v <= c; v++){
//     stars = stars + "*";
//   }

//   console.log(stars);
// }
// let f=[23,34,56]
// for (const element of f) {
//     console.log(f)
// }

// Functions::



// function without parameters
function greet(){
  console.log("Hello Tooba")
}
greet();


// function with parameter
function add(a,b){
  console.log(a+b)
}
add(3,4)

// Return Function

function sum(x,z){
   return x+z
}
let addd=sum(56,72)
let double=sum*2;

 console.log(addd)
console.log(double)


// Arrow Function::

let salam=()=>{
  console.log("sanga ye")
}
salam();


let jama=(a,b)=>{
  console.log(a+b)
}
jama(89,99)


function mean(a,b,c,d,e){
  console.log((a+b+c+d+e)/5)
}
mean(1,2,3,4,5)


function check(num){
  if(num%2==0){
    console.log("Number is even")
  }
  else{
    console.log("Number is odd")
  }
}
check(15)

function table(no){
  for(let i=1;i<=10; i++){
    console.log(no,"x", i,"=",(no*i))
  }
}
table(99)

// Strings::


// console.log(text.length)
// console.log(text.toUpperCase())
// console.log(text.toLowerCase())
// console.log(text.substring(1,4))
// console.log(text.replace('Tooba','Aiman'))
// console.log(text.indexOf("T"))
// console.log(text.charAt(5))
// console.log(text.includes("B"))
// console.log(text.charCodeAt(0))


// Template literals::
let naam=`Tooba`
console.log(naam)

let num="Tooba";
let age=22;

console.log(`My Name is ${num} and i am ${age} years old`)

let info=`Adam D\ Angelo`;
console.log(info)

console.log("har\" " .length)
console.log("Hello world ")


// Arrays::

let a=["Fruits","Banana",2,5]
console.log(a.length)
console.log(a[1])
a[2]="Bariya"
console.log(typeof(a))
console.log(a.toString())
console.log(a.join("-"))
// push add new value at the end of an array
console.log(a.push(9))
console.log(a)

// pop delete value from the end of an array
console.log(a.pop(9))
console.log(a)

let arr=["a","b","c"]
arr.splice(1,1,"X")
console.log(arr)
arr.slice(2)
console.log(arr)
arr.reverse()
console.log(arr)


let t=[1,2,3,4,5]
// for(let i=0; i < t.length;i++){
//   console.log(t[i])
// }

// for (let value of t) {
//   console.log(value)
  
// }

// for (let index in t){
//   console.log(index)
// }
  // t.forEach((value)=>{
  //   console.log(value)
  // })
   let numbers=[1,2,3,4,5]
   let doubled=numbers.map(function(num){
    return num*2
   })
   console.log(doubled)

   let s=[1,2,3,4,5]
   let even=s.filter(function(num){
    return num%2==0;
   })
   console.log(even)

  //  let k=[1,8,7,11]
  //  let plus=numbers.reduce(plus)
  //  console.log(k)

  let str="coco"
  let array=Array.from(str)
  console.log(array)

  








