import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './style.css'

import { HeroUIProvider } from '@heroui/react'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HeroUIProvider>
      <App className="w-screen h-screen"/>
    </HeroUIProvider>
  </React.StrictMode>,
)
