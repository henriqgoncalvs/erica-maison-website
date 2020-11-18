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
`;

export const NanopeleContentHeader = styled.h2`
  font-size: 60px;
  font-weight: 400;
  margin-bottom: 80px;
  padding-left: 18%;
  position: relative;
  width: 100%;
`;

export const NanopeleContentDesc = styled.span`
  display: block;
  font-size: 12px;
  line-height: 20px;
  font-family: 'Lato', sans-serif;
  text-transform: uppercase;
  width: 30%;
  margin-top: 20px;
`;

export const NanopeleContentHeaderPhoto = styled.div`
  position: absolute;
  right: 25%;
  bottom: -100px;
  z-index: 150;

  img {
    width: 250px;
  }
`;

export const NanopeleHair = styled.div`
  display: flex;
  width: 100%;
  z-index: 100;
`;

export const NanopeleSectionContent = styled.div`
  flex-basis: 40%;
  display: flex;
  flex-direction: column;
  margin: auto;
  align-items: center;
  justify-content: center;
  padding: 30px;
`;

export const NanopeleSectionTitle = styled.h3`
  font-size: 70px;
  text-align: center;
  line-height: 80px;
  margin-bottom: 20px;
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
  margin-top: -50px;
  z-index: 50;
`;

export const NanopeleSeam = styled.div`
  display: flex;
  width: 100%;
  margin-top: -50px;
  z-index: 50;
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
