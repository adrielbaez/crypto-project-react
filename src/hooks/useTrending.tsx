import React from "react";
import { coinsApi } from "../api/coinsApi";
import { CoinsResponse } from "../interface/coinsInterface";
import { Coin, TrendingsResponse } from "../interface/trendingsInterface";

interface CoinsInterface {
  trending: Coin[];
  isLoading: boolean;
}

export const useTrending = () => {
  const [trendingRequest, setTrending] = React.useState<CoinsInterface>({
    trending: [],
    isLoading: true,
  });

  const getTrendingCoins = async () => {
    const { data } = await coinsApi.get<TrendingsResponse>("/search/trending");
    setTrending({
      trending: data.coins,
      isLoading: false,
    });
  };
  React.useEffect(() => {
    getTrendingCoins();
  }, []);

  return { ...trendingRequest };
};
