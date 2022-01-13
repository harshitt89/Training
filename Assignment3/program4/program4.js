first_array = [1, 3, 4];
second_array = [2, 3, 4];
third_array = [];
for (var i=0; i < second_array.length; i++) {
        var mul = first_array[i] * second_array[i];
        third_array.push(mul)
    }
    

console.log(third_array);