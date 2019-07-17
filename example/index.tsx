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
  back2,
  shuffleCards,
} from '../.';

const App = () => {
  const [deck, setDeck] = React.useState(initialDeck);

  return (
    <div>
      <div>
        <h1>Size</h1>
        <p> size = 'small' | 'medium' | 'large' | 'fill' </p>
        <PlayingCard card={back2} size="small" />
        <PlayingCard card={diamonds[11]} size="medium" />
        <PlayingCard card={clubs4} size="large" />
        <div
          style={{ display: 'inline-block', width: '200px', height: '175px' }}
        >
          <PlayingCard card={diamonds[12]} size="fill" />
        </div>
      </div>

      <div>
        <h1>Captions</h1>
        <p> caption = true | false </p>
        <p> captionPosition = 'bottom' | 'top' </p>

        <PlayingCard card={diamonds1} />
        <PlayingCard card={spades2} caption={true} captionPosition="bottom" />
        <PlayingCard card={hearts3} caption={true} captionPosition="top" />
      </div>

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
        <PlayingCard key={index} size="small" card={item} caption={true} />
      ))}
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
