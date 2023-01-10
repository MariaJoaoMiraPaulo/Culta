import React from 'react';
import styled from 'styled-components';
import Grain from './Grain';

const GrainyEffectWrapper = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
`;

const ImageWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  justify-content: center;

  ${GrainyEffectWrapper} {
    width: ${({ showOnHover }) => (showOnHover ? '100%' : '0')};
    height: ${({ showOnHover }) => (showOnHover ? '100%' : '0')};
    filter: ${({ showOnHover }) => (showOnHover ? 'blur(1.2px)' : 'blur(0)')};
  }

  &:hover {
    ${GrainyEffectWrapper} {
      width: ${({ showOnHover }) => (showOnHover ? '0' : '100%')};
      height: ${({ showOnHover }) => (showOnHover ? '0' : '100%')};
      filter: ${({ showOnHover }) => (showOnHover ? 'blur(0)' : 'blur(1.2px)')};
      transform: ${({ scaleOnHover }) =>
        scaleOnHover ? 'scale(1.05)' : 'scale(1)'};
    }
  }
`;

const GrainyEffectImage = ({
  showOnHover = true,
  scaleOnHover = false,
  children,
}) => {
  return (
    <ImageWrapper showOnHover={showOnHover} scaleOnHover={scaleOnHover}>
      {children}
      <GrainyEffectWrapper>
        <Grain />
      </GrainyEffectWrapper>
    </ImageWrapper>
  );
};

export default GrainyEffectImage;
