function mult([b, c], [y, z]) {
  const by = b * y
  return [ by + c*y + b*z, by + c*z]
}

function ppow(pair, n) {
  if (n<2) {
    return pair
  } else {
    const n_2 = Math.floor(n/2)
    const m_2 = ppow(pair, n_2)
    let result
    // console.log(n, " m_2: ", m_2)
    const squared = mult(m_2, m_2)
    // console.log("sq: ", squared)
    if (n % 2 === 0) {
      result = squared
    } else {
      result = mult(pair, squared)
    }
    // console.log(n, " ^ ", result)
    return result
  }
}

function ipow(pair, n) {
  return ipower({frame: {p: pair, n: n, h: null, ra: 3, pc: 0}, stack:[]})
}

function ipower(state) {
  while(state)  {
    // console.log("main loop:", state)
    switch(state.frame.pc) {
      case 0: ipower0(state); break
      case 1: ipower1(state); break
      case 2: ipower2(state); break
      case 3: return state.frame.h
    }
  }
}

function ipower0(state) {
  // console.log(state.frame)
  if (state.frame.n < 2) {
    up(state, state.frame.p)
    // console.log("after up:", state)
  } else {
    state.frame.pc = 1
  }
}

function ipower1(state) {
  const n = Math.floor(state.frame.n / 2)
  state.stack.push(state.frame)
  state.frame = {n: n, p: state.frame.p, ra: 2, pc: 0}
}

function ipower2(state) {
  let sq = mult(state.frame.h, state.frame.h)
  if ( state.frame.n % 2 === 1 ) {
    sq = mult(state.frame.p, sq)
  }
  up(state, sq)
}

function up(state, value) {
   // console.log(state.stack)
  if (state.stack.length === 0) {
    state.frame.pc = 3
    state.frame.h  = value
    return
  }
  let frame = state.stack.pop()
  frame.h = value
  frame.pc = state.frame.ra
  // console.log(frame)
  state.frame = frame
}
export {ppow, ipow}
