import {pow} from "./matrix.mjs"
import {ipow, ppow} from "./pair.mjs"
import {range} from "./tools.mjs"

function iter_fibo(n) {
  return range(1, n)
    .reduce((([a, b], _) => [a+b, a]), [1n, 0n])[1]
}

const base_matrix = [[1n, 1n], [1n, 0n]]
function matrix_fibo(n) {
  return pow(base_matrix, n+1)[1][1]
}

function matrix_fibo_n(n) {
  if(n<1){ return 0n}
  return pow(base_matrix, n)[1][0]
}

function matrix_fibo_n_1(n) {
  if(n<2){ return BigInt(n)}
  return pow(base_matrix, n-1)[0][0]
}

const base_pair = [1n, 0n]
function pair_fibo(n) {
  if(n<2){ return BigInt(n)}
  return ppow(base_pair, n)[0]
}

function ipair_fibo(n) {
  if(n<2){ return BigInt(n)}
  return ipow(base_pair, n)[0]
}

export { ipair_fibo, iter_fibo, matrix_fibo, matrix_fibo_n, matrix_fibo_n_1, pair_fibo }
