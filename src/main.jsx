import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css' 
import GlobalStateProvider from './Context/Context.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(

  <GlobalStateProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  </GlobalStateProvider>

)
