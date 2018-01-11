window.onload = function(e){
	var age = document.querySelector('form .age');
	var inputs = document.querySelectorAll('.check');
 	

	document.querySelector('form').onsubmit = function(e){
		var error = false;
		for(var i = 0; i < inputs.length; i++ ){
			if( inputs[i].value ===''){
				inputs[i].classList.add('err');
				error = true;
			}
			if(error){
				e.preventDefault();
			}
			
		}

	}
	for( var i = 0; i < inputs.length; i++){
		inputs[i].oninput = function(){
			this.classList.remove('err');
		}
	}
	for( var i = 0; i < inputs.length; i++){
		inputs[i].onfocus = function(){
			this.classList.add('focus');
		}
	}
	for( var i = 0; i < inputs.length; i++){
		inputs[i].onblur = function(){
			this.classList.remove('focus');
		}
	}
}