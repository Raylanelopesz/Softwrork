import './contact.css';
import {
  FaLinkedinIn,
  FaGithubSquare,
  FaInstagram,
  FaEnvelope,
  FaPhoneSquareAlt,
  FaEnvelopeOpen,
} from 'react-icons/fa';

import { FiSend } from 'react-icons/fi';
import emailJs from '@emailjs/browser';
import { useState } from 'react';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  function enviarEmail(props) {
    props.preventDefault();
    const templateParams = {
      from_name: name,
      message,
      email,
    };
    console.log('🚀 ~ enviarEmail ~ templateParams=>', props);

    //   emailJs
    //     .send(
    //       'service_3aovog5',
    //       'template_m2pb3gd',
    //       templateParams,
    //       'miD4TwRYkGFW_JKuH'
    //     )
    //     .then((response) => {
    //       console.log('Email enviado', response.status, response.text);
    //     }).catch((err) => {console.error(err)});
  }
  return (
    <section className='contact section'>
      <h2 className='section__title'>
        Get In <span>Touch</span>
      </h2>

      <div className='contact__container container grid'>
        <div className='contact__data'>
          <h3 className='contact__title'>
            Entre em contato!
            <p className='contact__description'>
              Aqui, você encontrará todas as informações necessárias para entrar
              em contato conosco de forma rápida e eficiente. Estamos ansiosos
              para ouvir suas dúvidas, sugestões ou solicitações.
            </p>
            <div className='contact__info'>
              <div className='info__item'>
                <FaEnvelopeOpen className='info__icon' />
                <div>
                  <span className='info__title'>Mail me</span>
                  <h4 className='info__desc'>lays.silva@software.com.br</h4>
                </div>
              </div>

              <div className='info__item'>
                <FaPhoneSquareAlt className='info__icon' />
                <div>
                  <span className='info__title'>Call me</span>
                  <h4 className='info__desc'>(11) 96170-2406</h4>
                </div>
              </div>
              <div className='contact__socials'>
                <a href='https' className='contact__social-link'>
                  <FaLinkedinIn />
                </a>

                <a href='https' className='contact__social-link'>
                  <FaGithubSquare />
                </a>

                <a href='https' className='contact__social-link'>
                  <FaInstagram />
                </a>

                <a href='https' className='contact__social-link'>
                  <FaEnvelope />
                </a>
              </div>
            </div>
          </h3>
        </div>

        <form onSubmit={enviarEmail} className='contact__form'>
          <div className='form__input-group'>
            <div className='form__input-div'>
              <input
                type='text'
                placeholder='Seu nome'
                className='form__control'
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className='form__input-div'>
              <input
                type='email'
                placeholder='Seu E-mail'
                className='form__control'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className='form__input-div'>
              <input
                type='text'
                placeholder='Assunto'
                className='form__control'
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>
          </div>

          <div className='form__input-div'>
            <textarea
              placeholder='Sua mensagem'
              className='form__control textarea'
            ></textarea>
          </div>

          <button className='button' type='submit'>
            <span className='button__icon contact__button-icon'>
              <FiSend />
            </span>
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
