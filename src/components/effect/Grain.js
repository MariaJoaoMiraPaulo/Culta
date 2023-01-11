import React from 'react';

const Grain = () => {
  return (
    <svg viewBox="0 0 10 310" xmlns="http://www.w3.org/2000/svg">
      <filter id="noiseFilter">
        <feTurbulence
          type="turbulence"
          baseFrequency="100"
          numOctaves="1"
          stitchTiles="noStitch"
        />
      </filter>

      <rect width="100%" height="100%" filter="url(#noiseFilter)" />
    </svg>
  );
};

export default Grain;
