import styled from 'styled-components';

export const MaisonContentStyled = styled.div`
  margin: 0px auto 100px;
  padding-top: 100px;
  width: 50%;
  max-width: 700px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;

  @media (max-width: 600px) {
    margin: 0px auto;
    padding-top: 70px;
    width: 85%;
  }
`;

export const MaisonContentHeader = styled.h2`
  font-size: 60px;
  font-weight: 400;
  margin-bottom: 30px;

  @media (max-width: 600px) {
    font-size: 85px;
  }
`;
