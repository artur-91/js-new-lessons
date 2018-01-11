window.onload = function(e){
	var inp1 = document.querySelector("input[name = num1]");
	var inp2 = document.querySelector("input[name = num2]");
	var plus = document.querySelector("input[name = plus]");
	var minus = document.querySelector("input[name = minus]");
	var mult = document.querySelector("input[name = mult]");
	var div = document.querySelector("input[name = div]");
	var span = document.querySelector(".res");
	plus.onclick = function(){
		calcOp('+');
	}
	minus.onclick = function(){
		calcOp('-')
		}
	div.onclick = function(){
		calcOp('/')
	}
	mult.onclick = function(){
		calcOp('*')
	}
	function calcOp(op){
		var a = parseInt(inp1.value);
		var b = parseInt(inp2.value);
		var res 
		if(op ==='+'){
			res = a + b;
		}
		else if(op ==='-'){
			res = a-b;
		}
		else if(op === "/"){
			if(b == 0 ){
				res = "Unacceptable action"
			}
			else{
				res = a/b;
			}
		}
		else if(op ==="*"){
			res = a * b;
		}
		else{
			res = 'Not found operator'
		}
		span.innerHTML = res;
	}
}