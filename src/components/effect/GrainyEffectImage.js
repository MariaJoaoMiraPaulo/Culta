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
  filter: ${({ showOriginalOnHover }) =>
    showOriginalOnHover ? 'blur(1px)' : 'blur(0)'};

  ${GrainyEffectWrapper} {
    width: ${({ showOriginalOnHover }) => (showOriginalOnHover ? '100%' : '0')};
    height: ${({ showOriginalOnHover }) =>
      showOriginalOnHover ? '100%' : '0'};
  }

  &:hover {
    filter: ${({ showOriginalOnHover, grainyWithNoEffect }) =>
      !showOriginalOnHover || grainyWithNoEffect ? 'blur(1px)' : 'blur(0)'};
    transform: ${({ scaleOnHover, grainyWithNoEffect }) =>
      !scaleOnHover || grainyWithNoEffect ? 'scale(1)' : 'scale(1.05)'};

    ${GrainyEffectWrapper} {
      width: ${({ showOriginalOnHover, grainyWithNoEffect }) =>
        !showOriginalOnHover || grainyWithNoEffect ? '100%' : '0'};
      height: ${({ showOriginalOnHover, grainyWithNoEffect }) =>
        !showOriginalOnHover || grainyWithNoEffect ? '100%' : '0'};
    }
  }
`;

const GrainyEffectImage = ({
  grainyWithNoEffect = false,
  showOriginalOnHover = true,
  scaleOnHover = false,
  children,
}) => {
  return (
    <ImageWrapper
      grainyWithNoEffect={grainyWithNoEffect}
      showOriginalOnHover={showOriginalOnHover}
      scaleOnHover={scaleOnHover}
    >
      {children}
      <GrainyEffectWrapper>
        <Grain />
      </GrainyEffectWrapper>
    </ImageWrapper>
  );
};

export default GrainyEffectImage;
