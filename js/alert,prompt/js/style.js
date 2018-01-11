window.onload = function(e){
	var age = document.querySelector('form .age');
	document.querySelector('form').onsubmit = function(){
		if(age.value < 18){
			alert('անչափահասների մուտը արգելվում է')
		}
	}




}