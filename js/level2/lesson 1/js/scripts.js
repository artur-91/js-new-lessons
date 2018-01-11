//window

//navigator
/*
function f(){
	for(var p in navigator){
		console.log(navigator[p])
	}
}
*/
//screen
/*
function f(){
	for(var p in screen){
		console.log(p,':',screen[p])
	}
}
*/
//location

//location.protocol
//location.hostname
//location.port
//location.host
//location.pathname
//location.search
//location.hash
//location.href
//
//document
//title
//document.title = 'hayer'


//bgColor

//document.bgColor = 'red'

//document.write
/*
document.write('<style>html{background:#ffc;}</style>');
document.write('<div>Contnet added from script in head</div>')
function demoWrite(){
	
	document.write('<html>');
	document.write('<h1>Hello</h1>');
	document.write('</html>');


}
*/
//alert
/*
function f(){
	alert('hi everyone');
}
//confirm
function cofirm(){
	var x = confirm("true if we push ok and false if we push atmena")
}
//prompt
/*
function pr(){
	var x = prompt('mutqagreq tiv',0)
}*/

//setTimeout
/*
var timer ;
function demoSetTimeout(){
	timer = window.setTimeout("alert('setTimeout')",6000);
}
*/
/*
var timer;
function demoSetTimeout(){
	function(){
		("alert('SetTimeout')",2000)
	}
}
*/



//clearTimeout
/*
var timer;

function demoClearTimeout(){
	timer = window.clearTimeout(timer)
}
*/
//SetInterval
/*
var interval;
function demoSetInterval(){
	interval = window.setInterval("alert('Artur')",2000);
}


//clearInterval
function demoClearInterval(){
	window.clearInterval(interval);
}

*/

// window open
/*
var w;
function demoOpen(p){


	w =  window.open("");
}

function demoClose(p){
	w.close();
}*/
/*
var w;
 function demoOpen(p){
 	w = window.open("","x",p)
 	w.focus()
 }
 */
 /*
 var w;
 function winOpen(){
 	w = window.open(",",'width = 300,height = 300, top = 300,left = 300');
 	w.focus();
 }
 function demoMoveTo(){
 	w.focus();
 	w.demoMoveTo(100,100);
 
 }
 function demoResizeTo(){
 		w.focus();
 		w.demoResizeTo(200,100);
}
function demoMoveBy(){
 		w.focus();
 		w.moveBy(50,100);
}
function demoResizeBy(){
 		w.focus();
 		w.resizeBy(50,50);
}
*/

var win;
 function winOpen(){
 	var w = 300,h = 200;
 	var left = (screen.availWidth-w)/2;
 	var top = (screen.availHeight-h)/2;
 	var p = "width=" + w+ ,"height=" +h+,"top="+top+,"left="+left;
 	win = window.open(",",p);
 	w.focus();
 }
