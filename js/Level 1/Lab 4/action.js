// objects
/*
var dimord = {}; //empty variable object type

//console.log(typeof anun); // type object
//object can have properties
 
 dimord.anun ="Petros"; 
 dimord.azganun ="Petrosyan";
 dimord.tariq=18;;
 console.log(dimord);

//  console.log(dimord.anun);
//  console.log(dimord.azganun);
//  console.log(dimord.tariq);
*/ 


 //no ordered variable
 //  key ->value system
 //key->"Azganun" value->"Petrosyan"
 
 //create not empty object
 /*
 var user= {name:"Karen", age: 33, position: "admin"};
 // 1 var with 3 values or 3 var with 1 value
 console.log(user.name);
 user.pashton="Administrator";
 console.log(user);
*/

//benifits of object properties
//if key consist two word it must be beetwin ""
//we can create properties with reserve words
//REMEMBER all keys are STRING

//var abc ={"user name":"Armen", var:15, 25:"tariq", 15: "hasce"};
/*
console.log(abc);

console.log(abc.user name); // ???
console.log(abc.var);// ???
console.log(abc.25);
*/

//accessing property value

//console.log(abc);
//console.log(abc["user name"]);
//console.log(abc.var);
//console.log(abc["var"]);
//console.log(abc["25"]);
//console.log(abc[25]);
//console.log(abc[15]);


//console.log(abc[11+14]);
//console.log(abc[3+12]);


// are there that property

/*
console.log("15" in abc);
console.log("35" in abc);
console.log("user name" in abc);
*/


//write in console


// create var x
 /*   var x= 15;
// we have operateor delete for delete object x;
    console.log(delete x);
    console.log(x);
//now we create object with property x
*/

/*
    var user = {name: "Armen", x:25};
//now delete property x
    console.log(delete user.x);
    console.log(user);
*/


//call all properties
// it's run only if our keys are ordered only NUMBER
   
   /*
    var user = {
    1:"a",
    2:"b",
    3:"c",
    4:"d",
    }
    for (var i = 1; i in user; i++){
        console.log(i+ ": " + user[i]);
    }
    */


// if our keys are  not number, 
// help us loop for in

/*
var user = {
"x":"d",
"y":"e",
"z":"f",
"v":"e",
}
for (var i in user) {
console.log(i+ ": " + user[i]);
}
*/

// ClassWork
//create two objects and call it's 
//properties with loop
/*
var Armen ={
    azganun: "Asatryan",
    age:25,
    position:"director",

}

var Karen = {
    azganun:"Poghosyan",
    age:33,
    position:"businessman",
}
console.log("Armeni tvyalnern en: ");
for (var i in Armen){
    console.log(Armen[i]);
}
console.log("Kareni tvyalnern en: ");
for (var i in Karen){
    console.log(Karen[i]);
}
*/



/*
//objects calls with LINKS
var user = {
    "surname": "Petrosyan",
    age: 20,
};

//object has two NAMES user and x
var Aram = user; // Aram and user are same
for (var i in Aram) {
    console.log(Aram[i]);
};
*/

/*
//Try previous in Windows explorer
//create var x and y and their sortcuts
var x =1;
var y = x;
var ob1 = {name: "Karen"};
var ob2 = ob1;

 */ 



//object has also methods, 
//methods in JS are property, witch value is function


/*
// 2.
function func(){
    console.log(this.age);//eaplain  nonexistent обйецт 
}
*/
/*
// 1.
var user = {  
"name":"Aram",
"age":25,
"position":"admin",
"method0": function(hello){
    //console.log(hello + " from " + name);//what is this name
   //console.log(hello + " from " + user.name);//we can do this way
    //but if we change user to user1....
    //so the best way use "this"
   console.log(hello + " from " + this.name);  //"this" is the same object
   this.method1();
     },
 "method1": func, //if want to explain  nonexistent обйецт
};
user.method0("privet");

//if we have 2nd object with same func
var user1 = {
    "age": 35,
// 3.
    "method2": func,
}
user1.method2();
*/


/*
//classWork
//create two object with name book1 and book2
//with ananimous function and with method link.....

function showBook(){
    console.log("Your book title is " + this.title + 
    " and the price is "+ this.price);
}
var book1 = {};
book1.title = "Java script";
book1.price = 25+"$";
book1.show = function(){
console.log("My book title is " + this.title 
+ " and that's price is " +this.price)
}

var book2 = {
title:"HTML and CSS,",
price: 30+"$",
show: showBook,
}

book1.show();
book2.show();
*/


/*
function funk(){
    console.log(this.age);
}

// 3.
var age = 100;

// 2.
//???? what output will be when run funk()
funk(); // global object method
var armen = {
    "name": "Armen",
    age:33,
    method: function(word){
        console.log(word+" from " + this.name);
    }
};
armen.method("Hello");

var karen = {
    name:"Karen",
    age:25,
};
// 1.
//karen.x = armen.method;
//karen.x ("Barevner");

// 4.
//funk();//properties of global object
console.log(this);
//for understand in witch context
//call method look at right of property 
//if missed "." that is global object
*/

/*
var o = {
    parameter: 10,
    method: function (){
        // 3. 
       // var self = this;
        function test(){
            console.log(this.parameter);
       // 4. 
       //console.log(self.parameter);  // self is o   
        }
        test();//this call from global object
    }
}
// 2. var parameter = 100;
// 1.
o.method(); // ??? what output,
*/



//function is object !!! so it has 
//properties and methods

//use funk as method of objects

// 1.1
/*
function funk(){
    console.log(this.name);
  }
var armen = {
    "name": "Armen",
    age:33,
     }
var karen = {
    name:"Karen",
    age:25,
};
/*
//1.2
funk.call(armen); //call is method of function 
//-> take functiom funk 
// and call it as method of object "armen";
funk.call(karen); 
*/
// if function have parameters
// 2.1
/*
function funk(a,b){
    //console.log(this.name);
// 3.1.1 inner
//console.log(funk.length);
//4.2 how much param. is calls
//console.log(arguments.length);//object arguments 
//console.log(arguments[3]); //access to specify param
}
*/
// 2.2
//funk.call(armen, 10, 20);
 // 3.1.2 outer
//console.log(funk.length);
// 4.1  define 2 param. call many. How to accses its
//funk.call(armen, 10, 20, 30, 40, 50);
// 10 -> a, 20 -> b, but others ???


