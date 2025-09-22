function sumMany(...numbers: number[]): number {
    return numbers.reduce((tong, num) => tong + num, 0);
}

console.log("Tổng =", sumMany(1, 2, 3, 4, 5));  // 15
console.log("Tổng =", sumMany(10, 20));         // 30
