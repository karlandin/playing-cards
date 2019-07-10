import * as React from 'react';
import { svgComponents } from './util/svgComponents';

export const SvgCard: React.FC<{ id: string }> = ({ id }) => {
  const Svg = svgComponents[id];

  if (!Svg) {
    console.warn('invalid card id', id);
    return null;
  }

  return <Svg />;
};
