//empty object
/*
var dimord = {};
dimord.name = "petros";
dimord.surname = "petrosyan";
dimord.age = 18;
console.log(dimord);
console.log(dimord.name);
console.log(surname);
*/
/*
var user ={
	name: "Artur",
	age:26,
	position:"admin"
};
user.position = administrator;
console.log(user.name);
console.log(user.position )
*/
/*
var abc = {
	"user name":"armen",
	var:15,
	25:"tariq",
	15:"hasce"
};
console.log(abc);
console.log(abc["user name"]);

console.log("15" in abc);
console.log("25" in abc);
console.log("35" in abc);
*/
/*
var user = {
	1:"a",
	2:"b",
	3:"c",
	4:"d"
}
for (var i = 1; i in user; i++){
	console.log(user[i]);
}
*/
/*
var user = {
	"x": "d",
	"y": "a",
	"z": "c",

}
for (var i in user){
	console.log( i + ": " + user[i]);
} 
*/
/*
var empty = {};
empty.name = "Gurgen";
empty.surname = "Dabaxyan";
empty.age = 25;
console.log(empty);
for (var i in empty){
	console.log(empty[i])
}

var full = {
	name: "VASYA",
	surname: "vasilevich",
	age: 25

}
console.log(full)
for (var i in full){
	console.log(full[i])
}
*/
/*
var {
	surname : "petrosyan",
	age :18,
}
var aram = user;
for(var i in aram){
	console.log(aram[i])
}
*/
/*
function func(){
	console.log(this.age);
}
var user = {
	name : "aram",
	age:25,
	position: "admin",
	method0:function(hello){
		console.log(hello + " from "+ this.name);
		this.method1()
	},
	method1:func,
}
user.method0("privet")
var user1 ={
	age : 35,
	method2: func,
}
user1.method2();
*/
/*
function f(){
	console.log( this.title)
}
var book1 = {
	title: "HTML",
	lenght:"1500page",
	massa: 1.5,
	metod1:f

}
var book2 = {
	title: "CSS",
	lenght:"2000page",
	massa: 2.5,
	metod2:f

}
book1.metod1();
book2.metod2();
*/
/*
var armen = {
	"name":"Armen",
	age:33,
	metod: function(word){
		console.log(word + " from " + this.name)
	}
}
armen.metod("hello");
var karen = {
	name: "Karen",
	age:25
}
karen.x = armen.metod;
karen.x("barevner")
*/
/*
function funk(){
	console.log(this.age)
}
var age = 100;


funk();
console.log(this)
*/
/*
 var o = {
 	parametr:10,
 	metod :function(){
 		var self = this
 		function test(){
 			console.log(self.parametr)
 		}
 		test();
 	}
 }
 o.metod();
 */
 /*
 function func(){
 	console.log(this.name)
 }
 var armen = {
 	name: "Armen",
 	age : 35
 }
 var karen ={
 	name:"Karen",
 	age: 25
 }
 func.call(armen);
 */
 
 func.call(armen,10,30);
 
 var armen = {
 	name: "Armen",
 	age : 35
 }
 var karen ={
 	name:"Karen",
 	age: 25
 }
function func(a,b){
 	console.log(this.name)
 	console.log(arguments.length)
 	console.log(arguments[3]);
 }
console.log(func.length);
func.call(armen,10,20,30,40,50);
