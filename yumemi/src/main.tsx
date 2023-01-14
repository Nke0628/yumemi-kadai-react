import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouteConfig } from './routes/RouteConfig'
import './index.css'
import { Container } from './components/layout/Container'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Container>
      <RouteConfig />
    </Container>
  </React.StrictMode>,
)
