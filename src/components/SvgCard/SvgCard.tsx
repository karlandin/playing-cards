import * as React from 'react';
import { svgComponents } from './util/svgComponents';

type Props = {
  id: string;
  width?: string;
  height?: string;
};

export const SvgCard: React.FC<Props> = ({ id, width, height }) => {
  const Svg = svgComponents[id];

  if (!Svg) {
    console.warn('invalid card id', id);
    return null;
  }

  return <Svg width={width || '100%'} height={height || '100%'} />;
};
