import React from 'react';
import styled from 'styled-components';

const GrainyEffectWrapper = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-image: url(data:image/png;base64,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);
`;
const GrainyImageBlur = styled.div`
  width: 120%;
  height: 120%;
  filter: ${({ showOriginalOnHover, grainyWithNoEffect }) =>
    !showOriginalOnHover || grainyWithNoEffect ? 'blur(0)' : 'blur(5px)'};
`;

const ImageWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  ${GrainyEffectWrapper} {
    width: ${({ showOriginalOnHover }) => (showOriginalOnHover ? '100%' : '0')};
    height: ${({ showOriginalOnHover }) =>
      showOriginalOnHover ? '100%' : '0'};
  }

  &:hover {
    ${GrainyEffectWrapper} {
      width: ${({ showOriginalOnHover, grainyWithNoEffect }) =>
        !showOriginalOnHover || grainyWithNoEffect ? '100%' : '0'};
      height: ${({ showOriginalOnHover, grainyWithNoEffect }) =>
        !showOriginalOnHover || grainyWithNoEffect ? '100%' : '0'};
    }

    ${GrainyImageBlur} {
      filter: ${({ showOriginalOnHover, grainyWithNoEffect }) =>
        !showOriginalOnHover || grainyWithNoEffect ? 'blur(5px)' : 'blur(0)'};
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
      <GrainyImageBlur showOriginalOnHover={showOriginalOnHover}>
        {children}
      </GrainyImageBlur>
      {<GrainyEffectWrapper></GrainyEffectWrapper>}
    </ImageWrapper>
  );
};

export default GrainyEffectImage;
