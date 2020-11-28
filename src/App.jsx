import React, { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';

import { withGlobalProvider } from 'contexts/GlobalProvider';
import GlobalStyle from 'styles/GlobalStyle';

import PageLoading from 'components/PageLoading';

import Main from 'routes/Main';

const App = () => (
  <BrowserRouter>
    <Suspense fallback={(<PageLoading />)}>
      <GlobalStyle />
      <Main />
    </Suspense>
  </BrowserRouter>
);

export default withGlobalProvider(App);
