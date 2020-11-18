import styled from 'styled-components';

export const FooterStyled = styled.div`
  width: 95%;
  max-width: 1300px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 20px auto;
`;

export const Signature = styled.span`
  font-family: 'Lato', sans-serif;
  color:rgb(214, 214, 214);
  font-size: 11px;
  flex-basis: 25%;
  line-height: 20px;

  a {
    text-decoration: none;
    opacity: .6;
    color: rgb(214, 214, 214);

    img {
      width: 13px;
      margin-top: auto;
    }
  }

  a:hover {
    opacity: 1;
  }
`;

export const Logo = styled.img`
  max-width: 140px;
  flex-basis: 50%;
`;

export const LinksWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  flex-basis: 25%;
`;

export const LinkStyled = styled.a`
  font-family: 'Lato', sans-serif;
  font-size: 15px;
  font-weight: 300;
  opacity: .6;
  display: flex;
  align-items: center;
  transition: all .4s ease-in-out;
  text-decoration: none;
  color: rgb(214, 214, 214);
  cursor: pointer;
  margin-bottom: 5px;

  img {
    width: 20%;
  }

  &:hover {
    opacity: 1;
  }
`;
