import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Error } from './component/Error.tsx'
import { About } from './pages/About.tsx'
import { Test } from './pages/Test.tsx'
import { Contacts } from './component/Contacts.tsx'
import { ContactDetails } from './component/ContactDetails.tsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/toto",
        element: <>Toto</>
      },
      {
        path: "/about",
        element: <About />
    
      },
      {
        path: "/test",
        element: <Test />
    
      },
      {
        path: "/contacts",
        element: <Contacts />,
        children:[{
          path: "/contacts/:contactId",
          element: <ContactDetails />
        }]
      },
      
    ]
  }
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
