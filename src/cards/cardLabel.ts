import { ICard } from './ICard';

const suitEng: { [key: string]: string } = {
  clubs: 'Clubs',
  diamonds: 'Diamonds',
  hearts: 'Hearts',
  spades: 'Spades',
};

const valueEng: { [key: number]: string } = {
  1: 'Ace',
  2: '2',
  3: '3',
  4: '4',
  5: '5',
  6: '6',
  7: '7',
  8: '8',
  9: '9',
  10: '10',
  11: 'Jack',
  12: 'Queen',
  13: 'King',
};

export const cardLabel: (card: ICard) => string = card => {
  if (card.value && card.suit) {
    const v = valueEng[card.value];
    const s = suitEng[card.suit];
    return `${v} of ${s}`;
  } else {
    return '';
  }
};
