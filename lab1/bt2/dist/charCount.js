function charCount(str, char) {
    var count = 0;
    for (var _i = 0, str_1 = str; _i < str_1.length; _i++) {
        var c = str_1[_i];
        if (c === char)
            count++;
    }
    return count;
}
console.log("Số lần xuất hiện:", charCount("hello world", "o")); // 2
console.log("Số lần xuất hiện:", charCount("typescript", "t")); // 2
