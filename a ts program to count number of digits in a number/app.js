var num = prompt("enter the number");
var n = parseInt(num);
var count = 1;
while (n / 10 >= 1) {
    n = n / 10;
    count = count + 1;
}
console.log(count);
