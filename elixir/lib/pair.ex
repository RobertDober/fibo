defmodule Pair do

  def power(pair, 1), do: pair
  def power(pair, n) do
    p_2 = power(pair, floor(n/2))
    squared = mul(p_2, p_2)
    case rem(n, 2) do
      0 -> squared
      1 -> mul(pair, squared)
    end
    squared = mul(p_2, p_2)
    case rem(n, 2) do
      0 -> squared
      1 -> mul(pair, squared)
    end
  end

  def ipower(pair, n) when is_number(n), do: ipower({n, pair, nil}, [])
  def ipower({n, p, _}, stack) when n < 2, do: return(p, stack)
  def ipower({n, p, h}, stack) do # h should be nil here
    ipower({floor(n/2), p, nil}, [{n, p, h}|stack])
  end

  def ipower1({n, p, h}, stack) do
    squared = mul(h, h)
    case rem(n, 2) do
      0 -> return(squared, stack)
      1 -> return(mul(p, squared), stack)
    end
  end


  def mul({b, c}, {y, z}) do
    by = b*y
    {by + c*y + b*z, by + c*z}
  end

  defp return(p, []), do: p
  defp return(p, [{n, p_, _}|stack]), do: ipower1({n, p_, p},stack)
end
