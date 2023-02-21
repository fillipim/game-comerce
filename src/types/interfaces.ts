export interface IGame {
  id: number;
  name: string;
  price: number;
  score: number;
  image: string;
}

export interface IGameCart extends IGame {
  amount: number;
}