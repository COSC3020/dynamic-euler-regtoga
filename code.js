function factorial(n) {
    if(n === 0) return 1;
    else return n * factorial(n - 1);
}

function e(n) {
    let result = 1.0;
    var factorial = 1;

    for (let i = 1; i <= n; i++) {
        factorial *= i;
        result += 1.0 / factorial;
    }

    return result;
}
