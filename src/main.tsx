import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import Stack from './Stack.tsx'
import Queue from './Queue.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Queue />
  </StrictMode>,
)
