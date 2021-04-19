import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Motor } from "@motor-js/core"

ReactDOM.render(
  <React.StrictMode>
    <Motor
      config={{
        host: "sense-demo.qlik.com", // Qlik Sense Host
        secure: true, // Whether your host is secure of not (HTTPS / HTTP)
        port: 443, // Qlik Sense site port
        prefix: "", // Prefix
        appId: "133dab5d-8f56-4d40-b3e0-a6b401391bde", // Application Id*/
          /*host: 'qap.sebrae.com.br',
          secure: true,
          port: null,
          prefix: null,
          appId: 'c66a7498-fbbf-4f81-8400-ca8f6446c47b',*/
      }}
    >
      <App />
    </Motor>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
