import { CoinCards } from "@/components/coinCards";
import Divider from "@/components/divider";
import DividerReverse from "@/components/dividerReverse";
import { BestOfTheBest } from "@/components/homePage/bestOfTheBest";
import { Collection } from "@/components/homePage/collection";
import { LoveUs } from "@/components/homePage/loveUs";
import { Collectible } from "@/components/homePage/sectionOne";
import { WhyJoin } from "@/components/homePage/whyJoin";
import { getServerAuthSession } from "@/server/auth";
import { api, HydrateClient } from "@/trpc/server";

export default async function Home() {
  const hello = await api.post.hello({ text: "from tRPC" });
  const session = await getServerAuthSession();

  void api.post.getLatest.prefetch();

  return (
    <HydrateClient>
      <main className="flex w-full min-h-screen flex-col items-center justify-center bg-black ">
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
          {/* <LoveUs />
          <Collection /> */}
        </div>
      </main>
    </HydrateClient>
  );
}
