function isPrime(n: number): boolean {
    if (n < 2) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }
    return true;
}

console.log("5 có phải số nguyên tố?", isPrime(5));   // true
console.log("10 có phải số nguyên tố?", isPrime(10)); // false
