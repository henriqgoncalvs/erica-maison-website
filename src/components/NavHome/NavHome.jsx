import React from 'react';

import {
  NavHomeStyled,
  NavButton,
} from './NavHome.style';

const NavHome = () => (
  <NavHomeStyled name="NavHome">
    <NavButton to="/maison">
      O Maison
    </NavButton>
    <NavButton to="/nanopele">
      A Nanopele
    </NavButton>
    <NavButton to="/contato">
      Contato
    </NavButton>
  </NavHomeStyled>
);

export default NavHome;
