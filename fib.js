var series = [];
series.push(0);
series.push(1);
function fib(n, prev, count) {
    if(count > 1) {
        series.push(n + prev);
        count --;
        fib(n + prev, n,  count);
    }
    else {
        series.forEach(function(x) {
            console.log(x);
        });
    }
}

fib(1, 0, 10);