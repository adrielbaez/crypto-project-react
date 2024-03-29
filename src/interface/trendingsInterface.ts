// Generated by https://quicktype.io

export interface TrendingsResponse {
  coins: Coin[];
  exchanges: any[];
}

export interface Coin {
  item: CoinItemTrending;
}

export interface CoinItemTrending {
  id: string;
  coin_id: number;
  name: string;
  symbol: string;
  market_cap_rank: number;
  thumb: string;
  small: string;
  large: string;
  slug: string;
  price_btc: number;
  score: number;
}
