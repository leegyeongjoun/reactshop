import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { StateProvider } from './component/StateProvider';
import reducer, { initialState } from './component/Reducer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //StrictMode란 리액트에서 정해진 자바스크립트 어느 단계 이상에서 가능
  <React.StrictMode>
    <StateProvider initialState={initialState} reducer={reducer}>
  <App />
    </StateProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
