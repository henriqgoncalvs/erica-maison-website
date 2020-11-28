import React from 'react';
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';

import nanopele from 'assets/nanopele.png';
import escolhaCabelo from 'assets/escolha-cabelo.png';
import gel from 'assets/gel.png';
import costura from 'assets/costura.png';

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
            <img src={nanopele} alt="Nanopele" />
          </Parallax>
        </NanopeleContentHeaderPhoto>
        <NanopeleContentDesc>
          Método de alongamento delicado, moderno e que não agride seus cabelos.
          Consiste em faixas de cabelo e com costura para maior durabilidade.
        </NanopeleContentDesc>
      </NanopeleContentHeader>

      <NanopeleHair>
        <NanopeleSectionContent>
          <NanopeleSectionTitle>
            Escolha do cabelo
          </NanopeleSectionTitle>
          <NanopeleSectionDesc>
            Mais importante até que o alongamento, é a escolha dos cabelos.
            Partimos da necessidade de escolher algum fio com a textura o
            mais próximo da cliente. Depois escolhemos o volume que seja
            condizente com o da cliente, para então escolher-mos o comprimento.
          </NanopeleSectionDesc>
        </NanopeleSectionContent>
        <NanopeleSectionPhoto>
          <Parallax y={[-10, 10]} tagOuter="figure">
            <img src={escolhaCabelo} alt="Escolha do cabelo" />
          </Parallax>
        </NanopeleSectionPhoto>
      </NanopeleHair>

      <NanopeleGel>
        <NanopeleSectionPhoto>
          <Parallax y={[-10, 10]} tagOuter="figure">
            <img src={gel} alt="Distribuição do gel" />
          </Parallax>
        </NanopeleSectionPhoto>
        <NanopeleSectionContent>
          <NanopeleSectionTitle>
            Distribuição do gel
          </NanopeleSectionTitle>
          <NanopeleSectionDesc>
            O gel consiste na durabilidade e largura da faixa.
            Usamos gel de alta qualidade para que sua faixa seja
            a mais duradoura possível. Como equipamentos de
            selamento que fazem a fusão dos fios e do gel para
            deixá-las ainda mais fininhas
          </NanopeleSectionDesc>
        </NanopeleSectionContent>
      </NanopeleGel>

      <NanopeleSeam>
        <NanopeleSectionContent>
          <NanopeleSectionTitle>
            Costura imperceptível
          </NanopeleSectionTitle>
          <NanopeleSectionDesc>
            Após vários cursos de tecimento de fios,
            chegamos a perfeição das Nanopeles:
            a nanopele invisible! Depois de todo
            processo de escolha de fios, aplicação e
            selagem dos fios, arrematamos essas faixas
            com uma costura para que sua faixa não tenha
            perca de fios nem de qualidade. Tudo isso para
            que nosso serviço seja digno de elogios por
            todas as clientes que escolheram nosso método.
          </NanopeleSectionDesc>
          <NanopeleCTA href="https://google.com">
            VER O CURSO
            <img src={arrowTopRight} alt="Ver o curso" />
          </NanopeleCTA>
        </NanopeleSectionContent>
        <NanopeleSectionPhoto>
          <Parallax y={[-10, 10]} tagOuter="figure">
            <img src={costura} alt="Costura imperceptível " />
          </Parallax>
        </NanopeleSectionPhoto>
      </NanopeleSeam>

    </NanopeleContainer>
  </ParallaxProvider>
);

export default NanopeleContent;
