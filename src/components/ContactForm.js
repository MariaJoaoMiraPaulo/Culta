import React from 'react';
import styled from 'styled-components';

const Form = styled.form`
  height: 50vh;
  display: grid;
  justify-items: center;
  grid-template-columns: 100%;
  margin: 1rem 0 5rem 0;
`;

const Buttons = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;

  button,
  input {
    margin: 1rem;
  }
`;

const ContactForm = () => {
  return (
    <>
      <Form method="post" action="#">
        <label>
          <input type="text" name="name" id="name" placeholder="name" />
        </label>
        <label>
          <input type="email" name="email" id="email" placeholder="email" />
        </label>
        <label>
          <input
            type="text"
            name="subject"
            id="subject"
            placeholder="subject"
          />
        </label>
        <label>
          <textarea
            name="message"
            id="message"
            rows="5"
            placeholder="message"
          />
        </label>
        <Buttons>
          <button type="submit">Send</button>
          <input type="reset" value="Clear" />
        </Buttons>
      </Form>
    </>
  );
};

export default ContactForm;
