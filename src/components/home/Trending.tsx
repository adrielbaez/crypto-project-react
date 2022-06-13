import React from "react";
import { useTrending } from "../../hooks/useTrending";

export const Trending = () => {
  const { trending, isLoading } = useTrending();
  return (
    <div className="rounded-div my-12 py-8 text-primary">
      <h1 className="text-2xl font-bold py-4 ">Trending Coins</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {trending.map((coin) => (
          <div className="rounded-div flex justify-between p-4 hover:scale-105 easy-in-out duration-300">
            <div className="flex w-full items-center justify-between">
              <div className="flex">
                <img
                  className="mr-4 rounded-full"
                  src={coin.item.small}
                  alt={coin.item.name}
                />
                <div>
                  <p className="font-bold">{coin.item.name}</p>
                  <p>{coin.item.symbol}</p>
                </div>
              </div>
              <div className="flex items-center">
                <img
                  src="https://assets.coingecko.com/coins/images/1/large/bitcoin.png?154703579"
                  alt="bitcoin"
                  className="w-4 mr-2"
                />
                <p>{coin.item.price_btc.toFixed(7)}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
