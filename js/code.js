$(function(){
	//console.log($('li'));
	//if($('li').length > 0 )
	//$('ul li ');
	//$('#box')
	//$('ul li ').css('color','green').css('background','aqua')
	// $('ul li').css({
	// 	'color':"green",
	// 	'background':'yellow',
	// 	'font-size':18
	// })
	//$('ul li').addClass('mylist')
	 //$('ul li:first-child').addClass('mylist');
	// $('ul li:last').addClass('mylist')
	// $('ul li').eq(2).addClass('mylist')
	//$('ul li:even').addClass('mylist')
	//$('ul li:odd').addClass('mylist')
	// if($('li:last').is(".mylist")){
	// 	console.log('yes')
	// }
	// $('ul li:even').addClass('mylist')
	// if($('li:first').is(":contains('Point')")){
	// 	console.log('yes of corse')
	// }
	// if($('li:first').is(":visible")){
	// 	console.log('yes of corse')
	// }
	// $('ul li:even').addClass('mylist');
	 //var lis = $('li');
	// //var mylist = lis.filter('.mylist');
	// console.log(mylist);
	// var notlist = lis.not('.mylist');
	// console.log(notlist);
	// var isspan = lis.has('span')
	// console.log(isspan);
	// $('ul li').addClass('mylist');
	// $('ul li:odd').removeClass('mylist');
	// $('ul li').toggleClass('mylist');
	// var lis = $('ul .mylist').children('li');
	// console.log(lis)
	// var lis = $('ul ').children('li');
	// console.log(lis);
	// var lis = $('ul.mylist ').find('li'); 
	// console.log(lis);
	 // var lis = $('ul.mylist').children('li')
	 // .eq(1)
	 // .css('color','reds')
	 // //.text()
	 // //.text("Point two")
	 // //.html()
	 // //.text('fasfassa')
	 // //.html("hello")
	 // console.log(lis);
	 // var lis = $('ul.mylist')
	 // .children('li')
	 // .eq(2)
	 // .next()
	 // .text('new point')
	 // .prev()
	 //  .text('new point')
	 $('li').html(function(ind,txt){
	 	return ind+'-'+txt+'!!!'
	 })
})