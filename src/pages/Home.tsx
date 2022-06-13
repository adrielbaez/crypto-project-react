import React from "react";
import { CoinSearch } from "../components/home/CoinSearch";
import { Trending } from "../components/home/Trending";
import { CoinsResponse } from "../interface/coinsInterface";

interface Props {
  coins: CoinsResponse[];
  isLoading: boolean;
}
export const Home = ({ coins, isLoading }: Props) => {
  return (
    <div>
      <CoinSearch coins={coins} isLoading={isLoading} />
      <Trending />
    </div>
  );
};
