import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { styled } from '@mui/system';
import { Provider } from 'react-redux';

import AppRoutes from 'routes';
import store from 'redux/store';

const Wrapper = styled('div')({
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  width: '100%',
  height: '100%'
});

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Wrapper>
        <AppRoutes />
      </Wrapper>
    </Provider>
  </React.StrictMode>
);