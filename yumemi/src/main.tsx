import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouteConfig } from './routes/RouteConfig'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouteConfig />
  </React.StrictMode>,
)
