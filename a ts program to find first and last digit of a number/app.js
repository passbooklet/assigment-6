var num = prompt("enter the number");
var n = parseInt(num);
while (n >= 10) {
    n = n / 10;
}
var n1 = n;
console.log("the first dight is ".concat(n1));
console.log("the last dight is ".concat(n % 10, " "));
