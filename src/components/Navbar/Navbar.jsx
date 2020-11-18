/* eslint-disable no-return-assign */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { Link } from 'react-router-dom';

import marcaErica from 'assets/logo/marca_erica.png';
import arrowTopRight from 'assets/icons/arrow-top-right.svg';

import {
  NavbarStyled,
  Logo,
  MenuWrapper,
  Menu,
  NavbarOpened,
  NavOpenLinkWrapper,
  NavOpenLinks,
  NavOpenLink,
  NavOpenFooterLink,
} from './Navbar.style';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [opacityMenuOpen, setOpacityMenuOpen] = useState(false);

  let navRef = useRef(null);
  let link1 = useRef(null);
  let link2 = useRef(null);
  let link3 = useRef(null);
  let linkFooter = useRef(null);

  useEffect(() => {
    gsap.from(navRef, 0.6, {
      delay: 0.3,
      duration: 1,
      ease: 'power3.out',
      y: -100,
    });
  }, [navRef]);

  useEffect(() => {
    if (menuOpen) {
      gsap.from([link1, link2, link3, linkFooter], 0.2, {
        delay: 0.3,
        ease: 'power3.out',
        y: 110,
        stagger: {
          amount: 0.6,
        },
      });
    }
  }, [menuOpen, link1, link2, link3, linkFooter]);

  const toggleMenu = () => {
    if (menuOpen) {
      setOpacityMenuOpen(false);
      setTimeout(() => {
        setMenuOpen(false);
      }, 300);
    } else {
      setMenuOpen(true);
      setTimeout(() => {
        setOpacityMenuOpen(true);
      }, 100);
    }
  };

  return (
    <>
      <NavbarStyled ref={(el) => (navRef = el)}>
        <Link to="/">
          <Logo src={marcaErica} />
        </Link>

        <MenuWrapper onClick={toggleMenu}>
          <Menu menuOpen={menuOpen ? opacityMenuOpen : menuOpen} />
        </MenuWrapper>
      </NavbarStyled>

      {menuOpen && (
        <NavbarOpened
          style={{
            opacity: opacityMenuOpen ? 1 : 0,
          }}
        >

          <NavOpenLinks>
            <NavOpenLinkWrapper>
              <NavOpenLink to="/maison" ref={(el) => (link1 = el)}>
                O Maison
              </NavOpenLink>
            </NavOpenLinkWrapper>

            <NavOpenLinkWrapper>
              <NavOpenLink to="/nanopele" ref={(el) => (link2 = el)}>
                A Nanopele
              </NavOpenLink>
            </NavOpenLinkWrapper>

            <NavOpenLinkWrapper>
              <NavOpenLink to="/contato" ref={(el) => (link3 = el)}>
                Contato
              </NavOpenLink>
            </NavOpenLinkWrapper>

            <NavOpenLinkWrapper>
              <NavOpenFooterLink ref={(el) => (linkFooter = el)}>
                INSTAGRAM
                <img src={arrowTopRight} alt="Visitar Instagram" />
              </NavOpenFooterLink>
            </NavOpenLinkWrapper>
          </NavOpenLinks>
        </NavbarOpened>
      )}
    </>
  );
};

export default Navbar;
