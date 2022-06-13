import React from "react";
import { coinsApi } from "../api/coinsApi";
import { CoinsResponse } from "../interface/coinsInterface";

interface CoinsInterface {
  coins: CoinsResponse[];
  isLoading: boolean;
}

export const useCoins = () => {
  const [coinsRequest, setCoinsRequest] = React.useState<CoinsInterface>({
    coins: [],
    isLoading: true,
  });

  const getCoins = async () => {
    const { data } = await coinsApi.get<CoinsResponse[]>(
      "/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=true"
    );
    setCoinsRequest({
      coins: data,
      isLoading: false,
    });
  };
  React.useEffect(() => {
    getCoins();
  }, []);

  return { ...coinsRequest };
};
