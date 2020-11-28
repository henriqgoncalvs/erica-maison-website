import styled from 'styled-components';

import contact1 from 'assets/contact_1.webp';

export const ContactContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  height: 100vh;
  padding-top: 10vh;
  margin-bottom: 50px;

  @media (max-width: 600px) {
    flex-direction: column;
    height: auto;
  }
`;

export const ContactPhotoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
  background: #cfc6c3;
  height: 100%;

  @media (max-width: 600px) {
    width: 100%;
    height: 60vh;
  }
`;

export const ContactPhoto = styled.div`
  background: url(${contact1}) center no-repeat;
  background-size: cover;
  width: 50%;
  height: 60%;

  @media (max-width: 600px) {
    width: 70%;
  }
`;

export const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding: 50px 50px 50px 100px;
  align-items: flex-start;
  justify-content: flex-start;
  width: 50%;
  height: 100%;

  @media (max-width: 600px) {
    padding: 50px 0 0px;
    width: 85%;
  }
`;

export const ContactInfoHeader = styled.h1`
  font-size: 80px;
  font-weight: 400;
  margin-bottom: 40px;
`;

export const ContactInfoItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 30px;
`;

export const ContactInfoItemHeader = styled.h3`
  font-size: 30px;
  font-weight: 400;
  margin-bottom: 10px;
  opacity: .6;
`;

export const ContactInfoItemLink = styled.a`
  color: rgb(214,214,214);
  text-decoration: none;
  font-size: 20px;
  font-weight: 300;
  display: flex;
  align-items: flex-start;
  cursor: pointer;
  
  img {
    transition: all .2s ease-in-out;
  }

  &:hover img {
    margin-left: 5px;
  }
`;
