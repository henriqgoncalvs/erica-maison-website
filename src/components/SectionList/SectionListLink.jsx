import React from 'react';

import {
  ItemLink,
} from './SectionList.style';

const SectionListLink = ({ children, link }) => (
  <ItemLink href={link}>{children}</ItemLink>
);

export default SectionListLink;
