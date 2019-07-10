import React from 'react';

export const Back2SvgComponent = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="card"
    height="3.5in"
    preserveAspectRatio="none"
    viewBox="-120 -168 240 336"
    width="2.5in"
  >
    <defs>
      <pattern id="B2" width="6" height="6" patternUnits="userSpaceOnUse">
        <path d="M3 0L6 3L3 6L0 3Z" fill="red"></path>
      </pattern>
    </defs>
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
    <rect
      fill="url(#B2)"
      width="216"
      height="312"
      x="-108"
      y="-156"
      rx="12"
      ry="12"
    ></rect>
  </svg>
);
