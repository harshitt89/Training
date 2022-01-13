var str="",n=5;

for(var i=n;i>0;i--)
{
    for(var j=0;j<n;j++)
    {
        if(i<=j+1)
        {
            str+="*";
        }
        else{
            str+=" ";
        }
    }str+="\n";
}
console.log(str);
