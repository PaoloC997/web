import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import styled from 'styled-components';
import Heading from '../common/Heading';
import { headings, contactText } from '../../data/homeData';
import { useLanguage } from '../../context/LanguageContext';

const Wrapper = styled.div`
  display: flex;
  width: 88.28vw;
  margin: auto;
  flex-direction: column;
  align-items: start;
  margin-bottom:9.375rem;
`;

const SendButton = styled.input.attrs({
  type: 'submit',
})`
  background-color: white;
  color: black;
  border: 1px solid black;
  border-radius: 17px!important;
  font-size: 1.6rem;
  cursor: pointer;
  margin-top: 10px;
  max-width: 100px!important;
  padding: 10px 20px!important;
  height:2.5rem!important;
  line-height:1rem;
`;

const FormContainer = styled.form`
  flex-direction: column;
  padding-top: 1rem;
  font-size:1.6rem;

  div {
    display: flex;
    flex-direction: row;
    margin-bottom: 1rem;
    padding-bottom:2rem;
  }

  label {
    margin-bottom: 0.5rem;
    margin-right:9.3125rem;
    min-width: 9.3125rem;
   

  }

  input{
    margin-bottom: 1rem;
    height:3.5rem;
    width:37.25rem;
    border:1px solid gray;
    border-radius:10px;
  }

  textarea{
    margin-bottom: 1rem;
    width:37.25rem;
    height:13.8125rem;
    border-radius:10px;
  }

`;

const TextContainer = styled.div`
  width: 100%;
  white-space:pre-wrap;
  align-items:start;
`;

export const Contact = () => {
    const form = useRef();
    const { language } = useLanguage()

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
            .then(
                (result) => {
                    console.log(result.text);
                },
                (error) => {
                    console.log(error.text);
                }
            );
    };

    const heading = headings.find((heading) => {
        return heading.id === 4
    })

    const contactInfo = contactText.find((item)=> item.id === 1)

    return (

        <Wrapper>
            <TextContainer className="light-font">
             <Heading props={heading.text[language]} style={{ margin: '0' }}/>
            </TextContainer>
            <FormContainer ref={form} onSubmit={sendEmail}>
                <div>
                    <label className="light-font" htmlFor="user_name">{contactInfo.name[language]}</label>
                    <input type="text" name="user_name" />
                </div>
                <div>
                    <label className="light-font" htmlFor="user_email">{contactInfo.email[language]}</label>
                    <input type="email" name="user_email" />
                </div>
                <div>
                    <label className="light-font" htmlFor="user_subjectline">{contactInfo.subject[language]}</label>
                    <input type="phone" name="user_subjectline" />
                </div>
                <div>
                    <label className="light-font" htmlFor="message">{contactInfo.message[language]}</label>
                    <textarea name="message" />
                </div>
                <SendButton className="thin-font" type="submit" value={contactInfo.send[language]}/>
            </FormContainer>
        </Wrapper>
    );
};

export default Contact;
