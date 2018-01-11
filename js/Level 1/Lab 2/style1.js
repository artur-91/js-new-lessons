// loop for

// 2^10
/*
var sum=1;
var n = 2;
var m = 10;
for (var count = 1;count <= m; count++){
    sum = sum * n;
}
console.log(sum);
*/
//Factorial
/*var sum = 1;
for (var n = 2; n<=5; n++) {
    sum= sum*n;
    console.log(sum);
}
*/



// for - if  print 1-100 all odd numbers

/*
for (var i =1; i < 100; i++) {
    if (i % 2 == 0)
    console.log(i);
    }
*/

 // infinity loop
/* for (var i = 0; ;i++) {
    console.log (i);
}
*/





/*for (var i =0; i < 11; i++) {
    if (i % 2 == 0 && i !=0)
    console.log(i+" zuyg e");
    else if (i == 0)
    console.log(i+ " zuyg e")
    else
    console.log(i+" kent e")
}
*/



// break
/*
var x= 1;
console.log("\nEnter the loop ");
while (x < 20) {
   if (x == 15) { break;}
x=x+1;
console.log(x+"\n");
}
console.log("End of loop");
*/


/*
var k = "";
var i;
for (i = 0; i < 10; i++) {
    if (i === 3) { break; }
    k += "\nThe number is " + i ;
}
console.log(k);
*/


// continue
/*
var x= 1;
console.log("\nEnter the loop ");
while (x < 10) {
    x++;
   if (x == 5) { continue;}
console.log(x+"\n");
}
console.log("End of loop");
*/

// Labels outerloop and inner loop;

/*
console.log("Enter th loop");
artaqin:
for (var i = 0; i < 7; i++){
    console.log("\nArtaqin cikl:"+i);

nerqin:
for (var j=0; j< 7; j++){
    if(j>5) break; // quit of inner loop
    if(i==3) break nerqin;
    if(i==5) break artaqin;
    console.log("Neqin cikl:" + j);
}
}
*/


// classic switch
/*
var age = 25;
switch (age) {
    case 0: console.log("noratcin"); // write break
    case 15: console.log("patani");
    case 25: console.log("eritasard");
    case 45: console.log("stazhavor");
    case 63: console.log("toshaki");
    case 75: console.log("metcahasak");
    case 100: console.log("meratc");
    // default: console.log ("....."); 
}
*/
// nuyn@ anel if - els-ov

/*
var word="Armm";

switch (word) {
    case 'Hay': console.log("Hay");
    break;
    case 'Turk': console.log("1915");
    break;
    case 'Arm': console.log("This is right answer");
    break;
    default: console.log("Unkwown name");
}

*/

// parz tveri hashvumy
/*
arajin:
for (var i = 2; i < 20; i++) {

    for (var j = 2; j < 20; j++){
        if (i % j == 0) { continue arajin;
      }
        console.log(i+" parz tiv e");
    }
}
*/

//hashvel Sum i=1....100 (n+1)/n!
/*
var p = 1;
var sum = 0;
for (var i = 1; i <=3; i++) {
    p= p*i;
    sum= sum+(i+1)/p;
}
console.log(sum);
*/

// 3-i bazhanvogh tver@
/*
var j=0;
for (var i=1; i < 100; i++){
    if (i % 3 !=0) {continue;}
    j=j+i;
    }
console.log(j);
*/
// tpel arajin 523 bazhanvogh
/*
for (var i = 1000; i <=100000; i++) {
    if (i % 533 !=0){continue;}
    console.log(i);
    break;
}
*/