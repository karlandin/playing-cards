import React from 'react';
import { SvgCardProps } from './SvgCardProps';

export const Diamonds3SvgComponent = ({ width, height }: SvgCardProps) => (
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
      id="SD3"
      viewBox="-600 -600 1200 1200"
      preserveAspectRatio="xMinYMid"
    >
      <path
        d="M-400 0C-350 0 0 -450 0 -500C0 -450 350 0 400 0C350 0 0 450 0 500C0 450 -350 0 -400 0Z"
        fill="red"
      ></path>
    </symbol>
    <symbol
      id="VD3"
      viewBox="-500 -500 1000 1000"
      preserveAspectRatio="xMinYMid"
    >
      <path
        d="M-250 -320L-250 -460L200 -460L-110 -80C-100 -90 -50 -120 0 -120C200 -120 250 0 250 150C250 350 170 460 -30 460C-230 460 -260 300 -260 300"
        stroke="red"
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
    <use xlinkHref="#VD3" height="32" x="-114.4" y="-156"></use>
    <use xlinkHref="#SD3" height="26.769" x="-111.784" y="-119"></use>
    <use xlinkHref="#SD3" height="70" x="-35" y="-135.501"></use>
    <use xlinkHref="#SD3" height="70" x="-35" y="-35"></use>
    <g transform="rotate(180)">
      <use xlinkHref="#VD3" height="32" x="-114.4" y="-156"></use>
      <use xlinkHref="#SD3" height="26.769" x="-111.784" y="-119"></use>
      <use xlinkHref="#SD3" height="70" x="-35" y="-135.501"></use>
    </g>
  </svg>
);
