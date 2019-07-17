import React from 'react';
import { SvgCardProps } from './SvgCardProps';

export const Spades1SvgComponent = ({ width, height }: SvgCardProps) => (
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
      id="VSA"
      viewBox="-500 -500 1000 1000"
      preserveAspectRatio="xMinYMid"
    >
      <path
        d="M-270 460L-110 460M-200 450L0 -460L200 450M110 460L270 460M-120 130L120 130"
        stroke="black"
        strokeWidth="80"
        strokeLinecap="square"
        strokeMiterlimit="1.5"
        fill="none"
      ></path>
    </symbol>
    <symbol
      id="SSA"
      viewBox="-600 -600 1200 1200"
      preserveAspectRatio="xMinYMid"
    >
      <path d="M0 -500C100 -250 355 -100 355 185A150 150 0 0 1 55 185A10 10 0 0 0 35 185C35 385 85 400 130 500L-130 500C-85 400 -35 385 -35 185A10 10 0 0 0 -55 185A150 150 0 0 1 -355 185C-355 -100 -100 -250 0 -500Z"></path>
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
    <use
      xlinkHref="#SSA"
      fill="black"
      height="164.8"
      x="-82.4"
      y="-82.4"
      stroke="black"
      strokeWidth="100"
      strokeDasharray="100,100"
      strokeLinecap="round"
    ></use>
    <use
      xlinkHref="#SSA"
      fill="black"
      height="164.8"
      x="-82.4"
      y="-82.4"
      stroke="white"
      strokeWidth="50"
    ></use>
    <use xlinkHref="#SSA" fill="black" height="164.8" x="-82.4" y="-82.4"></use>
    <text
      fontSize="20"
      fontFamily="Bariol"
      fill="black"
      textAnchor="middle"
      y="120.4"
    >
      /cards/
    </text>
    <use xlinkHref="#VSA" height="32" x="-114.4" y="-156"></use>
    <use
      xlinkHref="#SSA"
      fill="black"
      height="26.769"
      x="-111.784"
      y="-119"
    ></use>
    <g transform="rotate(180)">
      <use xlinkHref="#VSA" height="32" x="-114.4" y="-156"></use>
      <use
        xlinkHref="#SSA"
        fill="black"
        height="26.769"
        x="-111.784"
        y="-119"
      ></use>
    </g>
  </svg>
);
