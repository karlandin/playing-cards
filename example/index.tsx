import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {
  PlayingCard,
  deck as initialDeck,
  diamonds,
  diamonds1,
  spades2,
  hearts3,
  clubs4,
  shuffleCards,
} from '../.';

const App = () => {
  const [deck, setDeck] = React.useState(initialDeck);

  return (
    <div>
      <h1>Cards</h1>

      <PlayingCard card={diamonds1} caption={true} captionPosition="top" />
      <PlayingCard card={spades2} caption={true} captionPosition="bottom" />
      <PlayingCard card={hearts3} caption={true} />
      <PlayingCard card={clubs4} caption={false} />
      <PlayingCard card={diamonds[11]} caption={true} />
      <PlayingCard card={diamonds[12]} />

      <h1>Full deck</h1>
      <div>
        <button
          onClick={() => {
            setDeck(shuffleCards(deck));
          }}
        >
          Shuffle
        </button>
      </div>
      {deck.map((item, index) => (
        <PlayingCard key={index} card={item} caption={true} />
      ))}
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
