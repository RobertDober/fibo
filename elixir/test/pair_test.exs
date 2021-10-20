defmodule Test.PairTest do
  use ExUnit.Case

  import Pair
  @base {1, 0}
  describe "ipower" do
    test "n == 1" do
      assert ipower(@base, 1) == @base
    end
  end
end
