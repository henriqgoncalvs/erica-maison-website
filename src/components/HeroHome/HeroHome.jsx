/* eslint-disable no-return-assign */
import React, { useEffect, useRef } from 'react';
import VideoBg from 'reactjs-videobg';
import { gsap } from 'gsap';

import videoBG from 'assets/videos/video_WEB_1080.mp4';

import poster from 'assets/poster.jpg';

import arrowDown from 'assets/icons/arrow-down.svg';

import {
  HeroStyled,
  SliderContentWrapper,
  SliderTitle,
  SliderMeta,
  ScrollButtonWrapper,
  ScrollButton,
  ArrowIcon,
} from './HeroHome.style';

const HeroHome = () => {
  let contentRef = useRef(null);
  let buttonRef = useRef(null);

  useEffect(() => {
    gsap.from(buttonRef, {
      delay: 0.7,
      y: -20,
      opacity: 0,
      ease: 'power3.out',
    });
  }, [buttonRef]);

  useEffect(() => {
    gsap.from(contentRef, 3, {
      delay: 1,
      opacity: 0,
      ease: 'power3.out',
    });
  }, [contentRef]);

  return (
    <HeroStyled>
      <VideoBg poster={poster}>
        <VideoBg.Source src={videoBG} type="video/mp4" />
      </VideoBg>

      <SliderContentWrapper ref={(el) => (contentRef = el)}>
        <SliderMeta>
          SALÃO
          <br />
          NAILS
          <br />
          MAKE
          <br />
          BAR
        </SliderMeta>
        <SliderTitle>
          Toda beleza tem uma bela história.
        </SliderTitle>
      </SliderContentWrapper>

      <ScrollButtonWrapper ref={(el) => (buttonRef = el)}>
        <ScrollButton to="NavHome" duration={600} smooth>
          <ArrowIcon src={arrowDown} />
        </ScrollButton>
      </ScrollButtonWrapper>
    </HeroStyled>
  );
};

export default HeroHome;
