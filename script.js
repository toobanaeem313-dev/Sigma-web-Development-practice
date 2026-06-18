console.log("Hello world")

var a=5;
var b=6;
var c="Tooba";

// var 55a="Tooba"; Not Allowed

// console.log(a+b+44)
console.log(typeof a,typeof b,typeof c)

// const a1=6;
// a1=a1+1; Not Allowed because of constant
{
    let a=66;
    console.log(a)
}

// primitive Datatypes::

let x="Tooba";
let y=22;
let z=4.55;
const p=true;
let q=undefined;
let r=null;

console.log(x,y,z,p,q,r);
console.log(typeof x,typeof y,typeof z,typeof p,typeof q,typeof r);


 let o={
     "name": "Tooba",
     "job code":5600,
     "course":"BS IT"
 }
 console.log(o)
 o.salary="100crores"
 console.log(o)

let student={
    "name":"Ali",
    "phonenumber": 345322,
    "course":"BS IT",
    "marks": 540

};
console.log(student)
student.salary="100crores"
console.log(student)
console.log(student.name)


let name="Ahmad"
name=name+1;
console.log(name)

console.log(typeof name)

 const country ="pakistan"
 console.log(country)



//  conditional statements::


// if statement::
let age=20;
if(age>=18){
    console.log("you can vote")
}

// if else::


let marks=40;
if(marks>=50){
    console.log("you are pass")
}
else {
    console.log("fail")
}

// if else if::

let score=85;

if(score>=90){
    console.log("Grade A")
}
else if(score>=70){
    console.log("Grade B")
}
else{
    console.log("Fail")
}

// switch statement::

let day=3;

switch(day){
    case 1:
        console.log("Monday")
        break;

        case 2:
            console.log("Tuesday")
            break;

            case 3:
                console.log("wednesday")
                break;

                default:
                    console.log("Invalid day")


}


// Ternary operator::

let omer=20;

let result=(age>=18)? "you can vote":"not allowed";
console.log(result)


// practice question::

let kal=15;

if(kal>=10 && kal<=20){
    console.log("Age lies between 10 and 20")
}
else{
    console.log("Age does not lies between 10 and 20")
}


// Question 2::

let number=40;
if(number % 2 == 0){
     console.log("number is divisible by 2")
}
else{
    console.log("number is not divisible by 2")
}

// Question 3::

let i=15;
let jawab=(i>=18)? "you can drive":"you can not drive";
console.log(jawab)




// Ek number num lo.
// Check karo:

// agar number positive ho

// negative ho

// ya zero

let num=9;
if(num>0){
    console.log("Number is positive")
}
else if(num==0){
    console.log("Number is zero")
}
else{
    console.log("Number is negative")
}


// Q5.
// Do numbers a aur b lo.
// Print karo:

// "Both are equal"

// "a is greater" 

// "b is greater"

let s=100;
let t=10;
if(s>t){
    console.log("s is greater then t")
}
else if(t>s){
    console.log("t is greater then s")
}
else{
    console.log("both are equal")
}
// another question
let k=24;
if(k%2==0){
    console.log("Number is even")
}
else{
    console.log("Number is odd")
}

// Ternary operator::

let l=33;

let res=(l%2==0)?"Number is even":"Number is odd"
console.log(res)

// Another question

let year=20;

let n=(year>18)?"Eligible":"not eligible"
console.log(n)



// Loops 

// for loop::

let Name="My name is Nova"

for(let i=1;i<=5;i++){
    console.log(Name)
}

// while loop::

let Message ="My name is coco"

let j=1;
while ( j<=5) {
    console.log(Message)
    j++;
    
}

// Do while::

let pegham="My Name is Alpha"

let e=1;
do{
    console.log(pegham   );
    e++;
}
while(e<=5);






































