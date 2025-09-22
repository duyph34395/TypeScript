function sumMany() {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    return numbers.reduce(function (tong, num) { return tong + num; }, 0);
}
console.log("Tổng =", sumMany(1, 2, 3, 4, 5)); // 15
console.log("Tổng =", sumMany(10, 20)); // 30
