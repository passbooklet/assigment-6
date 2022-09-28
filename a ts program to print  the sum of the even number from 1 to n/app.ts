var sum: number = 0
for (let index = 1; index <= 10; index++) {
    if (index % 2 == 0) {
        sum = sum + index
    }   
}
console.log(sum);