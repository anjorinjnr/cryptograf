 interface Coin {
  name: string,
  price: number,
  delta: {
    type: string,
    value: number
  },
  holdSize: number
}

export {
  Coin
};