import React from 'react';

import SectionList from 'components/SectionList';

import arrowTopRight from 'assets/icons/arrow-top-right.svg';

import {
  MaisonContentStyled,
  MaisonContentHeader,
} from './MaisonContent.style';

const MaisonContent = () => (
  <MaisonContentStyled>

    <MaisonContentHeader>
      O Maison
    </MaisonContentHeader>

    <SectionList title="O SALÃO">
      <SectionList.Item>
        Nanopele
      </SectionList.Item>
      <SectionList.Item>
        Mechas
      </SectionList.Item>
      <SectionList.Item>
        Tratamentos
      </SectionList.Item>
      <SectionList.Item>
        Coloração
      </SectionList.Item>
      <SectionList.Item>
        Corte
      </SectionList.Item>
      <SectionList.Item>
        Penteados
      </SectionList.Item>
      <SectionList.Item>
        Selagem
      </SectionList.Item>
    </SectionList>

    <SectionList title="OUTROS SERVIÇOS">
      <SectionList.Link link="https://instagram.com/ericagoncalvesmaison">
        Nails
        <img src={arrowTopRight} alt="Visitar Nails" />
      </SectionList.Link>
      <SectionList.Link link="https://instagram.com/ericagoncalvesmaison">
        Make
        <img src={arrowTopRight} alt="Visitar Make" />
      </SectionList.Link>
      <SectionList.Link link="https://instagram.com/ericagoncalvesmaison">
        Bar
        <img src={arrowTopRight} alt="Visitar Bar" />
      </SectionList.Link>
    </SectionList>

  </MaisonContentStyled>
);

export default MaisonContent;
