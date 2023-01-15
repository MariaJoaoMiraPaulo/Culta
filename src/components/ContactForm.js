import React from 'react';
import styled from 'styled-components';
import { withTrans } from '../i18n/withTrans';
import { devices } from '../styles/devices';

const Form = styled.form`
  display: grid;
  justify-items: left;
  grid-template-columns: 100%;
  margin: 0;
  padding: 3rem 1rem 3rem 1rem;

  @media ${devices.tablet} {
    padding: 0;
    justify-items: end;
    margin: 1rem 1rem 5rem 0;
  }

  .field {
    position: relative;
    margin-bottom: 2rem;
  }

  label {
    width: 80%;
  }

  button {
    background: 0;
    border: 0;
    font-family: ${({ theme }) => theme.fonts.secondary};
    color: ${({ theme }) => theme.colors.blue};
    font-size: 1.5em;
    font-weight: 200;
    margin-top: 1rem;
    cursor: pointer;

    &: hover {
      color: transparent;
      text-shadow: 0 0 ${({ radius }) => radius || '5px'}
        ${({ theme, color }) => theme.colors[color] || theme.colors.blue};
    }
  }

  textarea {
    background: 0;
    border: 0;
    font-weight: 200;
    font-size: 1.5em;
    resize: none;
    width: 96%;
    overflow: auto;
    font-family: ${({ theme }) => theme.fonts.secondary};
    outline: none;
    border-color: ${({ theme }) => theme.colors.blue};
    border-style: solid;
    border-width: 1px;
    padding: 0.5% 2%;

    ::placeholder {
      color: ${({ theme }) => theme.colors.blue};
    }
  }

  select {
    color: ${({ theme }) => theme.colors.blue};
  }

  input,
  select {
    background: 0;
    border: 0;
    outline: none;
    font-size: 1.5em;
    transition: padding 0.3s 0.2s ease;
    font-family: ${({ theme }) => theme.fonts.secondary};
    font-weight: 200;
    padding: 0 2%;
    width: 96%;

    option {
      color: ${({ theme }) => theme.colors.blue};
    }

    ::placeholder {
      color: ${({ theme }) => theme.colors.blue};
    }

    &:focus {
      padding-bottom: 5px;
    }

    &:focus + .line {
      &:after {
        transform: scaleX(1);
      }
    }
  }
`;

const Line = styled.div`
  width: 100%;
  border-color: ${({ theme }) => theme.colors.blue};
  border-style: solid;
  border-width: 0 0 1px 0;

  &:after {
    content: ' ';
    position: absolute;
    float: right;

    transform: scalex(0);
    transition: transform 0.3s ease;
  }
`;

const ContactForm = ({ t }) => {
  return (
    <>
      <Form method="post" action={process.env.EMAIL_ENDPOINT}>
        <label className="field">
          <input
            required
            type="text"
            name="name"
            id="name"
            placeholder={t('contact.name')}
          />
          <Line />
        </label>
        <label className="field">
          <input
            required
            type="email"
            name="email"
            id="email"
            placeholder={t('contact.email')}
          />
          <Line />
        </label>
        <label className="field">
          <select required id="subject" name="subject">
            <option value="" disabled selected hidden>
              {t('contact.subject')}
            </option>
            <option value="optionInfo">{t('contact.optionInfo')}</option>
            <option value="optionTeam">{t('contact.optionTeam')}</option>
            <option value="optionIdea">{t('contact.optionIdea')}</option>
            <option value="optionPhotos">{t('contact.optionPhotos')}</option>
            <option value="optionOthers">{t('contact.optionOthers')}</option>
          </select>
          <Line />
        </label>
        <label>
          <textarea
            required
            name="message"
            id="message"
            rows="5"
            placeholder={t('contact.message')}
          />
        </label>
        <button type="submit">Enviar</button>
      </Form>
    </>
  );
};

export default withTrans(ContactForm);
