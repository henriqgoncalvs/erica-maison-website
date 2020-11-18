import styled from 'styled-components';

export const SectionContainer = styled.div`
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const Title = styled.h3`
  font-family: 'Lato', sans-serif;
  font-weight: bold;
  font-size: 16px;
  margin-bottom: 20px;
  opacity: .6;
`;

export const Item = styled.span`
  font-size: 30px;
  font-weight: 300;
  margin-bottom: 2px;
`;

export const ItemLink = styled.a`
  color: rgb(214,214,214);
  text-decoration: none;
  font-size: 30px;
  font-weight: 300;
  display: flex;
  align-items: flex-end;
  
  img {
    transition: all .2s ease-in-out;
  }

  &:hover img {
    margin-bottom: 5px;
    margin-left: 5px;
  }
`;
