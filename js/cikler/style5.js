var result=0
sum:
  for (var i = 2; i < 1000; i++) {

    for (var j = 2; j < i; j++) {
      if (i % j == 0) continue sum;
    }
    result=result+1;
    if(result==28){break;}
	 console.log(i); 
  }
  	