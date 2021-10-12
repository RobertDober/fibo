defmodule Fibo do
  @moduledoc ~S"""
  ## How to pass or fail the fibonacci coding test (or why it should not be given, or how it should be given)

  """

  @doc ~S"""
  Firstly and only for the sake of completeness, let us look at the naïve, totlly inadequate implementation

  """
  def naive_fibo(n)
  def naive_fibo(0), do: 0
  def naive_fibo(1), do: 1
  def naive_fibo(n), do: naive_fibo(n-1) + naive_fibo(n-2)

  @doc ~S"""
  Now the good old iterative implementation that might just be fast enough (`O(n)`) and has
  the advantage of constant space complexity.
  """
  def iterative_fibo(n) do
    _iter_fibo(n, 1, 0)
  end

  @base {{1, 1}, {1, 0}}
  @doc ~S"""
  Now a clever trick, taking advantage of the fact that the matrix



        1, 1
        1, 0

  to the power n equals

        fibo(n+1), fibo(n)
        fibo(n), fibo(n-1)

  """
  def matrix_fibo(n) do
    with {{_, _}, {_, result}} <- Matrix.power(@base, n+1), do: result
  end

  def matrix_fibo_n(n) do
    with {{_, _}, {result, _}} <- Matrix.power(@base, n), do: result
  end

  def matrix_fibo_n_1(n) do
    with {{result, _}, {_, _}} <- Matrix.power(@base, n-1), do: result
  end

  defp _iter_fibo(0,_, r), do: r
  defp _iter_fibo(1, r, _), do: r # Useful???
  defp _iter_fibo(n, a, b), do: _iter_fibo(n-1, a+b, a)

end
