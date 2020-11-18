import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavbarStyled = styled.div`
  position: fixed;
  width: 100%;
  background: transparent;
  height: 60px;
  z-index: 10000;
`;

export const Logo = styled.img`
  width: 50px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 100;
`;

export const MenuWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 50%;
  right: 2%;
  transform: translateY(-55%);
  cursor: pointer;
  height: 100%;
  opacity: .6;
`;

export const Menu = styled.div`
  width: 70px;
  height: 2px;
  background-color: white;
  z-index: 100;
  position: relative;

  &:after {
    content: '';
    position: absolute;
    top: ${({ menuOpen }) => (menuOpen ? '0px' : '-10px')};
    width: 100%;
    height: 2px;
    background-color: white;
    transition: top .3s ease-in;
  }

  &:before {
    content: '';
    position: absolute;
    top: ${({ menuOpen }) => (menuOpen ? '0px' : '10px')};
    width: 100%;
    height: 2px;
    background-color: white;
    transition: top .3s ease-in;
  }
`;

export const NavbarOpened = styled.div`
  position: fixed;
  z-index: 5000;
  width: 100%;
  height: 100vh;
  background-color: rgba(27,27,27, .9);
  opacity: 0;
  transition: opacity .4s ease-in-out;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const NavOpenLinks = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  height: 70%;
  justify-content: space-between;
`;

export const NavOpenLinkWrapper = styled.div`
  height: auto;
  overflow: hidden;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;

  &:hover a{
    opacity: 1!important;
  }

`;

export const NavOpenLink = styled(Link)`
  font-size: 100px;
  color: rgb(214, 214, 214);
  text-decoration: none;
  text-align: center;
  opacity: .6;
  transition: all .2s ease-in-out;
`;

export const NavOpenFooterLink = styled.a`
  font-family: 'Lato', sans-serif;
  font-size: 15px;
  font-weight: 300;
  margin: 20px auto 0;
  opacity: .6;
  display: flex;
  align-items: center;
  transition: all .2s ease-in-out;
  cursor: pointer;

  img {
    width: 20px;
  }

  &:hover {
    opacity: 1;
  }

`;
