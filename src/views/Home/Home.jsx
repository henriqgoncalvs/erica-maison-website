import React from 'react';

import Navbar from 'components/Navbar';
import HeroHome from 'components/HeroHome';
import NavHome from 'components/NavHome';
import Manifest from 'components/Manifest';
import Footer from 'components/Footer';

const Home = () => (
  <>
    <Navbar />
    <HeroHome />
    <NavHome />
    <Manifest />
    <Footer />
  </>
);

export default Home;
