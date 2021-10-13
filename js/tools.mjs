function range(low, high, step = 1) {
  const size = Math.ceil((high - low + 1) / step)
  if (size > 0) {
    return (new Array(size))
      .fill(undefined)
      .map((_, i) => low + i*step)
  }
  return []
}

export {range}
