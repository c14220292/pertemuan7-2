import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ListUser from './ListUser.jsx';
import Counter from './Counter.jsx';
import ListUserPage from './ListUserPage.jsx';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ListUserPage />
  </StrictMode>,
)
