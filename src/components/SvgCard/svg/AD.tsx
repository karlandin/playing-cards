import React from 'react';
import { SvgCardProps } from './SvgCardProps';

export const Diamonds1SvgComponent = ({ width, height }: SvgCardProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    className="card"
    height={height}
    preserveAspectRatio="none"
    viewBox="-120 -168 240 336"
    width={width}
  >
    <symbol
      id="VDA"
      viewBox="-500 -500 1000 1000"
      preserveAspectRatio="xMinYMid"
    >
      <path
        d="M-270 460L-110 460M-200 450L0 -460L200 450M110 460L270 460M-120 130L120 130"
        stroke="red"
        strokeWidth="80"
        strokeLinecap="square"
        strokeMiterlimit="1.5"
        fill="none"
      ></path>
    </symbol>
    <symbol
      id="SDA"
      viewBox="-600 -600 1200 1200"
      preserveAspectRatio="xMinYMid"
    >
      <path
        d="M-400 0C-350 0 0 -450 0 -500C0 -450 350 0 400 0C350 0 0 450 0 500C0 450 -350 0 -400 0Z"
        fill="red"
      ></path>
    </symbol>
    <rect
      width="239"
      height="335"
      x="-119.5"
      y="-167.5"
      rx="12"
      ry="12"
      fill="white"
      stroke="black"
    ></rect>
    <use xlinkHref="#SDA" height="70" x="-35" y="-35"></use>
    <use xlinkHref="#VDA" height="32" x="-114.4" y="-156"></use>
    <use xlinkHref="#SDA" height="26.769" x="-111.784" y="-119"></use>
    <g transform="rotate(180)">
      <use xlinkHref="#VDA" height="32" x="-114.4" y="-156"></use>
      <use xlinkHref="#SDA" height="26.769" x="-111.784" y="-119"></use>
    </g>
  </svg>
);
