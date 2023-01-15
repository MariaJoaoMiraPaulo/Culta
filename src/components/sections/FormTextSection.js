import React from 'react';
import styled from 'styled-components';
import TextSection from './TextSection';
import { devices } from '../../styles/devices';

const FormTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem 0;

  @media ${devices.tablet} {
    flex-direction: row;
    padding-bottom: 0;
    display: ${props => (props.hide ? 'none' : 'flex')};
  }
`;

const FormWrapper = styled.div`
  width: 100%;
  margin: 0;

  @media ${devices.tablet} {
    width: 50%;
    margin: 0 1rem;
  }
`;

const TextWrapper = styled.div`
  position: relative;
  margin: 0 1rem;

  @media ${devices.tablet} {
    width: 50%;
  }
`;

const FormTextSection = ({
  color,
  body,
  title,
  padding,
  paddingMobile,
  hide = false,
  children,
  width,
}) => {
  return (
    <FormTextWrapper hide={hide}>
      <FormWrapper>{children}</FormWrapper>
      <TextWrapper>
        <TextSection
          color={color}
          body={body}
          title={title}
          padding={padding}
          paddingMobile={paddingMobile}
          width={width}
        />
      </TextWrapper>
    </FormTextWrapper>
  );
};

export default FormTextSection;
