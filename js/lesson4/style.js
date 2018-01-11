 /*
 function calcFact(i){
 	var n=1;
 	var i;
 	var result=1
 	while(n<=i){
 		result=result*n;
 		n++;
 	}
 	return result;

 }
 console.log(calcFact(7));
 */
 /*
 var sum=1;
 var result1=1
 var result2=1
 var n=1;
 for(var i=1;i<=3;i++){
 		while(n<i){
 			result1=result1*n;
 			n++;
 		}
 	for(j=1;j<=2;j++){
 		while(n<j){
 			result2=result2*j;
 			n++;
 		}
 		
 	}
 	sum=(i+j)*(i+j)/(result1*result2)
 	
 }
 console.log(sum)
*/
/*
function hello(){
	console.log('barevner');
}
hello()
*/
function hello(age){
	age=age||0;
	console.log("I am a "+age+" years old")

}
hello(45);
hello(4);
hello();