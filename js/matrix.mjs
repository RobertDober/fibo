function mult([[a, b], [_b, c]], [[x, y], [_y, z]]) {
  const middle = a*y + b*z
  const b_y = b * y
  return [ [a*x + b_y, middle],
    [middle, b_y + c*z]]
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
export {pow}
