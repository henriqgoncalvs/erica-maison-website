import React from 'react';

import arrowTopRight from 'assets/icons/arrow-top-right.svg';

import {
  ManifestStyled,
  ManifestText,
  CTAButton,
} from './Manifest.style';

const Manifest = () => (
  <ManifestStyled>
    <ManifestText>
      Érica Gonçalves, cabeleireira, empresária, megarista e visionária é a proprietária do
      mais completo espaço de embelezamento da região.
      Com a participação de parceiras e colaboradoras,
      tem a certeza que você saíra ainda mais linda e feliz.
    </ManifestText>
    <CTAButton
      href="https://www.instagram.com/ericagoncalvesmaison/"
    >
      VISITAR INSTAGRAM
      <img src={arrowTopRight} alt="Visitar Instagram" />
    </CTAButton>
  </ManifestStyled>
);

export default Manifest;
