import React from 'react';

import marca from 'assets/logo/marca_erica.png';

import {
  Container,
  ContentWrapper,
  Brand,
} from './PageLoading.style';

const PageLoading = () => (
  <Container>
    <ContentWrapper>
      <Brand src={marca} alt="" />
    </ContentWrapper>
  </Container>
);

export default PageLoading;
