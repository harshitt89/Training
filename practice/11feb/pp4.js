var n=5;
var str="";
for(i=-(n+1); i<=n+1; i++)
{
    for(j=-(n+1); j<= n+1; j++)
    {
        if(Math.abs(i) == n+1  || Math.abs(j) ==  n+1){

            str+="0"
        }else if(Math.sign(i) == Math.sign(j) && Math.abs(i) -Math.abs(j)>=0 || j==0){
            str += String.fromCharCode( 97 + Math.abs(i)-Math.abs(j))}
        else if (Math.sign(i) != Math.sign(j) && Math.abs(i) - Math.abs(j)>=0 ){
            str+= Math.abs(i) - Math.abs(j) +1
        }

        
        else{
            str+=" "
        }
    }
    str+="\n"
}
console.log(str)