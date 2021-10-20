require "fibo/i_power"
RSpec.describe Fibo::IPower do

  let(:ipower){ described_class }

  context "multiplication" do
    it "is a NOP for n = 1" do
      expect(ipower.ipower(42, 1){ raise RuntimeError }).to eq(42)
    end
    it "not so much for n = 2" do
      expect(ipower.ipower(42, 2){ _1 * _2 }).to eq(1764)
    end
    it "computes much more" do
      expect(ipower.ipower(2, 63){ _1 * _2}).to eq(9223372036854775808)
    end
    it "stack size is not a problem" do
      expect(ipower.ipower(1, 100_000){ _1 + _2}).to eq(100_000)
    end
  end
end
