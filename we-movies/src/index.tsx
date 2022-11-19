import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { styled } from '@mui/system';

import AppRoutes from 'routes';

const Wrapper = styled('div')({
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column'
});

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Wrapper>
      <AppRoutes />
    </Wrapper>
  </React.StrictMode>
);