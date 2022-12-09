import React from 'react';
import InlineLogo from '../icons/InlineLogo';
import Logo from '../icons/Logo';

const LogoComponent = ({ onClick, color, inline=true }) => {
  return (
    <>
        {inline ? 
            <InlineLogo color={color}/> 
            : <Logo color={color}/>
        }
    </>
  );
};

export default LogoComponent;
