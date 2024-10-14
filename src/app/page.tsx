import { BestOfTheBest } from "./components/bestOfTheBest";
import { CoinCards } from "./components/coinCards";
import Divider from "./components/divider";
import DividerReverse from "./components/dividerReverse";
import { Collectible } from "./components/sectionOne";
import { WhyJoin } from "./components/whyJoin";

export default function HomePage() {
  return (
    <main className="flex w-full min-h-screen flex-col items-center justify-center bg-black">
      <div className="mb-[3%]">
          <Collectible />
          <div className="my-[3%] ">
            <CoinCards />
            <div className="flex flex-col gap-y-8 justify-center">
              <Divider />
              <BestOfTheBest />
              <DividerReverse />
            </div>
            <div className="w-full mt-[2%] flex justify-center ">
            <WhyJoin />
            </div>
          </div>
        </div>
    </main>
  );
}
