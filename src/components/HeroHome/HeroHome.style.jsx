import styled, { keyframes } from 'styled-components';
import { Link as ScrollLink } from 'react-scroll';

export const HeroStyled = styled.div`
  display: block;
  width: auto;
  height: 100vh;

  .VideoBg-module_wrapper__3FlD_ {
    position: absolute;

    .VideoBg-module_video__2IPmN {
      display: initial!important;
    }

  }

  @media (max-width: 600px) {
    .VideoBg-module_wrapper__3FlD_ {
      position: absolute;
      right: 50%;
      width: 100%;

      .VideoBg-module_video__2IPmN {
        display: initial!important;
        transform: translateX(35%);
      }
      
    }
  }
`;

export const SliderContentWrapper = styled.div`
  position: absolute;
  bottom: 0px;
  left: 0px;
  padding-right: 0.5rem;
  padding-bottom: 3.5rem;
  width: 65%;
  max-width: 1200px;
  padding-left: 7.5%;
  /* height: 41.5%; */
  /* display: flex;
    align-items: flex-end; */

  @media (max-width: 1000px) {
    width: 75%;
  } 

  @media (max-width: 600px) {
    width: 90%;
  }
`;

export const SliderMeta = styled.span`
  font-size: 14px;
  line-height: 20px;
  display: inline-block;
  width: 60px;
  font-family: 'Lato', sans-serif;
  /* position: absolute; */
  /* top: 0; */

  @media (max-width: 1000px) {
    font-size: 24px;
    line-height: 33px;
    width: 90px;
  }

  @media (max-width: 600px) {
    font-size: 18px;
    line-height: 23px;
    width: 65px;
  }
`;

export const SliderTitle = styled.span`
  font-size: 70px;
  line-height: 80px;
  /* position: absolute; */
  /* bottom: 0; */
  width: 100%;

  @media (max-width: 1000px) {
    font-size: 100px;
    line-height: 100px;
  }

  @media (max-width: 600px) {
    font-size: 60px;
    line-height: 60px;
  }
`;

const buttonAnimation = keyframes`
  from {
    transform: translate(-50%, 0%);
  }
  to {
    left: 50%;
    transform: translate(-50%, 20%);
  }
`;

export const ScrollButtonWrapper = styled.div`
  position: absolute;
  left: 50%;
  transform: translate(-50%, 0%);
  bottom: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all .2s ease-in-out;

  &:hover {
    animation: ${buttonAnimation} .6s infinite alternate;
  }
`;

export const ScrollButton = styled(ScrollLink)`
  border-radius: 20px;
  background-color: #1c1c1c;
  width: 55px;
  height: 25px;
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const ArrowIcon = styled.img`
  width: auto;
  height: 100%;
`;
