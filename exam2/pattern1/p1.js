var str='';

for(var i=-1;i<=1;i++)
{
    for(j=-2;j<2;j++)
    {
        if(i+j==i||i+j==-1||i-j==1)
        {
            str+="x"
        }
        else{
            str+=" ";
        }
    }str+="\n"
}console.log(str);