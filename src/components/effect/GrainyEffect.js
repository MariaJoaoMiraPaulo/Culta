import React from 'react';
import styled from 'styled-components';
import Grain from './Grain';

export const GrainyEffectWrapper = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
`;

const GrainyEffect = () => {
  return (
    <GrainyEffectWrapper>
      <Grain />
    </GrainyEffectWrapper>
  );
};

export default GrainyEffect;
