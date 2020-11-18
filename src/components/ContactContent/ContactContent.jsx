import React from 'react';

import arrowTopRight from 'assets/icons/arrow-top-right.svg';

import {
  ContactContainer,
  ContactPhotoContainer,
  ContactPhoto,
  ContactInfo,
  ContactInfoHeader,
  ContactInfoItem,
  ContactInfoItemHeader,
  ContactInfoItemLink,
} from './ContactContent.style';

const ContactContent = () => (
  <ContactContainer>
    <ContactPhotoContainer>
      <ContactPhoto />
    </ContactPhotoContainer>

    <ContactInfo>
      <ContactInfoHeader>
        Entre em contato
      </ContactInfoHeader>

      <ContactInfoItem>
        <ContactInfoItemHeader>
          Whatsapp
        </ContactInfoItemHeader>
        <ContactInfoItemLink href="https://wa.me/5587988133353?text=Ol%C3%A1%2C+gostaria+de+marcar+um+hor%C3%A1rio">
          087 9 8813-3353
          <img src={arrowTopRight} alt="Entrar em contato pelo Whatsapp" />
        </ContactInfoItemLink>
      </ContactInfoItem>

      <ContactInfoItem>
        <ContactInfoItemHeader>
          Agendamento Online
        </ContactInfoItemHeader>
        <ContactInfoItemLink href="https://shorturl.at/ipyAR">
          shorturl.at/ipyAR
          <img src={arrowTopRight} alt="Entrar em contato pelo Whatsapp" />
        </ContactInfoItemLink>
      </ContactInfoItem>
    </ContactInfo>
  </ContactContainer>
);

export default ContactContent;
