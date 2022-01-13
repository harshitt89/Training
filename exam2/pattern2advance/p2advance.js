var n = 5; var str = "";
for (i = -(n + 1); i <= n + 1; i++) {
    for (j = -(n + 1); j <= n + 1; j++) {
        if (Math.abs(j) == n + 1) {
            str += "|"
        }
        else if (i == 0 && j == 0){str+="x" }
       else if (Math.abs(i) == n + 1) {
            str += "-"
        }

        else if(i==j)
        {
            str+="\\"
        }

        else if(Math.abs(i)==0 )
        {
            str+="o";
        }
        else if(Math.sign(i)==Math.sign(j) && Math.abs(i)-Math.abs(j)>=0)
        {
            str+=Math.abs(j)
        }
        else if(j==0 && i!=0)
        {
            str+="0";
        }
        else if(Math.abs(i)==Math.abs(j))
        {
            str+="/"
        }

        else if(Math.abs(i) - Math.abs(j) <=0){
            str += String.fromCharCode(n-Math.abs(j)+98)+""}
       
       
        else { str += String.fromCharCode(Math.abs(j)+97)}


    } str += "\n"
} console.log(str);