var win;
 function winOpen(){
 	var w = 300, h = 200;
 	var left = (screen.availWidth-w)/2;
 	var top = (screen.availHeight-h)/2;
 	
 	win = window.open("","", " width= "+w+", height = "+h+", top = "+top+", left = "+left" ");
 	w.focus();
 }
function winClose(){
	if(win && !win.closed){
		win.focus();
		win.close()
	}
}