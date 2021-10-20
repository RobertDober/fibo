module Fibo extend self
  module Power extend self

    def power(base, n, &mult)
      return base if n < 2
      h = power(base, n/2, &mult)
      sq = mult.(h, h)
      if n.odd?
        mult.(base, sq)
      else
        sq
      end
    end
  end
end
