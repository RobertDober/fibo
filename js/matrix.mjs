function mult([[a, b], [_b, c]], [[x, y], [_y, z]]) {
  const middle = a*y + b*z
  const b_y = b * y
  return [ [a*x + b_y, middle],
    [middle, b_y + c*z]]
}

export {mult}
