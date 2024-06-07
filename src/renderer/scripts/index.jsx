import React from 'react'
import ReactDOM from 'react-dom';
import App from './App';
import '../styles/index.css';
import { StateProvider } from './context/ContextProvider';

ReactDOM.render(
  <React.StrictMode>
    <StateProvider>
      <App />
    </StateProvider>
  </React.StrictMode>,
  document.getElementById('root')
);