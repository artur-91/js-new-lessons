var n=2;
var m=10;
var sum=0;
var result=1;
while(n<=m){
	result=result*n;
	n++;
	console.log(result);
	sum=sum+(result/(result-1));
	console.log(sum);

}

/*n!/(n-1)*/
