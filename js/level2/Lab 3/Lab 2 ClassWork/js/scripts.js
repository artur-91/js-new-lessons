function addYear(flag){
	var select = document.getElementById("year");
	var topYear = new Option(select[select.length-1].value - (-1),select[select.length-1].value - (-1),true,true);
 	var bottomYear = new Option(select[0].value - 1,select[0].value - 1,true,trues)
	if(flag){
		select.appendChild(topYear);
	}
	else if(!flag){
		select.add(bottomYear,select[0])
	}
	
}
