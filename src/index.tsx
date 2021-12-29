import * as React from 'react';
import { Provider } from 'react-redux';
import 'antd/dist/antd.css';
import './index.scss';
import store from './reducer';
import axios from 'axios';
import ReactDOM from 'react-dom';
import { AxiosProvider } from 'react-axios-helpers';
import reportWebVitals from './reportWebVitals';
import RoutedApp from './routes/routes';
import setupAxiosInterceptors from './application/config/axios-interceptor';
import { returnVoidDummyFn } from './type/types';
import { BrowserRouter } from 'react-router-dom';

const customAxiosInstance = axios.create();
setupAxiosInterceptors(() => returnVoidDummyFn());

ReactDOM.render(
  <Provider store={store}>
    <AxiosProvider instance={customAxiosInstance}>
      <BrowserRouter>
        <RoutedApp />
      </BrowserRouter>
    </AxiosProvider>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
