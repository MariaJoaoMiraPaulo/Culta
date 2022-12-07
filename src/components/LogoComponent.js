import React from 'react';
import InlineLogo from '../icons/InlineLogo';
import Logo from '../icons/Logo';

const LogoComponent = ({ onClick, color, logo=true }) => {
  return (
    <>
        {logo ? 
            <InlineLogo color={color}/> 
            : <Logo color={color}/>
        }
    </>
  );
};

export default LogoComponent;
