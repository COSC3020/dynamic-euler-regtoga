cache = [];

function factorial(n) {
    if(n === 0) return 1;
    else{
        if (cache[n] == null){
            cache[n] = n * factorial(n - 1);
        }
        return cache[n];
    }
}   

function ee(n) {
    if(n === 0) return 1;
    else return 1.0 / factorial(n) + ee(n - 1);
}
