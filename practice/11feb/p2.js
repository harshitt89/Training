var n = 5, str = "       ";

for (var i = 0; i <= n; i++) {
    for (var j = 0; j <n ; j++) {
        if (i + j <= n - 1) {
            str += "";
        } else { str += "@"; }
    } str += "\n"
}

for (var i = 0; i < n; i++) {
    str +="    ";

    for (var j = 0; j <= n; j++) {
        if (i + j >= n) {
            str +="";
        } else {
            str += "@";
        }
    } str += "\n";
} console.log(str);