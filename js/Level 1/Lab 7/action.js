
//in array case, when we create it
// a1 and a2 they both have property length
/*
var a1 = [];
a1.length
var a1 = [];
a1.length

//how can we create users object
//that will  have predfined same properties
var u1 = {name: "Aram"};
varvu1 = {name: "Karen", //some other properties}
*/

/*
// in OOP we do it with class
// in our case we will use function constrictor
//constructors will start with uppercase
//it fundament for a future OBJECTS
//objects have to have properties
//so we expalin it here
function User() {  //that will be use for a creating new OBJECTS
    this.name;
    this.age;
    this.position;
}
//its mean, that we will create object
//that must have all thats properties

//if we create not empty function
function User(name, age) { 
    this.name = name;
    this.age = age;
    this.admin = false ;
}

//how we will use it
var u1 = new User ("Aram", 25);
//thats mean create new object u1
//and pass him 2 properties
u1.admin = true;

//naw create 2nd object
var u2 = new User("Karen", 35);

//if  i have object, but i forgot
//what constructor is run
// i can run 
u1.constructor;
*/
/*
//how to covert string to number
Number("123");
//wy it calls with uppercase
//its constructor for a create object NUMBER

var n1 = 10;
typeof n1; //number
n1; //10

var n2 = new Number(10);
typeof n2; // ?????
n2; //????
//how to puul out from 10
n2.valueOf();//10

//number, string and boolean 
//with creating literal are not object

//but from where it has a property length;
var s = "hello";
s.length;// its a not object ???
//when we create s, it's  primitive typeof
//but whn we wrtite s.length interpretator do th following
s.length // var tmp = new String(s)
        // tnp.length
        //delete tmp

//if s object it must be have property, so we can do
s.x = 10;
s.x //undefined

s.x  = 10 // var tmp = new String(s);
          // tmp.x = 10;
           //delete tmp

s.x // var tmp = new String(s);
          // tmp.x
           //delete tmp

//so numbers, string and boolean are primitive

//type object
//if we create 2 objects with literals and 
//constructor

var o1 = {};

var o2 = new Object();
//there are no differences
// literal is more shortly, so we use it

//array object type

//lieral [] or new Array

var a1 = [1,2,3]
and 
var a2 = new Array(1,2,3); //are same
//but there is a one nuance
//which will force us to use constructor

//if we create array with constructro
//with one parameter, it create array with length 5
new Array(5); //[undifined x 5]

//regular expression
//if we remember we two buil-in objects
//Math and regex
//Math is static object, and we write it with a one way
//RegExp we can wrtie with literal /... / and constr.
var reg = new RegExp('[a-z]+','i') //i.e. simbols and flags
//threr are moments that we must use constr.
/gmail|yandex|yahoo/.test("email");
//i.e testing,are there in  string one o three 
//but imaging that list of admissible email 
//strored in array

var accept = ["gmail", "yandex", "yahoo"];

//how to it push to .test(): no way
//because between /.../ ist string , its RegExp
//so
function RegExp(simbol, flags){
this.simbols = '[a-z]+';
this.flags = 'i';
}
var accept = ["gmail", "yandex", "yahoo"];
var reg = new RegExp(accept.join('|', 'i'));
*/


//if you remember we have User constructor
/*
function User(name, age) { 
    this.name = name;
    this.age = age;
    this.admin = false ;
}
var u1 = new User("Armen", 35);
u1.admin = true;
console.log(u1); //User {name: "Armen", age: 35, admin: false}
*/

//lets make follow
//u1.toString();
// ??? from where in my object method toString

//here is the following situation
//in JS in difference with other OOP language
//use not inherit, and PROTOTYPE
//i.e in fundament of all objects is OBJECT
//i.e. when we wrtie something with ()
//it undertakes from constructor Object

//every object have a special property
//that calls Prototype.
//why it to need we.....

//we want to add in my u1 property x
//we cab add it in User constructor

/*
User.prototype.x = 15;
console.log(u1.x);
//give a prototype of User property x
var u2 = new User("Karen", 26);
u2;//have x property also
console.log(u2.x);
//i want to in u1 chane propery x
u1.x = 65; //u1 property 65 already
console.log(u1);
//and u2 have property x = 15 yet

delete u1.x;
console.log(u1);
console.log(u2);
console.log(u1.x);
console.log(u2.x);
*/


/*

function User(name, age) { 
    this.name = name;
    this.age = age;
    this.admin = false ;
    this.say = function(x){
console.log(this.name,":", x);
//1.  in running program
    };
    
}
*/
// 2. methods usefull when they adds with prototype
/*User.prototype.say = function(x){
console.log(this.name,":", x);
    };*/
/*
var u3 = new User("Garik", 59);
console.log(u3);
console.log(u3.say);
//redefining say
u3.say=10;
console.log(u3); //how to return say in 1. case
// in 2nd case 
delete u3.say;
console.log(u3.say);
*/

/*
//for examlpe we have a function
//TASK ?
// i want in this function то to give
//unlimited number of parameters, so that
//it will return array
function funk() {
return Array.prototype.slice.call(arguments);
//we have Array function-constructor
//that have prototype, in teah prototype
//there are sclice, take that slice and call it as 
//method of object arguments without parameters
//remember: slice without parameters return all array
}
funk(1,2,3,4,5,6);
//all methods of array explain in prototype !!!!
*/

/*
///example
//imaging tha i have some number
n= 10; //10
n.pow();//???? //in ANY number not have method pow
Number.prototype.pow = function (x) {
    return Math.pow(this.valueOf() , x);
}  
//look at the consol
n = 2;
n.pow(4)//16 
//in the hint of number appear n.pow. we create it just
*/







/*
//there are starndart feature, that maust be always use
//i have  User function-constructor 
//that inherit from Object

function User(name, age) { 
    this.name = name;
    this.age = age;
    this.admin = false ;
};
//and someone spoil Object
Object.prototype.x =10;
var u = new User("Karen", 25);
 
//if i want to screen my u with loop
for (var i in u) {
    // 2.  always will use !!! output  only parameters of constructor
 //   if (u.hasOwnProperty(i))
    console.log(i, ":", u[i]);
}
// 1.
// Karen
//25
//false
//10

*/
/*
typeof {};
//object
typeof [];
//object
[] instanceof Array;
//true
[] instanceof Object;
//true
var o = {};
o instanceof Object; //true
o instanceof Array; //false
*/




//ClassWork
//create function-construtor Book with 3 properties
//title
//pub Year
//price


//Creating object Book pass to constructor
//any values
//add Prototype to constructor Book method show, that
//console.log values own title and price
//call method show






/*

function Book(title, year, price) { 
    this.title = title;
    this.year = year;
    this.price = price ;
      }


Book.prototype.show = function(x){
console.log(this.title, this.year, this.price, ":", x);
    };

var book1 = new Book(2017, "HTML" , '50$');
book1.show();
*/



/*
//Date Object
//it hasn't literal
//it creats with
var d = new Date();
d; //return current date and time

// we can also recieve information about some date

var da = new Date(1234567890000);
d;

//we can pass to Date ORDERED year month

var d = new Date (2014, 11)//obligatory is two first
//why retuern December, because in JS January is 0
//if we not give a parameters JS push for their minimal values
// Mon Dec 01 2014 00:00:00

var d = new Date (2014, 11, 32)
//JS is calcule  large numbers independent
// Thu Jan 01 2015

//methods for Date()
var d = new Date ();
d;
d.getDate();
d.getMonth();
d.getDay()//Sonday is 0
d.getTime();//return amount of miliseconds from 01.01.1970
//to time saved in Date object
//or 
d.valueOf();
d.toString();//"Thu Jun 22 2017 13:28:02 GMT+0400 (Caucasus Standard Time)"
//from here we can make date or time or any
d.toDateString();
d.toTimeString();


//we can not only write this object, but
//also can reconstruct it
var d = new Date();
d.setDate(30);


var d = new Date(2017, 6, 23);
d.setDate(d.getDate() + 2);

console.log( d ); // 25 july, 2017




var d = new Date();
d.setSeconds(d.getSeconds() + 70);

console.log( d ); 


var d = new Date();

d.setDate(1); // first date of month
console.log( d );

d.setDate(0); // last date of last month
console.log( d );


var d = new Date;

d.setDate(-1); // penultimate date of last month
console.log( d );

*/

/*
//ClassWork
//define function getDate(), witch
//recieve as a argument date and time as a string
// as a RegExp;
//check if the date is a normal 
//return Date 


function getDate(str){
var f = str.match(/(\d\d?)-(\d\d?)-(\d{4})/);
if(f)
return new Date(f[3], f[2]-1, f[1]);//in 2nd place month
}
var d  = getDate("23-06-2017");
console.log(d.toString());
*/


//up to this point we didn't  spying errors
//for errors we have a block
try {
// 1.
var x  = 1; //some code....
//3.
//var x = 1, y = 0;
console.log(x*15);// 1. x*15 . 2. x/y we must recieve error
//if we have here erroe code jump from here to cathe and so on
// 3.
/*
if(y==0)
throw new Error("No deviding to 0");
console.log(x/y);
*/
} catch(e){ //we defined var e 
// here code asign error object to e
//console.log(e.name, e.message); //may  be not script erreors, and human
}
console.log("The end");

/*
//we can also do
var err0 = new Error("No dividing in 0");
var err1 = new Error("No dividing in 1");
var err2 = new Error("No dividing in 2");
try {
var x = 1, y = 0;
if(y==0)
throw err0;
if (y==1)
throw err1;
if (y==2)
throw err2;
} catch(e){ 
console.log(e.name, e.message); 
}
console.log("The end");
*/

/*
//return to our function
function getDate(str){
var f = str.match(/^(\d\d?)-(\d\d?)-(\d{4})$/);
if(!f)
throw new Error("No valid date")
return new Date(f[3], f[2]-1, f[1]);//in 2nd place month
}
try {
var d  = getDate("23-06-2017");
console.log(d.toString());
} catch (e){
    console.log(e.message)
}
*/

//copy to Windows interpretator
////WScript.Echo



 










