import addToMailchimp from 'gatsby-plugin-mailchimp';
import styled from 'styled-components';
import React, { useState } from 'react';
import { withTrans } from '../../i18n/withTrans';

const NewsletterInput = styled.input`
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.marble};
  font-family: ${({ theme }) => theme.fonts.main};
  padding: 7px;

  &:active,
  &:focus {
    outline: none;
  }

  ::placeholder {
    color: ${({ theme }) => theme.colors.marble};
    text-align: center;
    text-decoration: underline;
    font-size: 16px;
  }
`;

const InfoMessage = styled.span`
  font-size: 12px;
  padding-top: 3px;
  font-family: ${({ theme }) => theme.fonts.main};
`;
const NewsletterFormWrapper = styled.div`
  height: 30px;
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
      addToMailchimp('maria.joao@fidel.uk')
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

  const handleChange = event => {
    setEmail(event.target.value);
  };

  return (
    <NewsletterFormWrapper>
      <div>
        <NewsletterInput
          type="text"
          placeholder={t('footer.subscribe')}
          onChange={handleChange}
        />
        <button onClick={subscribeNewsletter}>.</button>
      </div>
      <InfoMessage>{info}</InfoMessage>
    </NewsletterFormWrapper>
  );
};

export default withTrans(NewsletterForm);
