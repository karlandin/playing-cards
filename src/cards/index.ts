import { shuffleCards } from './shuffleCards';
import { cardLabel } from './cardLabel';

import { ICard } from './ICard';

const clubs1: ICard = { id: 'C1', suit: 'clubs', color: 'black', value: 1 };
const clubs2: ICard = { id: 'C2', suit: 'clubs', color: 'black', value: 2 };
const clubs3: ICard = { id: 'C3', suit: 'clubs', color: 'black', value: 3 };
const clubs4: ICard = { id: 'C4', suit: 'clubs', color: 'black', value: 4 };
const clubs5: ICard = { id: 'C5', suit: 'clubs', color: 'black', value: 5 };
const clubs6: ICard = { id: 'C6', suit: 'clubs', color: 'black', value: 6 };
const clubs7: ICard = { id: 'C7', suit: 'clubs', color: 'black', value: 7 };
const clubs8: ICard = { id: 'C8', suit: 'clubs', color: 'black', value: 8 };
const clubs9: ICard = { id: 'C9', suit: 'clubs', color: 'black', value: 9 };
const clubs10: ICard = { id: 'C10', suit: 'clubs', color: 'black', value: 10 };
const clubs11: ICard = { id: 'C11', suit: 'clubs', color: 'black', value: 11 };
const clubs12: ICard = { id: 'C12', suit: 'clubs', color: 'black', value: 12 };
const clubs13: ICard = { id: 'C13', suit: 'clubs', color: 'black', value: 13 };

const diamonds1: ICard = { id: 'D1', suit: 'diamonds', color: 'red', value: 1 };
const diamonds2: ICard = { id: 'D2', suit: 'diamonds', color: 'red', value: 2 };
const diamonds3: ICard = { id: 'D3', suit: 'diamonds', color: 'red', value: 3 };
const diamonds4: ICard = { id: 'D4', suit: 'diamonds', color: 'red', value: 4 };
const diamonds5: ICard = { id: 'D5', suit: 'diamonds', color: 'red', value: 5 };
const diamonds6: ICard = { id: 'D6', suit: 'diamonds', color: 'red', value: 6 };
const diamonds7: ICard = { id: 'D7', suit: 'diamonds', color: 'red', value: 7 };
const diamonds8: ICard = { id: 'D8', suit: 'diamonds', color: 'red', value: 8 };
const diamonds9: ICard = { id: 'D9', suit: 'diamonds', color: 'red', value: 9 };
const diamonds10: ICard = {
  id: 'D10',
  suit: 'diamonds',
  color: 'red',
  value: 10,
};
const diamonds11: ICard = {
  id: 'D11',
  suit: 'diamonds',
  color: 'red',
  value: 11,
};
const diamonds12: ICard = {
  id: 'D12',
  suit: 'diamonds',
  color: 'red',
  value: 12,
};
const diamonds13: ICard = {
  id: 'D13',
  suit: 'diamonds',
  color: 'red',
  value: 13,
};

const hearts1: ICard = { id: 'H1', suit: 'hearts', color: 'red', value: 1 };
const hearts2: ICard = { id: 'H2', suit: 'hearts', color: 'red', value: 2 };
const hearts3: ICard = { id: 'H3', suit: 'hearts', color: 'red', value: 3 };
const hearts4: ICard = { id: 'H4', suit: 'hearts', color: 'red', value: 4 };
const hearts5: ICard = { id: 'H5', suit: 'hearts', color: 'red', value: 5 };
const hearts6: ICard = { id: 'H6', suit: 'hearts', color: 'red', value: 6 };
const hearts7: ICard = { id: 'H7', suit: 'hearts', color: 'red', value: 7 };
const hearts8: ICard = { id: 'H8', suit: 'hearts', color: 'red', value: 8 };
const hearts9: ICard = { id: 'H9', suit: 'hearts', color: 'red', value: 9 };
const hearts10: ICard = { id: 'H10', suit: 'hearts', color: 'red', value: 10 };
const hearts11: ICard = { id: 'H11', suit: 'hearts', color: 'red', value: 11 };
const hearts12: ICard = { id: 'H12', suit: 'hearts', color: 'red', value: 12 };
const hearts13: ICard = { id: 'H13', suit: 'hearts', color: 'red', value: 13 };

const spades1: ICard = { id: 'S1', suit: 'spades', color: 'black', value: 1 };
const spades2: ICard = { id: 'S2', suit: 'spades', color: 'black', value: 2 };
const spades3: ICard = { id: 'S3', suit: 'spades', color: 'black', value: 3 };
const spades4: ICard = { id: 'S4', suit: 'spades', color: 'black', value: 4 };
const spades5: ICard = { id: 'S5', suit: 'spades', color: 'black', value: 5 };
const spades6: ICard = { id: 'S6', suit: 'spades', color: 'black', value: 6 };
const spades7: ICard = { id: 'S7', suit: 'spades', color: 'black', value: 7 };
const spades8: ICard = { id: 'S8', suit: 'spades', color: 'black', value: 8 };
const spades9: ICard = { id: 'S9', suit: 'spades', color: 'black', value: 9 };
const spades10: ICard = {
  id: 'S10',
  suit: 'spades',
  color: 'black',
  value: 10,
};
const spades11: ICard = {
  id: 'S11',
  suit: 'spades',
  color: 'black',
  value: 11,
};
const spades12: ICard = {
  id: 'S12',
  suit: 'spades',
  color: 'black',
  value: 12,
};
const spades13: ICard = {
  id: 'S13',
  suit: 'spades',
  color: 'black',
  value: 13,
};

const clubs: ICard[] = [
  clubs1,
  clubs2,
  clubs3,
  clubs4,
  clubs5,
  clubs6,
  clubs7,
  clubs8,
  clubs9,
  clubs10,
  clubs11,
  clubs12,
  clubs13,
];
const diamonds: ICard[] = [
  diamonds1,
  diamonds2,
  diamonds3,
  diamonds4,
  diamonds5,
  diamonds6,
  diamonds7,
  diamonds8,
  diamonds9,
  diamonds10,
  diamonds11,
  diamonds12,
  diamonds13,
];
const hearts: ICard[] = [
  hearts1,
  hearts2,
  hearts3,
  hearts4,
  hearts5,
  hearts6,
  hearts7,
  hearts8,
  hearts9,
  hearts10,
  hearts11,
  hearts12,
  hearts13,
];
const spades: ICard[] = [
  spades1,
  spades2,
  spades3,
  spades4,
  spades5,
  spades6,
  spades7,
  spades8,
  spades9,
  spades10,
  spades11,
  spades12,
  spades13,
];
const deck: ICard[] = [...clubs, ...diamonds, ...hearts, ...spades];

export {
  ICard,
  shuffleCards,
  cardLabel,
  deck,
  clubs,
  diamonds,
  hearts,
  spades,
  clubs1,
  clubs2,
  clubs3,
  clubs4,
  clubs5,
  clubs6,
  clubs7,
  clubs8,
  clubs9,
  clubs10,
  clubs11,
  clubs12,
  clubs13,
  diamonds1,
  diamonds2,
  diamonds3,
  diamonds4,
  diamonds5,
  diamonds6,
  diamonds7,
  diamonds8,
  diamonds9,
  diamonds10,
  diamonds11,
  diamonds12,
  diamonds13,
  hearts1,
  hearts2,
  hearts3,
  hearts4,
  hearts5,
  hearts6,
  hearts7,
  hearts8,
  hearts9,
  hearts10,
  hearts11,
  hearts12,
  hearts13,
  spades1,
  spades2,
  spades3,
  spades4,
  spades5,
  spades6,
  spades7,
  spades8,
  spades9,
  spades10,
  spades11,
  spades12,
  spades13,
};
