import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouteConfig } from './routes/RouteConfig'
import './index.css'
import { Container } from './components/layout/Container'
import { AuthProvider } from './contexts/AuthContext'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <AuthProvider>
      <Container>
        <RouteConfig />
      </Container>
    </AuthProvider>
  </React.StrictMode>,
)
