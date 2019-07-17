import * as React from 'react';
import { ICard, cardLabel } from '../../cards';
import { SvgCard } from '../SvgCard';
import styled from '@emotion/styled';

type FigureProps = { width?: string; height?: string };
const Figure = styled.figure<FigureProps>(
  {
    display: 'inline-block',
    margin: '4px',
  },
  props => ({
    width: props.width,
    height: props.height,
  })
);

type FigCaptionProps = { fontSize: string };
const FigCaption = styled.figcaption<FigCaptionProps>(
  {
    textAlign: 'center',
    fontWeight: 'bold',
  },
  props => ({
    fontSize: props.fontSize,
  })
);

type CardSize = 'small' | 'medium' | 'large' | 'fill';

const getSizes: (size?: CardSize) => [string, string, string] = (size?) => {
  size = size || 'medium';
  switch (size) {
    case 'small':
      return ['100px', '140px', '0.75em'];
    case 'medium':
      return ['175px', '245px', '1em'];
    case 'large':
      return ['240px', '336px', '1.5em'];
    case 'fill':
      return ['100%', '100%', '1.5em'];
  }
};

type Props = {
  card: ICard;
  caption?: boolean;
  captionPosition?: 'top' | 'bottom';
  size?: CardSize;
};

export const PlayingCard: React.FC<Props> = props => {
  const { size, card, caption, captionPosition } = props;
  const cap = caption ? captionPosition || 'top' : undefined;

  const [width, height, fontSize] = getSizes(size);

  return (
    <Figure>
      {cap === 'top' && (
        <FigCaption fontSize={fontSize}>{cardLabel(card)}</FigCaption>
      )}

      <SvgCard width={width} height={height} id={card.id} />

      {cap === 'bottom' && (
        <FigCaption fontSize={fontSize}>{cardLabel(card)}</FigCaption>
      )}
    </Figure>
  );
};
