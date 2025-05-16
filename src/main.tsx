import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createGlobalStyle } from 'styled-components'
import { Theme } from './styles/index.tsx'

const GlobalStyles = createGlobalStyle`
  body {
    background-color: ${Theme.colors.neutrals.black[100]}
  }
`;

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GlobalStyles />
    <App />
  </StrictMode>,
)
