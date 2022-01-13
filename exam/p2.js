numberArray = [0,1,2,3,4,5,6,7,8,9];
letterArray = ['a','b','c','d','e'];
arr=[];

var y= numberArray.concat(letterArray);

for(let i =0;i<10;i++)
{


var a = Math.floor(Math.random()*15);
var var2=Math.floor(Math.random()*15);
var var3=Math.floor(Math.random()*5);
arr.push(y[a]+""+y[var2]+""+letterArray[var3]);

}


console.log(arr);