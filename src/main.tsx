import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import Global from './assets/styles/global.style.ts'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Global />
    <App />
  </React.StrictMode>,
)
