import React from 'react';

import arrowTopRight from 'assets/icons/arrow-top-right.svg';
import logoErica from 'assets/logo/logo_erica.png';

import {
  FooterStyled,
  Signature,
  Logo,
  LinksWrapper,
  LinkStyled,
} from './Footer.style';

const Footer = () => (
  <FooterStyled>
    <Signature>
      Todos os direitos reservados
      <br />
      à Érica Gonçalves Maison.
      <br />
      Desenvolvido por
      {' '}
      <a href="https://github.com/henriiqueg">
        Henrique Gonçalves
        {' '}
        <img src={arrowTopRight} alt="Github Henrique" />
      </a>
    </Signature>

    <Logo src={logoErica} alt="Logo Érica Gonçalves Maison" />

    <LinksWrapper>
      <LinkStyled href="#">
        CONTATO
        <img src={arrowTopRight} alt="Contato" />
      </LinkStyled>
      <LinkStyled href="https://www.instagram.com/ericagoncalvesmaison/">
        INSTAGRAM
        <img src={arrowTopRight} alt="Instagram" />
      </LinkStyled>
    </LinksWrapper>
  </FooterStyled>
);

export default Footer;
