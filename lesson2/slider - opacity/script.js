
window.onload = function(e){

		function slider(images){
		this.images = images;
		var i = 0;
		this.prev = function(){
			this.images[i].classList.remove('showed');
			i--;
			if(i<0){
				i=this.images.length-1
			}
			this.images[i].classList.add('showed');
		}
		this.next = function(){

			this.images[i].classList.remove(.showed);
			i++;
			if(i >= this.images.length){
				i = 0;
			}
			this.images[i].classList.add('showed');
		}
	}
	var btn_prev1 = document.querySelector('.galery1 .buttons .prev');
	var btn_next1 = document.querySelector('.galery1 .buttons .next');
	var  images1 = document.querySelectorAll('.galery1 .photos img')

	var slider1 = new slider(images1);
	btn_prev1.onclick = function (){
		slider1.prev();
	}
	btn_next1.onclick = function (){
		slider1.next();
	}



	var btn_prev2 = document.querySelector('.galery2 .buttons .prev');
	var btn_next2 = document.querySelector('.galery2 .buttons .next');
	var  images2 = document.querySelectorAll('.galery2 .photos img');

	var slider2 = new slider(images2);
	btn_prev2.onclick = function(){
		slider2.prev();
	}
	btn_next2.onclick = function(){
		slider2.next();
	}
	
}