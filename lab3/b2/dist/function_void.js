var sum = function (x, y) {
    if (x === void 0) { x = 5; }
    return x + y;
};
var speech = function (output) {
    console.log("Result:" + output);
};
speech(sum(5, 12));
console.log(speech(sum(5, 12)));
