import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

// Once App exists, import it and render it inside StrictMode.
createRoot(document.getElementById('root')!).render(
  <StrictMode />,
)
