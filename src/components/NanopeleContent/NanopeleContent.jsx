import React from 'react';
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';

import nanopele1 from 'assets/nanopele_1.webp';
import nanopele2 from 'assets/nanopele_2.webp';
import nanopele3 from 'assets/nanopele_3.webp';
import nanopele4 from 'assets/nanopele_4.webp';

import arrowTopRight from 'assets/icons/arrow-top-right.svg';

import {
  NanopeleContainer,
  NanopeleContentHeader,
  NanopeleContentHeaderPhoto,
  NanopeleContentDesc,
  NanopeleHair,
  NanopeleSectionContent,
  NanopeleSectionTitle,
  NanopeleSectionDesc,
  NanopeleSectionPhoto,
  NanopeleGel,
  NanopeleSeam,
  NanopeleCTA,
} from './NanopeleContent.style';

const NanopeleContent = () => (
  <ParallaxProvider>
    <NanopeleContainer>
      <NanopeleContentHeader>
        Nanopele
        <NanopeleContentHeaderPhoto>
          <Parallax y={[-15, 15]} tagOuter="figure">
            <img src={nanopele3} alt="Nanopele" />
          </Parallax>
        </NanopeleContentHeaderPhoto>
        <NanopeleContentDesc>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        </NanopeleContentDesc>
      </NanopeleContentHeader>

      <NanopeleHair>
        <NanopeleSectionContent>
          <NanopeleSectionTitle>
            Escolha do cabelo
          </NanopeleSectionTitle>
          <NanopeleSectionDesc>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry`&apos;`s
            standard dummy text ever since the 1500s
          </NanopeleSectionDesc>
        </NanopeleSectionContent>
        <NanopeleSectionPhoto>
          <Parallax y={[-10, 10]} tagOuter="figure">
            <img src={nanopele1} alt="Escolha do cabelo" />
          </Parallax>
        </NanopeleSectionPhoto>
      </NanopeleHair>

      <NanopeleGel>
        <NanopeleSectionPhoto>
          <Parallax y={[-10, 10]} tagOuter="figure">
            <img src={nanopele2} alt="Escolha do cabelo" />
          </Parallax>
        </NanopeleSectionPhoto>
        <NanopeleSectionContent>
          <NanopeleSectionTitle>
            Distribuição do gel
          </NanopeleSectionTitle>
          <NanopeleSectionDesc>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry`&apos;`s
            standard dummy text ever since the 1500s
          </NanopeleSectionDesc>
        </NanopeleSectionContent>
      </NanopeleGel>

      <NanopeleSeam>
        <NanopeleSectionContent>
          <NanopeleSectionTitle>
            Costura imperceptível
          </NanopeleSectionTitle>
          <NanopeleSectionDesc>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry`&apos;`s
            standard dummy text ever since the 1500s
          </NanopeleSectionDesc>
          <NanopeleCTA href="https://google.com">
            VER O CURSO
            <img src={arrowTopRight} alt="Ver o curso" />
          </NanopeleCTA>
        </NanopeleSectionContent>
        <NanopeleSectionPhoto>
          <img src={nanopele4} alt="Escolha do cabelo" />
        </NanopeleSectionPhoto>
      </NanopeleSeam>

    </NanopeleContainer>
  </ParallaxProvider>
);

export default NanopeleContent;
