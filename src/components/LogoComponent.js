import React from 'react';
import ShortenedLogo from '../icons/ShortenedLogo';
import Logo from '../icons/Logo';

const LogoComponent = ({ color, shortenedVersion = true }) => {
  return (
    <>
      {shortenedVersion ? (
        <ShortenedLogo color={color} />
      ) : (
        <Logo color={color} />
      )}
    </>
  );
};

export default LogoComponent;
