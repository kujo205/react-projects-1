import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { AppContextProvider } from './context'

ReactDOM.render(
  <AppContextProvider>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </AppContextProvider>,
  document.getElementById('root')
)
