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
const greet =function(name){
  console.log("hello " + name)

}
greet("halim");
greet("hassen")
