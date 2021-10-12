defmodule Matrix do
  @doc ~S"""
  Multiplying Matrices of the form {{a, b}, {b, c}}
  """
  def mul({{a, b}, {b, c}}, {{x, y}, {y, z}}) do
    middle = a*y + b*z
    {
      {a*x + b*y, middle},
      {middle, b*y + c*z}}
  end

  def power(mat, 1), do: mat
  def power(mat, n) do
    m_2 = power(mat, floor(n/2))
    squared = mul(m_2, m_2)
    case rem(n, 2) do
      0 -> squared
      1 -> mul(mat, squared)
    end
  end
end
