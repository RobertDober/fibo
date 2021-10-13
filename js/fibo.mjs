import {pow} from "./matrix.mjs"
import {range} from "./tools.mjs"

function iter_fibo(n) {
  return range(1, n)
    .reduce((([a, b], _) => [a+b, a]), [1n, 0n])[1]
}

const base_matrix = [[1n, 1n], [1n, 0n]]
function matrix_fibo(n) {
  return pow(base_matrix, n+1)[1][1]
}


export { iter_fibo, matrix_fibo }
