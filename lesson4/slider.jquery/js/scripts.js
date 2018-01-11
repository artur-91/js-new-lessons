$(function(){
	var $photos =  $('#galery .photos img');
	var $prev = $('#galery .buttons .prev');
	var $next = $('#galery .buttons .next');
	var i = 0;
	$prev.on('click',function(){
		$photos.eq(i).removeClass('showed');
		i--;
		if( i < 0){
			i = $photos.length - 1;
		}
		$photos.eq(i).addClass('showed');
	})
	$next.on('click',function(){
		$photos.eq(i).removeClass('showed');
		i++;
		if( i < 0){
			i = $photos.length - 1;
		}
		$photos.eq(i).addClass('showed');
	})
})