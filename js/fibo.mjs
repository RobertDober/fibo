import {mult} from "./matrix.mjs"

function iter_fibo(n) {
  return range(1, n)
    .reduce((([a, b], _) => [a+b, a]), [1n, 0n])[1]
}

const base_matrix = [[1n, 1n], [1n, 0n]]
function matrix_fibo(n) {
  return pow(base_matrix, n+1)[1][1]
}

function pow(matrix, n) {
  if (n===1) {
    return matrix
  } else {
    const n_2 = Math.floor(n/2)
    const m_2 = pow(matrix, n_2)
    const squared = mult(m_2, m_2)
    if (n_2 + n_2 === n) {
      return squared
    } else {
      return mult(matrix, squared)
    }
  }
}

function range(low, high) {
  return (new Array(high -low +1))
    .fill(undefined)
    .map((_, i) => low + i)
}
export { iter_fibo, matrix_fibo }
