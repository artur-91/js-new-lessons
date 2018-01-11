
window.onload = function(e){


	function slider(images){
		var slider = this
		slider.images = images;
		var i = 0;
		slider.prev = function(){
			slider.images[i].classList.remove('.showed');
			i--;
			if(i<0){
				i = slider.images.length-1
			}
			slider.images[i].classList.add('.showed');
		}
		slider.next = function(){

			slider.images[i].classList.remove('.showed');
			i++;
			if(i >= slider.images.length){
				i = 0;
			}
			slider.images[i].classList.add('.showed');
		}
	

	var slider1 = new slider({
		images1: '.galery1 .photos img',
		btn_prev1: '.galery1 .buttons .prev',
		btn_next1: '.galery1 .buttons .next'

	});
	document.querySelector(slider.btn_prev1).onclick = slider1.prev();
	document.querySelector(slider.btn_next1).onclick = slider1.next();


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
	
}