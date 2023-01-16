import addToMailchimp from 'gatsby-plugin-mailchimp';
import styled from 'styled-components';
import React, { useState } from 'react';
import { withTrans } from '../../i18n/withTrans';
import { devices } from '../../styles/devices';
import Input from './Input';
import ArrowIcon from '../../icons/ArrowIcon';

const InfoMessage = styled.span`
  padding-top: 3px;
  font-family: ${({ theme }) => theme.fonts.main};
  font-size: 1.1em;

  @media ${devices.laptop} {
    font-size: 1.4em;
  }

  @media ${devices.desktopL} {
    font-size: 1.8em;
  }
`;

const NewsletterFormWrapper = styled.div`
  height: 70px;
  display: flex;
  align-items: center;
  padding-top: 10px;
  flex-direction: column;
`;

const NewsletterInputWrapper = styled.div`
  width: 70%;
  display: flex;
  flex-direction: row;
  align-content: center;
  justify-content: center;

  @media ${devices.tablet} {
    width: 60%;
  }

  @media ${devices.desktop} {
    width: 50%;
  }
`;

const SubmitEmail = styled.div`
  position: absolute;
  top: 0;
  right: 0;

  svg {
    width: 15px;

    @media ${devices.tablet} {
      width: 20px;
    }
  }
`;

const NewsletterForm = ({ t }) => {
  const [email, setEmail] = useState(null);
  const [info, setInfo] = useState(null);

  function validateEmail(email) {
    if (!email) return false;

    const regex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    return regex.test(String(email).toLowerCase());
  }

  const subscribeNewsletter = () => {
    setInfo(null);
    if (validateEmail(email)) {
      setInfo(t('footer.validatingEmail'));

      addToMailchimp(email)
        .then(() => {
          setInfo(t('footer.subscribedSuccess'));
        })
        .catch(() => {
          setInfo(t('footer.errorSubscribing'));
        });
    } else {
      setInfo(t('footer.emailInvalid'));
    }
  };

  const handleKeyPress = event => {
    if (event.key === 'Enter') {
      subscribeNewsletter();
    }
  };

  const handleChange = event => {
    setEmail(event.target.value);
  };

  return (
    <NewsletterFormWrapper>
      <NewsletterInputWrapper>
        <Input
          paddingBottomZero
          white
          type="text"
          id="newsletter"
          name="newsletter"
          placeholder={t('footer.subscribe')}
          onChange={handleChange}
          onKeyPress={handleKeyPress}
          children={
            <SubmitEmail onClick={subscribeNewsletter}>
              <ArrowIcon color="marble" />
            </SubmitEmail>
          }
        />
      </NewsletterInputWrapper>
      <InfoMessage>{info}</InfoMessage>
    </NewsletterFormWrapper>
  );
};

export default withTrans(NewsletterForm);
