var i=527;
var k=0
for(var j=1000;j<10000;j++){
	if(j%i==0){
		k=k+1;
	}
	else{continue;}
	console.log(j)
	if(k==3)break;


}