import React from 'react';
import styled from 'styled-components';
import Grain from './Grain';

const GrainyEffectWrapper = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

const ImageWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  filter: ${({ showOnHover }) => (showOnHover ? 'blur(1px)' : 'blur(0)')};

  ${GrainyEffectWrapper} {
    width: ${({ showOnHover }) => (showOnHover ? '100%' : '0')};
    height: ${({ showOnHover }) => (showOnHover ? '100%' : '0')};
  }

  &:hover {
    filter: ${({ showOnHover }) => (showOnHover ? 'blur(0)' : 'blur(1px)')};
    transform: ${({ scaleOnHover }) =>
      scaleOnHover ? 'scale(1.05)' : 'scale(1)'};

    ${GrainyEffectWrapper} {
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
    <ImageWrapper showOnHover={showOnHover} scaleOnHover={scaleOnHover}>
      {children}
      <GrainyEffectWrapper>
        <Grain />
      </GrainyEffectWrapper>
    </ImageWrapper>
  );
};

export default GrainyEffectImage;
