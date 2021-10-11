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

end
