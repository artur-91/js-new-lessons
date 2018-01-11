$(function(){
	$('menu a').on('click',function(e){
		e.preventDefault();
		var selector = $(this).attr('href');
		alert(selector);
	})
})