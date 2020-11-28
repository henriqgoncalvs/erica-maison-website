import styled from 'styled-components';

import foto1 from 'assets/foto1.jpg';
import foto2 from 'assets/foto2.jpg';
import foto3 from 'assets/foto3.jpg';
import foto4 from 'assets/foto4.jpg';

export const ManifestStyled = styled.div`
  width: 85%;
  margin: 0px auto 50px;
`;

export const ManifestText = styled.span`
  font-size: 30px;

  @media (max-width: 600px) {
    line-height: 40px;
  }
`;

export const CTAButton = styled.a`
  font-family: 'Lato', sans-serif;
  font-size: 15px;
  padding: 10px 10px 20px 0px;
  margin-top: 10px;
  display: flex;
  align-items: center;
  font-weight: 300;
  opacity: 0.6;
  text-decoration: none;
  color: rgb(214, 214, 214);
  width: max-content;
  position: relative;
  z-index: 1000;
  transition: all .4s ease-in-out;
  bottom: 0;

  img {
    margin-left: 3px;
    width: 22px;
  }

  &:hover {
    opacity: 1;
  }
`;

export const InstagramBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100px;
  height: 100px;
  border-radius: 100%;
  position: absolute;
  z-index: 100;
  transform: translate(-50%, -50%);
  transition: opacity .3s ease-in-out;
  transition: left, top .1s ease-in;
  transition-duration: 200ms;
  transition-timing-function: ease-out
`;

export const Photo1 = styled.div`
  background: url(${foto1}) center no-repeat;
  background-size: cover;
  width: 50px;
  height: 50px;
  flex-basis: 50%;
  border-top-left-radius: 100px;
  `;

export const Photo2 = styled.div`
  background: url(${foto2}) center no-repeat;
  background-size: cover;
  width: 50px;
  height: 50px;
  flex-basis: 50%;
  border-top-right-radius: 100px;
  `;

export const Photo3 = styled.div`
  background: url(${foto3}) center no-repeat;
  background-size: cover;
  width: 50px;
  height: 50px;
  flex-basis: 50%;
  border-bottom-left-radius: 100px;
  `;

export const Photo4 = styled.div`
  background: url(${foto4}) center no-repeat;
  background-size: cover;
  width: 50px;
  height: 50px;
  flex-basis: 50%;
  border-bottom-right-radius: 100px;
`;
