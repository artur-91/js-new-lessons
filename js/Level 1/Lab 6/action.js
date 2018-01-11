// NUMBER OBJECTS


//write in console
/*
var x= 1;
//it's property of global object or
function funk(){};

//global object have a some properties
infinity   // 20 / 0
//or
-infinity   // - 35 /0

//it has a also
NaN
// Nan == NaN
var x= "x"*15;
x;
var y = "y"*200;
y;
x==y;
// NaN is some not a number value, witch is can't be as NUMBER

//Global object have a method that tell us
// is NaN the value, 
isNaN(x);
// but
isNaN("Hi");
//?????
//only NaN in equal give true
15 == 15;
//compare with value will be number
//if 
x != x; // is true only in there is NaN
10 != 10 // is false
*/


/*
//remember the Math object
//in array case
var a = [];
a.length;

//but in Math
Math.PI;
Math.pow(2,15);

//it's call static methods of static object

//---->

// class is ????

//our numbers are object NUMBER
//witch have many methods

//in NUMBER object are 2 static properties
//MAX Value and MIN value, witch depends of 
//current OS in PC
Number.MAX_VALUE; //in this PC this is constant
Number.MIN_VALUE;

//there are some methods
var x = 123456.789;
x.toFixed(2); //2 numbers after point

parseInt("25.456") //global method, with give in string and out numb er
// 25

// if 
parseInt("z25.456");
//Nan

parseFloat("23.4567a89");
// 23.4567

//there are some systems of number: Oct, Hex ...
// for example
parseInt("FFABC", 16); //covert string of HEX system to DEC number
1047228;

//for return example
x = 255;
// if i want to recive string:
x + " ";
// but if  i want to recive HEX system string
x.toString(); // "255"
x.toString(16); // ff

// in boolean object there is a one method

var d = true;
d.toString();
*/

/*
// STRING OBJECTS
hello world! //every string is save  it's numbering cells
01234567891011

//in string there is a same property as a array
"hello".length;
// 5;
//we can't change string length
// we can concat strings as a
"hello" + " " + "world";
//strings  similar as array
"hello".concat(" ", "world"); // its not a much useable 

//standart property ...
"hello".toUpperCase;
// or 
"HELLO".toLowerCase;
//offen usefull property is
"hello".charAt(2);//what simbol is in 2 position
// l;

//if we write ????
"hello".charAt(10);
// what output ?????      "  "

//more rare method is
"hello".charCodeAt(4);
//DECimal representation unicode simbol in 1st position
//111

//if we write "hello".charCodeAt(10); ????

//if we want to restore the line we use 
//ststic method 
String.fromCharCode(111);
//or
String.fromCharCode(104, 101, 108, 108, 111 );
*/

/*
//remember that the arrays have method slice
//the stings similar 2 methods

var x = "barev hayutyun";
var y = x.slice(1, 4);
console.log(y);

var y = x.substring(1, 4);
console.log(y);


var y = x.slice(6);
console.log(y);

var y = x.substring(6);
console.log(y);

var y = x.slice();
console.log(y);

var y = x.substring();
console.log(y);

//differences beetwin slice and substring
// 1st
var y = x.slice(6, 1);
console.log(y);

var y = x.substring(6, 1); // is more smart
console.log(y);

// 2nd
//sclie may be used with negative values
// and sunstring impossible

var y = x.slice(-6, -1);
console.log(y);

var y = x.substring(-6, -1);
console.log(y);

//if we want to find sunstring
var z = "Barev hayer, barev hayer, barev"
var y = z.indexOf("ar"); //1
console.log(y);
var y = z.indexOf("mn"); // - 1, 0 is 1st position
console.log(y);
var y = z.indexOf("ar", 8);// 14
console.log(y);
// or we can find last indexOf
var y = z.lastIndexOf("ar");// 27
console.log(y);

var y = z.lastIndexOf("ar", 20 );// 14
console.log(y);
*/

//ClassWork
// we have var x and  y 
//var x = "Hayastani bnutyunuy lavn e"
//var y = "tyun"
//in var x find word tha have sunstring
//tha is value of var y and  appropiate value
//to var z;

/*
var x = "Hayastani bnutyuny lavn e";
var y = "tyun";
var z ;


var pos = x.indexOf(y);
//console.log(pos); // 13
// we optimize the code with
// if (pos ! = -1) {
var start = x.lastIndexOf(" ", pos)+1;//
//console.log(start); 

var end = x.indexOf(" ", pos);//because last position is not includes
//console.log(end); 

z = x.slice(start, end);
console.log(z); 
// }

*/

// replace part of string with another
/*
var x = "Menq sovorum enq HTML";
console.log(x);
var y = x.replace("HTML", "JS");
console.log(y);
*/
//in string make array we can with method split
/*
var x = "Menq sovorum enq HTML";
console.log(x);
var y = x.split(" ");
console.log(y);
var y = x.split(" ", 3);
console.log(y);
*/




//Regular expression
//it is teplates
//regex write as follows
var reg = /rules/;
//we have a template and string 
//our string has to get on this template
//search example in Windows  *.doc

var y = "..." //standart string
//we have a template and string
//how to combine them

/*
//the strings have methods witch works with regex
// 1st of them call search
y.search(reg);
//regex have method test
reg.test(s)//reges testing the string

//how to it works
*/

//example
//are there in string sign @ and return position
"vahagn@gmail.com".search(/@/);
//6

"vahagn@mail.ru".search(/gmail|yandex/);
// -1
// | is or

//test method run 
/ yandex|mail /.test("vahagn@gmail.com");
// but | symbol can be in my string
// so we nust to \ | 

//we can make class of symbols

/*
/[abc]/.test("vahagn@gmail.com")
//its mean, are there in  string 
//simbols a or b or c
*/
/*
//opposite: in string shouldn't be abc
/[^abc]/.test("vahagn@gmail.com")
*/

/*
//range from a to z
/[a-z]/.test("vahagn@gmail.com");

//or
/[a-zA-Z]/.test("vahagn@gmail.com");
//or
/[0-9]/.test("vahagn@gmail.com");
//or
/[a-zA-Z0-9_]/.test("vahagn@gmail.com");
//the same can be write
/\w/.test("vahagn@gmail.com");
// and the opposite
/\W/.test("vahagn@gmail.com");

//for numbers
/[0-9]/.test("vahagn@gmail.com"); //is
/\d/.test("vahagn@gmail.com");
//and opposite with D
/\D/.test("vahagn@gmail.com");
// . is ANY simbol exept \n
/./.test("vahagn@gmail.com");

// for example
///.ru/.test("varuzh@mail.ru") 
//its not correct
//but 
///\.ru/.test("varuzh@mail.ru")
///\.ru/.test("varuzh@mail.com")

/ab{2,4}c/.test("abc"); //what output ???
//its mean that b must be min 2 max 4
/ab{2,4}c/.test("abbbbc");
//min 2 and max unlimited
/ab{2,}c/.test("abbbbc");
//exact
/ab{2}c/.test("abbc");
//must be equal 2

//equivalent of
/ab{0,1}c/.test("abbbbc");//be or not
//or
/ab?c/.test("abbbbc");//false
/ab?c/.test("abc"); //true
/ab?c/.test("ac");//true

//equivalent of
/ab{1,}c/.test("abbc");//is
/ab+c/.test("abbc");

//equvalent of
/ab{0,}c/.test("abbc");//is
/ab*c/.test("abbc");
*/

/*

//ClassWork
//create regex with followin term


14-06-2017
14-6-2017
01-12-2001
2-12-1938
//and use test()



/\d\d?-\d\d?-\d{4}/
/\d{1,2}-\d{1,2}-\d{4}/
/[0-3]?\d-[0-3]?\d-\d{4}/
*/

/*
/\d\d?-\d\d?-\d{4}/.test("14.06-2017");//true
//but
/\d\d?-\d\d?-\d{4}/.test("sdfadf14-06-2017"); //???
//why ???
/^\d\d?-\d\d?-\d{4}$/.test("sdfadf14-06-2017");
// ^ is not opposite
//^ is start and $ end of string
*/


/*
//in regex may be FLAGS
//in jS there are 3 FLAGS
// 1
/b/i.test("aBc");
// i flag is case register IGNOR

// 2
/b/ig.test("aBc");//g-global all enters
// that mean will be understand later
//3
//multiline
/^def/i.test("ABC\nDEF\nXYZ");
//in this case i test are in first linr def
//false
//but
/^def/im.test("ABC\nDEF\nXYZ");//m - multiline
//true

//grouping
//we have regex
var reg = /["'][^'"]*['"]/
//in first searching in string or ' or "
//than in any quantity (its *) anything but not ' and "
// and then we must have or ' or "

//problem is than when we start with
// "........'

//find ' than end '
//find " than end "
// solve
var reg = /(["'])[^'"]*['"]/
//( ) is put link in its content
//links calls ordered sequanse
//you find for example " in 1st put in 3th that link
var reg = /(["'])[^'"]*\1/
// \ number is link
//find  ' end ', find " end "
//that is inside grouping

//if we have a some string, that 
//min 1 number and unlimited
"12BhN"
//we want from this string take 
"BhN-12"

//so we can pu in replace regex 
"12BhN".replace(/^(\d+)([a-z]+)$/i, "$2-$1");

//now flag global
var s = "Armen, Karen\nDavit, Aram\nGevorg, Samvel";
//we want to receive
"Karen Armen\nAram, Davit\nSamvel, Gevorg";
//regex in standart mode run in first enter
s.replace(/([a-z]+), ([a-z]+)/ig, "$2 $1")
//g flag mean no stop in first enter

//
"vahagn@mail.ru".match(/([a-z]+)@([a-z]+)\.([a-z]{2,})/i);

//quation, deleted @ what we  wlii receive

"vahagnmail.ru".match(/([a-z]+)@([a-z]+)\.([a-z]{2,})/i);
//null
*/

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
//if we remember we to buil-in objects
//Math and regex















