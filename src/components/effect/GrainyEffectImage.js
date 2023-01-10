import React from 'react';
import styled from 'styled-components';
import Grain from './Grain';

const GrainyEffect = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
`;

const GrainyEffectWrapper = styled.div`
  height: ${({ showOnHover }) => (showOnHover ? '100%' : '0')};
  width: ${({ showOnHover }) => (showOnHover ? '100%' : '0')};
  filter: ${({ showOnHover }) => (showOnHover ? 'blur(1.2px)' : 'blur(0)')};
  display: flex;
  justify-content: center;

  &:hover {
    filter: ${({ showOnHover }) => (showOnHover ? 'blur(0)' : 'blur(1.2px)')};
    transform: ${({ scaleOnHover }) =>
      scaleOnHover ? 'scale(1.05)' : 'scale(1)'};
    ${GrainyEffect} {
      width: ${({ showOnHover }) => (showOnHover ? '0' : '100%')};
      height: ${({ showOnHover }) => (showOnHover ? '0' : '100%')};
    }
  }
`;

const GrainyEffectImage = ({
  showOnHover = true,
  scaleOnHover = false,
  children,
}) => {
  return (
    <GrainyEffectWrapper showOnHover={showOnHover} scaleOnHover={scaleOnHover}>
      {children}
      <GrainyEffect>
        <Grain />
      </GrainyEffect>
    </GrainyEffectWrapper>
  );
};

export default GrainyEffectImage;
