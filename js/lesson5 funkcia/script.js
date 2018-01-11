/*

function hello(){
	console.log('barevner');
}
hello();
hello();
*/
/*
function hello(age){
	age = age || 0;
	console.log("i am a " +age+ " years old");
}
hello(13);
hello(4);
hello();
*/
/*
function hello(name,age){
	age = age || 0 ;
	name = name || 'vagho';
	console.log("my name is"+" " +name+"and I am " +age+ "years old")
}
*/


/*
var age1 = 45;
hello("Karen",45);
*/
/*
hello("karen");
var name1 = "arsen"
hello("",15);
*/
/*
function hello(name,age,from) {
	name = name || 'Mistr x'
	age = age || 18;
	from = from || 'yerevan'
	console.log(name+ " " + age +" "+ from)
}
hello('Artur',26,"");
hello();
*/
/*
function sum(x,y,z){
	return x*y*z/3
}
var  res = sum(7,4,2)
console.log(res)
*/
/*
function abs(num){
	/*if(num < 0){
		return -num;
	}
	return num;
	return(num < 0 )?-num:num;
}
console.log(abs(-5));
console.log(abs(5));
*/
//x^y
/*
function exp(base,exp){
	var res = 1;
	for(var i = 0;i <exp;i++){
		res = res*base
	}
	return(res)
}
console.log(exp(5,4));
*/
//local popoxakannner
/*
function count(){
	for(i = 0;i < 10;i++){
		var j = i * 10;
	}
	console.log(i);
	console.log(j)
}
count();
*/
//global popoxakanner
/*
var user = 'karen';

function sms(){
	var name = 'My name is ' + user;
	console.log(name);
}
sms()
user = 'Armen';
sms();
*/
/*
var x= 5, y = 7;
function sum(x,y){
	x= 4;
	y = 2;
	res = (x+y)/2
	console.log(res)

}
sum();
*/
/*
var x = 'X', y = 'Y';
function tiruyt(){
	var x = "x";
	console.log('x: '+x);
	console.log('y: '+y)
}
tiruyt()
console.log('x: ' + x);
console.log('y: ' +y);
*/
//visibality
/*
var y = 0;
function aaa(x){
	if(x){
		y = 1
	console.log(y)
	}else{
		y = 2;
		console.log(y);
	}

}
aaa(true)
*/
/*
var x = "X"
var y = "Y"
 function tiruyt(){
 	var x = "x";
 	console.log("x: " +x );
 	console.log("y: " +y);
 	y = "yx"
 
 function nerqin(z){
 	var y = "_y";
 	console.log("x: " +x);
 	console.log("y: " +y);
 	console.log("z: " +z)


 }
 nerqin("z")
}
tiruyt();
console.log("x: "+x);
console.log("y:"+y)
*/
/*
function outer(){
		function inner(x){
			console.log(x);
		}
		return inner;
}
var x= outer();
x('hay');
*/
/*
function hello(hi){
	return function(name){
		return hi +" "+ name
	};

}
var h = hello("hello");
console.log(h("anahit"));
console.log(h('karen'));
var n = hello( "barev");
console.log(n("Armen"));
console.log(n("Anna"));

*/
// zamekania
/*
var x = 10 //global
	function artaqin(){
		var x = 25;
		function nerqin(){
			console.log(x)
		}
		return nerqin;

	}
var funk = nerqin();
funk();
*/
/*
function func(base, count){
	for (var i = base; i<=caunt;i++)
		console.log(i);
}
func(3,10)
*/
/*
function func(x){
	return function (y)
	function (y){
		if(x > y)
		console.log(true);

		else
		console.log(folse);
}

}
z = func(15);
console.log(z(2))
*/
/*
function pow(base,exp){
	if(exp!=0){
		return base = base*pow(base,exp-1);

	}
	else {
		return 1;
	}
}
console.log(pow())

*/
function fact(n){
	if( n>1) return n = n*fact(n-1);

	else console.log(false);
	}
console.log(fact(4));