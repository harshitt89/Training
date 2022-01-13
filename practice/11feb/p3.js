var n = 5, str = "";

for (var i = 0; i < n; i++) {
    for (var j = 0; j < n; j++) {
        if (i == j) {
            if (i + j != n - 1) {
                str += "\\";
            }
          else  if (i == j && i + j == n - 1) {
                str += "o";
            }
        }
        else if (i != j) {
            if (i + j == n - 1) {
                str += "/";
            }
           else if (i + j == i + 1 || i + j == i) {
                str += "|";
            }
            else if (i == n - 1 || i < j) {
                str+="-"
            }
        }

    } str += "\n";
}
console.log(str);