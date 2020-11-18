import React, { useEffect } from 'react';

import Navbar from 'components/Navbar';
import ContactContent from 'components/ContactContent';
import Footer from 'components/Footer';

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />
      <ContactContent />
      <Footer />
    </>
  );
};

export default Contact;
