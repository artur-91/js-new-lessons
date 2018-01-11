window.onload = function(e){
	var inputs = document.querySelectorAll('.check');

	document.querySelector('form ').onsubmit = function(e){
		for( var i = 0; i < inputs.length; i++){

			if(inputs[i].value === ''){
				inputs[i].classList.add('err');
				e.preventDefault();
			}
			else{
				inputs[i].classList.remove('err')
			}
		}
	} 
}