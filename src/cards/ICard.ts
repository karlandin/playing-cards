export type CardSuit = 'clubs' | 'diamonds' | 'hearts' | 'spades';
export type CardColor = 'red' | 'black';
export type CardValue = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13;

export interface ICard {
  id: string;
  value: CardValue;
  suit: CardSuit;
  color: CardColor;
}
