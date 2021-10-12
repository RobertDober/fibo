defmodule Bench.FiboBench do
  use Benchfella

  # bench "iterative" do
  #   make_values(16)
  #   |> Enum.each(&Fibo.iterative_fibo/1)
  # end
  # bench "matrix with power n+1" do
  #   make_values(16)
  #   |> Enum.each(&Fibo.matrix_fibo/1)
  # end
  # bench "matrix with power n" do
  #   make_values(16)
  #   |> Enum.each(&Fibo.matrix_fibo_n/1)
  # end

  bench "high matrix with power n + 1" do
    1..10 |> Enum.each( fn _ ->
    make_values(18)
    |> Enum.each(&Fibo.matrix_fibo/1)
    end)
  end

  bench "high matrix with power n" do
    1..10 |> Enum.each( fn _ ->
    make_values(18)
    |> Enum.each(&Fibo.matrix_fibo_n/1)
    end)
  end

  bench "high matrix with power n - 1" do
    1..10 |> Enum.each( fn _ ->
    make_values(18)
    |> Enum.each(&Fibo.matrix_fibo_n_1/1)
    end)
  end


  defp make_values(exp) do
    low = :math.pow(2, exp) |> floor()
    high = low + low
    inc = low / 20 |> floor()
    low..high//inc
  end

end
