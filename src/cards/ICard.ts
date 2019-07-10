export type CardSuit = 'clubs' | 'diamonds' | 'hearts' | 'spades' | 'none';
export type CardColor = 'red' | 'black' | 'none';
export type CardValue =
  | 0
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 11
  | 12
  | 13;

export interface ICard {
  id: string;
  value: CardValue;
  suit: CardSuit;
  color: CardColor;
}
