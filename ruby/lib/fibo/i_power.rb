require "ostruct"

module Fibo extend self
  module IPower extend self
    def ipower(base, n, &mult)
      ipow(OpenStruct.new(frame: make_frame(p: base, n: n, ra: 3), stack:[]), &mult)
    end

    private

    def ipow(state, &mult)
      loop do
        case state.frame.pc
        when 0
          ipow0(state)
        when 1
          ipow1(state)
        when 2
          ipow2(state, &mult)
        else
          return state.frame.h
        end
      end
    end


    def ipow0(state)
      if state.frame.n < 2
        up(state, state.frame.p)
      else
        state.frame.pc = 1
      end
    end

    def ipow1(state)
      n = state.frame.n / 2
      state.stack.push(state.frame)
      state.frame = make_frame(n: n, p: state.frame.p, ra: 2)
    end

    def ipow2(state, &mult)
      sq = mult.(state.frame.h, state.frame.h)
      if state.frame.n.odd?
        sq = mult.(state.frame.p, sq)
      end
      up(state, sq)
    end

    def make_frame(n:, p:, ra:, h: nil, pc: 0)
      OpenStruct.new(n: n, p: p, ra: ra, h: h, pc: pc)
    end
    def up(state, value)
      if state.stack.empty?
        state.frame.pc = 3
        state.frame.h = value
      else
        frame = state.stack.pop
        frame.h = value
        frame.pc = state.frame.ra
        state.frame = frame
      end
    end
  end
end
