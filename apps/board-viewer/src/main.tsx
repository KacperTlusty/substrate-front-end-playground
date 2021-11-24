import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom';

import { BrowserRouter } from 'react-router-dom';
import {
  connectionReducer,
  SubstrateContextProvider,
} from '@board-substrate/main-board';
import App from './app/app';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';

ReactDOM.render(
  <StrictMode>
    <BrowserRouter>
      <SubstrateContextProvider>
        <App />
      </SubstrateContextProvider>
    </BrowserRouter>
  </StrictMode>,
  document.getElementById('root')
);
