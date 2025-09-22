function charCount(str: string, char: string): number {
    let count = 0;
    for (let c of str) {
        if (c === char) count++;
    }
    return count;
}

console.log("Số lần xuất hiện:", charCount("hello world", "o")); // 2
console.log("Số lần xuất hiện:", charCount("typescript", "t"));  // 2
