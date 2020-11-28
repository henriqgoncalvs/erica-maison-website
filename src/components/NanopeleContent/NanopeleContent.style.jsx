import styled from 'styled-components';

export const NanopeleContainer = styled.div`
  margin: 0px auto 100px;
  padding-top: 100px;
  width: 80%;
  max-width: 1300px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;

  @media (max-width: 600px) {
    width: 85%;
    margin-bottom: 0px;
  }
`;

export const NanopeleContentHeader = styled.h2`
  font-size: 60px;
  font-weight: 400;
  margin-bottom: 80px;
  padding-left: 18%;
  position: relative;
  width: 100%;

  @media (max-width: 600px) {
    padding-left: 0%;
  }
`;

export const NanopeleContentDesc = styled.span`
  display: block;
  font-size: 12px;
  line-height: 20px;
  font-family: 'Lato', sans-serif;
  text-transform: uppercase;
  width: 30%;
  margin-top: 20px;

  @media (max-width: 600px) {
    width: 100%;
  }
`;

export const NanopeleContentHeaderPhoto = styled.div`
  position: absolute;
  right: 25%;
  bottom: -50px;
  z-index: 150;

  img {
    width: 250px;
  }

  @media (max-width: 600px) {
    display: none;
  }
`;

export const NanopeleHair = styled.div`
  display: flex;
  width: 100%;
  z-index: 100;
  margin-top: -70px;

  @media (max-width: 600px) {
    margin-top: 0px;
    flex-direction: column-reverse;
  }
`;

export const NanopeleSectionContent = styled.div`
  flex-basis: 40%;
  display: flex;
  flex-direction: column;
  margin: auto;
  align-items: center;
  justify-content: center;
  padding: 30px;

  @media (max-width: 600px) {
    padding: 30px 0px;
  }
`;

export const NanopeleSectionTitle = styled.h3`
  font-size: 70px;
  text-align: center;
  line-height: 80px;
  margin-bottom: 20px;

  @media (max-width: 600px) {
    font-size: 55px;
    line-height: 60px;
    margin-top: 20px;
  }
`;

export const NanopeleSectionDesc = styled.span`
  font-size: 13px;
  line-height: 20px;
  font-family: 'Lato', sans-serif;
  text-align: center;
  text-transform: uppercase;
`;

export const NanopeleSectionPhoto = styled.div`
  flex-basis: 60%;

  img {
    width: 100%;
  }
`;

export const NanopeleGel = styled.div`
  display: flex;
  width: 100%;
  margin-top: -30px;
  z-index: 50;

  @media (max-width: 600px) {
    flex-direction: column;
    margin-top: 20px;

    h3 {
      font-size: 48px;
    }
  }
`;

export const NanopeleSeam = styled.div`
  display: flex;
  width: 100%;
  margin-top: 40px;
  z-index: 50;

  @media (max-width: 600px) {
    flex-direction: column-reverse;
    margin-top: 20px;

    h3 {
      font-size: 45px;
    }
  }
`;

export const NanopeleCTA = styled.a`
  font-family: 'Lato', sans-serif;
  font-size: 20px;
  font-weight: 300;
  margin: 40px auto 0;
  opacity: .6;
  display: flex;
  align-items: center;
  transition: all .2s ease-in-out;
  cursor: pointer;
  color: rgb(214, 214, 214);
  text-decoration: none;

  img {
    width: 25px;
  }

  &:hover {
    opacity: 1;
  }
`;
