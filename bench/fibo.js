// import {iter_fibo} from "../js/fibo.js"

import bench from "nanobench"
import {ipair_fibo, iter_fibo, matrix_fibo, matrix_fibo_n, matrix_fibo_n_1, pair_fibo} from "../js/fibo.mjs";
import {range} from "../js/tools.mjs";

const low = Math.pow(2, 14)
const high = low + low
const step = Math.floor(low / low)
const argRange = range(low, high, step)

bench("matrix fibo", (b) => {
  b.start()
  argRange
    .forEach(matrix_fibo)
  b.end()
})

// bench("iterative fibo", (b) => {
//   b.start()
//   argRange
//     .forEach(iter_fibo)
//   b.end()
// })

bench("matrix fibo_n", (b) => {
  b.start()
  argRange
    .forEach(matrix_fibo_n)
  b.end()
})


bench("matrix fibo_n_1", (b) => {
  b.start()
  argRange
    .forEach(matrix_fibo_n_1)
  b.end()
})

bench("pair", (b) => {
  b.start()
  argRange
    .forEach(pair_fibo)
  b.end()
})

bench("ipair", (b) => {
  b.start()
  argRange
    .forEach(ipair_fibo)
  b.end()
})
