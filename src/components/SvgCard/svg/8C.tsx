import React from 'react';
import { SvgCardProps } from './SvgCardProps';

export const Clubs8SvgComponent = ({ width, height }: SvgCardProps) => (
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
      id="SC8"
      viewBox="-600 -600 1200 1200"
      preserveAspectRatio="xMinYMid"
    >
      <path
        d="M30 150C35 385 85 400 130 500L-130 500C-85 400 -35 385 -30 150A10 10 0 0 0 -50 150A210 210 0 1 1 -124 -51A10 10 0 0 0 -110 -65A230 230 0 1 1 110 -65A10 10 0 0 0 124 -51A210 210 0 1 1 50 150A10 10 0 0 0 30 150Z"
        fill="black"
      ></path>
    </symbol>
    <symbol
      id="VC8"
      viewBox="-500 -500 1000 1000"
      preserveAspectRatio="xMinYMid"
    >
      <path
        d="M-1 -50A205 205 0 1 1 1 -50L-1 -50A255 255 0 1 0 1 -50Z"
        stroke="black"
        strokeWidth="80"
        strokeLinecap="square"
        strokeMiterlimit="1.5"
        fill="none"
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
    <use xlinkHref="#VC8" height="32" x="-114.4" y="-156"></use>
    <use xlinkHref="#SC8" height="26.769" x="-111.784" y="-119"></use>
    <use xlinkHref="#SC8" height="70" x="-87.501" y="-135.588"></use>
    <use xlinkHref="#SC8" height="70" x="17.501" y="-135.588"></use>
    <use xlinkHref="#SC8" height="70" x="-35" y="-85.294"></use>
    <use xlinkHref="#SC8" height="70" x="-87.501" y="-35"></use>
    <use xlinkHref="#SC8" height="70" x="17.501" y="-35"></use>
    <g transform="rotate(180)">
      <use xlinkHref="#VC8" height="32" x="-114.4" y="-156"></use>
      <use xlinkHref="#SC8" height="26.769" x="-111.784" y="-119"></use>
      <use xlinkHref="#SC8" height="70" x="-87.501" y="-135.588"></use>
      <use xlinkHref="#SC8" height="70" x="17.501" y="-135.588"></use>
      <use xlinkHref="#SC8" height="70" x="-35" y="-85.294"></use>
    </g>
  </svg>
);
