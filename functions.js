//invoke a function  - call or run a function
//functions are first class

//function statement

function greet() {
  console.log('Hi this is from function greet');
}
greet();


function logGreet(fn) {
fn();
}
logGreet (greet);


//function expression

var greetMe = function () {
  console.log ('Hi Tony');
}
greetMe();




function product (a, b){
  return a * b;
}
alert (product(3, 3));

 


function test (a, b) {
    alert(a);
  alert(b);
}

test(3, 6);



