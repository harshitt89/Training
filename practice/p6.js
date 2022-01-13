
var i, str = "", j, n = 5, count = 0;
for (i = 0; i < n; i++) {
    for (j = 0; j <9; j++) {
        if ((i + j) >= n - 1 && (j - i) <= n - 1) {
            if (j <= n - 1) {
                count++;
                str += count;
            }
            else {
                count--;
                str += count;
            }


        }
        else {
            count = 0;
            str += " ";
        }
    } str += "\n";
}
console.log(str);