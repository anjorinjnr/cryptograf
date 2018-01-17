interface Coin {
  name: string,
  symbol: number,
  price
  delta: {
    type: string,
    value: number
  },
  holdSize: number
}

interface CoinTicker {
  name: string,
  symbol: string,
  price_usd: number,
  price_btc?: number,
  volume_usd_24h?: number,
  market_cap_usd?: number,
  percent_change_1h?: number,
  percent_change_24h: number,
  percent_change_7d?: number,
  available_supply?: number,
  total_supply?: number,
  max_supply?: number,
}

interface User {
  id: number,
  username: string,
  firstname: string,
  lastname: string
}

export {
  Coin,
  User,
  CoinTicker
};
