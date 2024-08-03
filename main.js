let a =  10;
let b = 5;
console.log(a+b);
console.log(a/b);
console.log(a*b);
console.log(a%b);
//post-increment
console.log(a++);
console.log(a);
//pre-increment
console.log(++a)
//pre-decrement
console.log(--b);
//post increment
console.log(b--);
console.log(b);


let x = 7;
let y = 3;
console.log(x+y);
console.log(x-y);
console.log(x*y);
console.log(x/y);
console.log(++x);
console.log(--y)
console.log(x%y)

// comparison operators

// equal to
let w = 10;
let z = "10";

 console.log(w == z);

// // not equal to
 console.log(w != z);

// // strictly equal to
 console.log(w === z);

// // strictly not equal
 console.log(w !== z);

// greater than 
console.log(w > z);

// less than
console.log(w < z);

// greater than or equal
console.log(w >= z);

// less than or equalclear
console.log( w <= z);


let c = 15;
let d = "15";
console.log(c == d);
console.log(c != d);
console.log(c === d);
console.log(c !== d);
console.log(c > d);
console.log(c < d);
console.log(c >= d);
console.log(c <= d);

//logical operators
// and &&
let  isAdelt = true;
let  hasPermision =false;
console.log(isAdelt && hasPermision);

// or || 
console.log(isAdelt || hasPermision);
// not !
console.log(!isAdelt);
console.log(hasPermision);

// logical operators
let isSunny = true;
let isWeekend = true;
console.log(isSunny && isWeekend);
//strings operators
 let firstName = "fuad"
 let lastName = "sulub"
 console.log(firstName + " " + lastName);

 let  greeting = "hello ";
greeting += firstName;
greeting += " " + lastName;
 greeting += " good morning";
 console.log(greeting)
 
//function is a block of code designed to perform a specific task,

function greet(){
  console.log("hello world");
}

greet();

// parameters and Arguments

 function greet(name){
console.log("hello " + name)
}
greet("fuad");
greet('casha');
greet("guled");


//function declaration
function calculateTotal(price,quantity){
  console.log("Total price: $" + price * quantity);
}
calculateTotal(20,2);
calculateTotal(5,4);
calculateTotal(15,2);
calculateTotal(10,2)

//return
function add(a,b){
return a+b;
}
let result = add(20,40);
console.log(result);

//function expression
const bariido =function(name){
  console.log("hello " + name)

}
bariido("halim");
bariido("hassen")


 // Arrow funcion 
let ads = (s,o)=> s+o;
console.log(ads(6,4));
console.log(ads(-15,5));
console.log(ads(40,40));


//Arrow function
const addition = (i,j)=>{
  return i+j;
};
console.log(addition(8,10));
console.log(addition(10,20));
console.log(addition(-50,20));
console.log(addition(50,20));


//arrow function my idea
const additions = (f,d)=> {
console.log( f+d)
};
additions(3,5);
additions(-40,20);
additions(100,-50);
additions(60,10);

let salaam =(name)=>{
  console.log("hello " + name)
};
salaam("mouse");
salaam("omer");

// scope(ES6) function

// global variable
let globalVariable = "i'm global variable";
function showVariable(){
  console.log(globalVariable);
}
showVariable();
console.log(globalVariable);

//local variable 
function showLocalVariable(){
  let localVariable = "i'm local variable";
  console.log(localVariable);
}
// console.log(localVariable);
showLocalVariable()
// block scope
{
  let myName = "fuad"
  const age = 39;
  var year = 2030;
  console.log(age);
  console.log(myName);
  console.log(year)
  // var is works outside and inside block
}
// Arrays and objects
let names = ['fuad', 'hassan', 'hussein', 'nour'];
console.log(names);




// Array methods 
let colors = ['black', 'red', 'white','green'];
console.log(colors);

console.log("after push")
colors.push("blue");
console.log(colors);

console.log("after pop")
colors.pop();
console.log(colors);

console.log("after unshift")
colors.unshift("gray");
console.log(colors);

console.log("after shift");
colors.shift(colors);
console.log(colors);
//length
console.log(colors.length);

// practice 7
let color =["white","green","red"];
console.log(color);

console.log("after push")
color.push("blue");
console.log(color);
console.log("after shift");
color.shift("white");
console.log(color);

//objects

let person = {
  name : "fuad",
  age : 30,
  city : "yoale",
}
console.log("two console known as off")
console.log(person.name);
console.log(person.city)
console.log(person.age)
console.log(person["name"])
console.log(person["city"])
console.log(person["age"])

let car = {
  make: "jeep group",
  model: "jeep1",
  year: 1941,
}
console.log(car.make);
console.log(car.model);
console.log(car.year);