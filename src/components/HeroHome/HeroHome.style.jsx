import styled, { keyframes } from 'styled-components';
import { Link as ScrollLink } from 'react-scroll';

export const HeroStyled = styled.div`
  display: block;
  width: auto;
  height: 100vh;

  .VideoBg-module_wrapper__3FlD_ {
    position: absolute;
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
`;

export const SliderMeta = styled.span`
  font-size: 14px;
  line-height: 20px;
  display: inline-block;
  width: 60px;
  font-family: 'Lato', sans-serif;
  /* position: absolute; */
  /* top: 0; */
`;

export const SliderTitle = styled.span`
  font-size: 70px;
  line-height: 80px;
  /* position: absolute; */
  /* bottom: 0; */
  width: 100%;
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
