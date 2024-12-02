import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'


const AppWrapper = () =>{
  const [isAuthenticated] = useState(false);
  const[] = useState()
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
