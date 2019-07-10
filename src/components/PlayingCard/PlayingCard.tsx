import * as React from 'react';
import { ICard, cardLabel } from '../../cards';
import { SvgCard } from '../SvgCard';

const figureStyle: React.CSSProperties = {
  display: 'inline-block',
  margin: '4px',
};
const captionStyle: React.CSSProperties = {
  textAlign: 'center',
  fontWeight: 'bold',
  fontSize: '1.5em',
};

const Caption: React.FC<{ card: ICard }> = ({ card }) => (
  <figcaption style={captionStyle}>{cardLabel(card)}</figcaption>
);

type Props = {
  card: ICard;
  caption?: boolean;
  captionPosition?: 'top' | 'bottom';
};

export const PlayingCard: React.FC<Props> = props => {
  const { card, caption, captionPosition } = props;
  const cap = caption ? captionPosition || 'top' : undefined;

  return (
    <figure style={figureStyle}>
      {cap === 'top' && <Caption card={card} />}

      <SvgCard id={card.id} />

      {cap === 'bottom' && <Caption card={card} />}
    </figure>
  );
};
