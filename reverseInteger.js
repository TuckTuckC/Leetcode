var reverse = function(n) {
    let reverseN = 0;
    n = Math.abs(n);
    while (n) {
        reverseN = reverseN*10 + (n % 10);
        n = Math.floor(n/10);
    }
    return reverseN > 0x7FFFFFFF ? 0 : n < 0 ? -reverseN : reverseN;
};

console.log(reverse(-123))