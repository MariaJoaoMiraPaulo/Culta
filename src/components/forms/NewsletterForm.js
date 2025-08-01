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
  text-align: center;
`;

const NewsletterFormWrapper = styled.div`
  height: auto;
  display: flex;
  align-items: center;
  padding-top: 10px;
  flex-direction: column;
  padding-bottom: 30px;

  @media ${devices.tablet} {
    height: 70px;
    padding-bottom: 0;
  }
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
    width: 40%;
  }

  input {
    font-size: 0.9em;
    text-align: center;

    @media ${devices.laptop} {
      font-size: 0.85em;
    }

    @media ${devices.desktopL} {
      font-size: 1em;
    }
  }
`;

const SubmitEmail = styled.div`
  position: absolute;
  top: 0;
  right: 0;

  svg {
    width: 15px;

    @media ${devices.desktop} {
      width: 20px;
    }
  }
`;

const NewsletterForm = ({ t }) => {
  const [email, setEmail] = useState('');
  const [info, setInfo] = useState('');

  const validateEmail = email => {
    if (!email) return false;

    const regex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    return regex.test(String(email).toLowerCase());
  };

  const resetForm = () => {
    setInfo('');
    setEmail('');
  };

  const subscribeNewsletter = () => {
    setInfo(null);
    if (validateEmail(email)) {
      setInfo(t('footer.validatingEmail'));

      addToMailchimp(email)
        .then(() => {
          setInfo(t('footer.subscribedSuccess'));
          setTimeout(() => resetForm(), 1200);
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
          value={email}
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
