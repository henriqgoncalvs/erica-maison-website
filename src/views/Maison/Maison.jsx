import React, { useEffect } from 'react';

import Navbar from 'components/Navbar';
import MaisonContent from 'components/MaisonContent';
import Footer from 'components/Footer';

const Maison = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />
      <MaisonContent />
      <Footer />
    </>
  );
};

export default Maison;
