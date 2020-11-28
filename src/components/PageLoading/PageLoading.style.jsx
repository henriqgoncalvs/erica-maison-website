import styled, { keyframes } from 'styled-components';

const shineAnimation = keyframes`
  0% {
    opacity: 0;
  }
  30% {
    opacity: 1;
  }
  80% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #1c1c1c;
  overflow: hidden;
`;

export const ContentWrapper = styled.div`
  width: 100vw;
  max-width: 250px;
  margin: 0 auto;
  height: 100vh;
  position: relative;
  overflow: hidden;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Brand = styled.img`
  width: 100%;
  max-width: 100px;
  height: auto;

  animation: ${shineAnimation} 2s infinite;
`;
