import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router';
import { ClerkProvider } from '@clerk/clerk-react'

import 'bootstrap/dist/css/bootstrap.min.css'

import './index.css'


// Import Publishable Key
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

// Import clerk auth related environment
const SIGN_IN_URL = import.meta.env.VITE_CLERK_SIGN_IN_URL
const SIGN_UP_URL = import.meta.env.VITE_CLERK_SIGN_UP_URL

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ClerkProvider 
      publishableKey={PUBLISHABLE_KEY} 
      signInUrl={SIGN_IN_URL}
      signUpUrl={SIGN_UP_URL}
      afterSignOutUrl="/">
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ClerkProvider>
  </StrictMode>,
)
