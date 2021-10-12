

function iter_fibo(n) {
    return range(1, n)
    .reduce((([a, b], _) => [a+b, a]), [1n, 0n])[1]
}

function range(low, high) {
  return (new Array(high -low +1))
    .fill(undefined)
    .map((_, i) => low + i)
}
export { iter_fibo }
