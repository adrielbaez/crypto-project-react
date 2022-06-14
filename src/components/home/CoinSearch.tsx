import React, { useState } from "react";
import { CoinsResponse } from "../../interface/coinsInterface";
import { Loader } from "../loader/Loader";
import { CoinItem } from "./CoinItem";

interface Props {
  coins: CoinsResponse[];
  isLoading: boolean;
}
export const CoinSearch = ({ coins, isLoading }: Props) => {
  const [searchText, setSearchText] = useState("");

  if (isLoading) {
    return (
      <div className="rounded-div h-[40vh] my-12 py-8 flex items-center justify-center">
        <Loader />
      </div>
    );
  }
  return (
    <div className="rounded-div my-4">
      <div className="flex flex-col justify-between md:flex-row pt-4 pb-6 text-center md:text-right">
        <h1 className="text-2xl font-bold my-2">Search Crypto</h1>
        <form>
          <input
            type="text"
            placeholder="Search a coin"
            className="w-full bg-primary p-2 border border-input rounded-xl shadow-xl"
            onChange={(e) => setSearchText(e.target.value)}
          />
        </form>
      </div>

      <table className="w-full border-collapse text-center">
        <thead>
          <tr className="border-b">
            <th></th>
            <th className="px-4">#</th>
            <th className="text-left">Coin</th>
            <th></th>
            <th>Price</th>
            <th>24h</th>
            <th className="hidden md:table-cell">24h Volume</th>
            <th className="hidden sm:table-cell">Mkt</th>
            <th>Last 7d Days</th>
          </tr>
        </thead>
        <tbody>
          {coins
            .filter((value) => {
              if (searchText === "") {
                return value;
              }
              if (value.name.toLowerCase().includes(searchText.toLowerCase())) {
                return value;
              }
            })
            .map((coin, index) => (
              <CoinItem key={coin.id} coin={coin} />
            ))}
        </tbody>
      </table>
    </div>
  );
};
