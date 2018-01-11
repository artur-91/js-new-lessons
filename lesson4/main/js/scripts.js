$(function(){
	$(".question").on('click',function(){
		var answer = $(this).next()
		$(".answer:visible").not(answer).slideUp(400);
		answer.slideToggle(400)

	})
})