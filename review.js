function hello(){
  return "hello!";
}
  for(var i = 0; i < 30; i++){
  console.log(hello(i));
}

function name(joe){
  console.log("hello" + joe);
  
};
name("joe");

//3. write a function that takes in 2 numbers, and log out the total of those numbers
//3b. invoke it


function numbers(a,b){
  return a + b;
}
  console.log(numbers(1,6));

var numbers = function(x,y){
  console.log(x +y);
};

numbers(2,3);

//4a.  write a function that takes in an array of numbers. log out each number


function logAry(ary) {
 for(let i = 0; i < ary.length; i++) {
   console.log(ary[i]);
 }
}
logAry([1,4,5,4,8,9,5,4,3]);
//------------------------------------------//
var num = [1,2,3,4,5,6];

num.forEach(function(elem) {
  console.log(elem);
});


//5a. create an array from 0 to 100
//5b.  loop through the array, if it's divisible by 10, print the number.

var longArray=[];
for (i=0; i<101; i++){
  longArray.push(i);
  if(i%10==0){
    console.log(i);
  }
}
//-------------------------------------------//
var color1 = 'blue';
var color2 = 'red';
var A = ""
A = color1;
color1 = color2;
color2 = A;

console.log('color1 is' + color1);
console.log('color2 is' + color2);

//write a new function that takes in a string as arugment and returns the string reversed.
//You may not use the.reverse() method

function reverse(name) {
  newName=''
  for (var i = name.length -1; i >=0; i--){
    newName += name[i];
  }
  return newName;
}

console.log(reverse('joe'));

//write a function that takes in a number and returns true if the number 
//is prime, false if the number is not. (Prime numbers are only divisible by 
//themselves and 1

function isPrime(number) {
    var prime = true;
    if (number === 1 || number === 0) {
      return false;
    }
    for(var i=2; i<=Math.floor(Math.sqrt(number)); i++){
        if(number % i == 0 && i != number) {
            return false;
        }
    }

    return(true);
}
for (var i = 0; i < 100; i++) {
  console.log(i, isPrime(i));  
}