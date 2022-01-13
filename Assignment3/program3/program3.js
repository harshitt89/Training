let player = [
    ['rohit', 45],
    ['Virat', 18],
    ['Jadeja', 8],
    ['Abdevillers', 17],
    ['dhoni', 7]
];
console.log("length of array : "+player.length);


for(var i=0;i< player.length;i++)
{
    for(var j=0;j<player[i].length;j++)
    {
        console.log("index: "+"["+i+" "+j+"] value: "+player[i][j]);
    }
}