// ինչպես ենք սահմանւմ ֆունկցիան
/*
function hello() {
    ֆունկցիայի մարմին, այստեղ նկարագրվում է
    ողջ կոդը
}
hello()

*/
// my first function without argmunets
/*
function hello() {
    console.log("Barevner");
}
hello();// կանչել մի քանի անգամ 
*/
//function with parameter
/*
function hello(age) {
   // age = age || 0;
        console.log("I am a "+age+" years old");
}
hello(33);
var age1 = 45;
hello(45);
hello(); // argument missed
*/

// reverse function declaration

// function with many parameters
/*
function hello(name, age) {
    age = age || 0;
    name = name || "Vagho";
        console.log("My name is "+name
        + " and I am a "+age+" years old");
}
hello("Vahagn", 33);
var age1 = 45;
hello("Armen", 45);
hello("Karen");
var name1 = "Arsen";
hello("",15);
hello(); //  arguments missed
hello(name1,15);
*/

//return
/*
function sum(a1,a2){
    return a1+a2;
    //return exit from function
}
//1st variant

var res = sum(5,3);
console.log(res);

//2nd variant
console.log(sum(5, 15));
*/

// 2 returns
/*
function abs (num) {
    if(num < 0 )
    return -num;
    return  num;
// return (num < 0) ? -num: num;
}
console.log(abs(-5));
console.log(18);
*/
// power 2^10
/*
function power(base, exp){
var result = 1;
for (var count = 0; count < exp; count++)
   result = result*base // result *= base;
     return result;  
}
console.log(power(2,10));
console.log(power(3,9));
console.log(power(15,5));
*/

// local variables
/*
function sms() {
  var message = 'Hi, i am a Arm' // local variables

 console.log( message );
}

sms(); // ''Hi, i am a Arm'

console.log( message ); // <-- error

*/
// local in for
/*
function count() {
  for (var i = 0; i < 10; i++) {
    var j = i * 10;
  }

  console.log(i); // i=10, 
  console.log(j); // j=90, 
}
count();
*/


// global variables
/*
var user = 'Karen';

function sms() {
    // user = "Petros";
  var name = 'My name is ' + user;
  console.log(name);
}
sms(); // My name is Karen;
 //user = "Armen";
 // sms();
*/


//visibility area
/*
var x="X";
var y="Y";

function tiruyt (){
var x = "x";
console.log("x: "+x); // out x
console.log("y: "+y); //out Y
// y = "y";


}
tiruyt();
console.log("x: "+x); //out X
console.log("y: "+y); // out Y
*/

// visibility
/*
var y = 0;
function aaa(x) {
  if(x) {
       y = 1; // ??? out
        console.log(y); // ??? 1
    } else {
     y = 2;
    console.log(y);
    }
}
aaa(true);
*/
// typeof function aaa() {}

// 2 local areas
/*
var x="X";
 var y="Y";
 function tiruyt (){
var x = "x";
console.log("x: "+x); // out x
console.log("y: "+y); //out Y
  y = "yx";
function nerqin(z){
     //var y = "_y";
    console.log("x :"+x); // x
   console.log("y :"+y); // _y
    console.log("z :"+z); // z
}
nerqin("z")
}
tiruyt();
console.log("x: "+x); //out X
console.log("y: "+y); // out Y
*/

// () manes run function;
/*
function aaa() {
    console.log("Barev");
}
var x = aaa; // differences aaa()
x();
*/

//return or ...
/*
function outer() {
    
    function inner(x) {console.log(x);} // return function (x)
    
    return inner; // differeces return inner()
}
var x = outer();
x("Hay");
*/





// local parameter
/*
function hello (hi) {
    
    return function(name){
        return hi +" "+ name;
    };
}
var h = hello();
console.log(h("Aram"));
console.log(h("Karen"));

var n = hello();
console.log(n("Anahit"));
console.log(n("Anna"));
*/
/*
//замыкание
var x= 10; //global
    function artaqin(){
var x = 25; // local
    function nerqin(){
        console.log(x);
}
return nerqin;
}
var nerqin = artaqin();
nerqin();
*/

//передаем function
// фикируем действие
/*
function foo(base, count){ //action
for(var i=base; i<=count; i++)
console.log(i); 
// action(i);

}
foo(1, 10); //3th parameter console.log

*/

//function compare
/*
function compare(x){
    return function(y){
if(y>x) return true; 
if(y<x) return false;
return 0;
// if(y==x) return null; return y>x;
    }
}
var c= compare(10);
console.log(c(9));
console.log(c(10));
console.log(c(20));
console.log(c(30));

 //console.log(compare(10)(12));

*/
// рекурсия вызывает сама себя
// ресурсоемкий код
/*
function power(base, exp){
    if(exp != 0) {return base=base*power(base,exp-1);}
    return 1;
    }
console.log( power(3, 4) );

*/

// factorial
/*
function fact(x) {
    if (x <= 1) return 1;
    return x*fact(x-1);
}
var y = fact;
console.log(y(6));
*/