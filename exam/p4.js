var category = [
    "movie",
    "news",
    "education",
    "sports ",
    "politics"
]
var age = [
    "teenager",
    "adult"
]
var visitor;

arr=[];
for(let k=0;k<100;k++){
var var1=Math.floor(Math.random()*age.length());
var ans=age[var1]
var var2=Math.floor(Math.random()*category.length());
var aeg=category[var2]
var var3 = Math.round(Math.random()*(100));


arr.push({age:ans,category:aeg,visitor:var3});
}
console.log(arr);