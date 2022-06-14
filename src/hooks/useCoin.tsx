import React from "react";
import { coinsApi } from "../api/coinsApi";
import { CoinResponse } from "../interface/coinInterface";

interface CoinInterface {
  coin: CoinResponse | null;
  isLoading: boolean;
}

export const useCoin = (coinId: string) => {
  const [coinRequest, setCoinRequest] = React.useState<CoinInterface>({
    coin: null,
    isLoading: true,
  });

  const getCoin = async () => {
    const { data } = await coinsApi.get<CoinResponse>(
      `/coins/${coinId}?localization=false&sparkline=true`
    );
    setCoinRequest({
      coin: data,
      isLoading: false,
    });
  };
  React.useEffect(() => {
    getCoin();
  }, []);

  return { ...coinRequest };
};
