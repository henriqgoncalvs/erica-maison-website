import React from 'react';
import SectionListItem from './SectionListItem';
import SectionListLink from './SectionListLink';

import {
  SectionContainer,
  Title,
} from './SectionList.style';

const SectionList = ({ title, children }) => (
  <SectionContainer>
    <Title>{title}</Title>
    {children}
  </SectionContainer>
);

SectionList.Item = SectionListItem;
SectionList.Link = SectionListLink;

export default SectionList;
