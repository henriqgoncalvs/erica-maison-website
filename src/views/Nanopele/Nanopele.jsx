import React, { useEffect } from 'react';

import Navbar from 'components/Navbar';
import NanopeleContent from 'components/NanopeleContent';
import Footer from 'components/Footer';

const Nanopele = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />
      <NanopeleContent />
      <Footer />
    </>
  );
};

export default Nanopele;
