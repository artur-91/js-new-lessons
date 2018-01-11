window.onload = function(e){
	var x = prompt('Ձեր տարիքը խնդրում եմ',0)
	if(x > 18){
		alert('շնորհավորում եմ դուք արդեն չափահաս եք');
	}
	else if( x < 18 ){
		alert('բալիկ ջան գնա մեծացի նոր արի')
	}
	else {
		alert('սխալ եք մուտքագրել դաշտը')
	}
}