// Arrays
// it's predefined ordered object type


// write in console
/*
var user = [];
console.log(user);

// create not empty array;
var user1 = [15, "Armen", true, 25];
console.log(user1);

user1[5] = "Karen"; // ????  what output will be
console.log(user1[5]);
console.log(user1);
*/

/*
//object type : massive has a ONE property : length
console.log(user1.length); // 7;

// we can write it:
user1.length = 100;
console.log(user1);

//cut the massive
user1.length = 3;
console.log(user1);
*/

/*
//for in array
var array1 = ["a", "b", "c"];
array1[5] = "X";
// 1.1
for(var i = 0; i < array1.length; i++)
console.log(i + ": "+ array1[i]);

// 1.2 if  not need undifined element
for (var i in array1) 
console.log(i + ": "+ array1[i]);
*/


//methods of ARRAY'S
/*
var abc = [1, 12, 122];
console.log(abc);
var cba = abc.toString();
console.log(cba);
*/
/*
var cba = abc.join('--');
console.log(cba);
*/
/*
var a = [1, 15];
var b = [2 , 25];

var cba = a.concat(3, b, 35);
console.log(cba);

var bac = [1,5]+[2,25]; //????
console.log(bac);
*/

/*
var c = [1,2,3,4,5,6];
var d = c.slice(2);
console.log(d); //from this position to end


var e = c.slice(2, 5);
console.log(e); // from this posotion to end-1

var e = c.slice(-4, -1 );
console.log(e);


var e = c.slice(3, 1 ); //empty array
console.log(e);

var e = c.slice(4, 15); //same as this to end
console.log(e); 
*/

/*
var d = [1,2,3,4,5,6];

d.reverse(); //change massive
console.log(d);
*/

/*
var d = [15,255,31,40,52,6];
d.sort();
console.log(d);//sort as strings

//if we want to sort as NUMBERS
function mysort(a,b) {return a-b;}
d.sort(mysort);
console.log(d);

//the same as anonymous function
d.sort(function (a,b){return a-b});
console.log(d);
*/


//ClassWork
//write the programm, that output the highest 
//value nof array


/*
var array2 = [2, 25, 250, 14, 1500];
function compare(a,b) {return b-a};
array2.sort(compare);
console.log(array2[0]);
*/


/*
var a = [5, 'abc', 71];
//clear of end of massive and return it 

var v = a.pop();
console.log(v);
console.log(a);
*/

//add elements  to current massive and 
//return new  massive length
/*
var a = [5, 'abc', 71];
console.log(a.length);
var v = a.push(15, 56);
console.log(v);
console.log(a);
*/

// working with start of massive
//select first element of masive
/*
var a = [5, 'abc', 71];
var b = a.shift();
//console.log(a);
console.log(b);
*/

//unshift add elemrnt and return new length
/*
var a = [5, 'abc', 71];
var b = a.unshift(15, "abcd", true);
console.log(b);
*/

//work with middle of massive
//method splice run with 2 or more values
//var a = [5, 'abc', 71, "def", 150];
/*
var b = a.splice(1, 2);
// 2 is conut of elemrnts
console.log(b);
*/
//if we work  with more 2 values
/*
var c = a.splice(1, 0 , 3)
//put value 3 and nothing cut before position 1
console.log(a);
console.log(c);// [] because we nothing to cut

var d = a.splice(1, 2, 3)
console.log(a);
console.log(d);
*/

//object Math. That is container
//in witch is defined many properties

/*
var a =  Math.PI;
console.log(a);

// same power as we was write
console.log(Math.pow(5,4)); // :)))))
*/

//ClassWork

// Write 2 arrays: a and b,
// and write in b Square of a:
// with for  loop


/*
var abc = Math.sqrt(625);
 console.log(abc);
*/

/*
var a = [5, 12];
var b = [];
a[99] = 7;

// 1.1

for(var i in a){
  b.push(Math.pow(a[i],2));
}
 console.log("The square is: "+b);
*/

//method apply of function

//in method apply is run in follow statement
//take the function and call it as the method 
//of object and pass him as a parameter array !!!

/*
func.call(obj, p1, p2, ...pn);

func.apply(obj, [p1, p2, ...pn]);
 */


//example of object Math with method min
/*
console.log(Math.min(5, 45, 1, 15));
console.log(Math.max(14, 15, 65, 2, 65));


var a = [14, 15, 65, 2, 65];
console.log(Math.min.apply(Math, a));
*/

/*
//what is console.log. This is a object that have method log 
//In JS there are 2 type of object
//Built-in object-
//Host object -



console.log(1,2,3,4,5,6);

function print(data){
  console.log(data); //
  
  // take console, and its method log, call apply
  // give him as parameter
   console.log.apply(console, arguments);//argument is object
}
print(1,2,3,4,5,6);
*/


//in project may be NAMES conflicts
//Immediately-Invoked Function Expression, its hide all
//Немедленно вызываемые функции
//это синтаксическая конструкция, позволяющая вызвать 
//функцию сразу же в месте ее определения.

/*
//in JS  () is grouping operator
( function()) {  //interp see the func )
//some code that is local

} ();    //now run it

// Example of Google analytics
*/
 
/*
function funk(){
var a =[];
    for(var i = 0; i < 3; i++)

// 1.
//a.push(function(){console.log(i)} ); // it save LINK to i not a value, замыкание

// 2 .
// (function(j){
//    a.push(function(){console.log(j)} );
//  })(i);


return a;
}
var x = funk();
x[0](); // what output will be ???
x[1]();
x[2]()
*/


 //method EcmaScript 5 methods

/*
//forEach:
var num = [1,2,3,4];
num.forEach(function(v){
    console.log(v*10);
})


//map:

var num = [1,4,45,64];
var res = num.map(function(v){
   return  console.log( v * 10)
     });
*/


















