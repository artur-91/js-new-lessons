/*

var user = [];
console.log(user);
var user1 = [15,"Artak",true,25];
user1[5]= "karen"
console.log(user1);
user1[15]= "karen"
console.log(user1);
console.log(user1.length);
user1.length = 100;
console.log(user1);
//cut the masiv
user1.length = 3;
console.length(user1);
*/
//for in array
/*
var array = ["a","b",'c']
array[6] = "X"
for(var i = 0;i<array.length;i++){
	console.log(i+ ":"+ array[6])
};
*/
// to string
/*
var abc = [1,12,212];
console.log(abc);
var cba = abc.toString();
console.log(cba);
console.log(typeof cba);
*/
//join
/*
var abc = [1,12,212];
console.log(abc);
 var cba  = abc.join("-888-");
 console.log(cba);
 console.log(typeof cba);
 */
 //concat 
 /*
 var a = [1,15];
 var b = [2,25];
 var ab = a.concat(b,15)
 console.log(ab);
 */
 //slice
 /*
 var c = [1,2,3,4,5,6];
 var d = c.slice(2);
 console.log(d);
*/
//slice 2 argument
/*
var c = [1,2,3,4,5,6];
 var e = c.slice(2,5);
console.log(e);
*/
/*
var c = [1,2,3,4,5,6];
 var e = c.slice(-4,-1);
console.log(e);
*/
/*
var c = [1,2,3,4,5,6];
 var e = c.slice(0,15);
console.log(e);
*/
//revers
/*
var d = [1,2,3,4,5,6];
d.reverse();
console.log(d)
*/
//sort
/*
var d = [1,24,3,55,5,47,566,8,9];
d.sort();
console.log(d)
*/
// 
/*
var d = [1,24,3,55,5,47,566,8,9];
function mysort(a,b){
	return a-b
}
d.sort(mysort);
console.log(d);
*/
/*
var a = [5,4,15,257];
function bigElem(a,b){
	return b-a
}
a.sort(bigElem);
console.log(a)
console.log(a[0]);
*/
//pop

//var a = [5,'abc',105];
//var v =a.pop()
//console.log(v);
//var v = a.push(15,50);
//console.log(v)
//shift
/*
var a = [ 5,'abc',105];
var b = a.shift() 
console.log(b)
*/
//unshift
/*
var a= [5,"abc",105];
var b = a.unshift(15,'abcd',true);
console.log(b);
*/
//splice
/*
var a = [5,'abc',15,71];
var b = a.splice(1,4);
console.log(b)
*/
/*
var a = [5,'abc',15,71];
var c = a.splice(1,0,3);
console.log(c);
*/


////-------------------math---------------------
/*
var a = Math.PI;
console.log(a);
console.log(Math.pow(5,2))
*/
/*
var a = [1,25,6,15,21];
var b = [];
for (i=0; i< a.length;i++){
	b.push(Math.sqrt(a[i]));
};
console.log(b);
*/ 
//apply
/*
var a = [ 15,14,12,5,4];
console.log(Math.min.apply(Math,a));
*/


/*
function print(data){
	
	console.log.apply(console,arguments)
};
print(1,2,3,4,5,6);
*/
/*
function func(){
	var a = [];
	for( var i = 0; i < 3; i++)
		//a.push(function(){console(i)});
	(function(j){
		a.push(function(){console.log(j)});
	})(i);
	return a;
}
var x = func();
x[0]();
x[1]();
x[2]();
*/
// forEach
/*
var num = [1,2,3,4];
num.forEach(function(v){
	console.log(v*10);
});
*/
//map
/*
var nam = [1,4,45,64];
var res = nam.map(function(v){
	return console.log(v*10);
});
*/
/*
function  removeClass(obj, cls){
	var classes = obj.className.split(' ');
	for ( var i = 0; i < classes.length; i++){
		if(classes[i] == cls){
			classes.splice(i,1);
			i--;
		}
	}
	obj.className = classes.join(' ');
}
var obj = {
	className: 'open my menu'
}
removeClass(obj, 'menu');
removeClass(obj, 'open');
alert(obj.className);
*/
/*
function filterRangeInPlace(arr, a, b){
	for( var i = 0; i < arr.length; i++){
		if(arr[i] < a || arr[i] >b){
			arr.splice(i--,1);
		}
	}
}
var arr = [24,14,47,25,147,32,4];
filterRangeInPlace(arr, 7,30);
alert(arr)
*/

/*var arr = [5, 2, 1, -10, 8];
var arrSort = arr.sort(function(a,b){
	return b-a;
})
alert(arrSort);
*/
/*
var arr = [14,7,54,789,0,1.15];
var arr1 = arr.slice().sort();
alert(arr1);
alert(arr);
*/
/*
var arr = [1, 75, 4, 5, 14, 36];

function sortRandom(a, b){
	return Math.random() - 0.5;
}
arr.sort(sortRandom);
alert(arr);
*/
var vasya = { name: "Вася", age: 23 };
var masha = { name: "Маша", age: 18 };
var vovochka = { name: "Вовочка", age: 6 };

var people = [vasya, masha, vovochka]
 function camperAge(personA, personB){
 	return personA.age - personB.age;
 }
people.sort(camperAge);
for ( var i = 0; i < people.length; i++ ){
	alert(people[i].name)
}
