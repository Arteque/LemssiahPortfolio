import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Root from './Pages/Root.tsx'
import Error from './Pages/Error.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import About from './Pages/About.tsx'
import Start from './Pages/Start.tsx'
// import Leistungen from './Pages/Leistungen.tsx'
import Portfolio from './Pages/Portfolio.tsx'
import './index.css'
import './Data/libs/i18next.ts'

const router = createBrowserRouter([
  {
    path:"/",
    element:<Root />,
    errorElement:<Error />,
    children:[
      {
        path:"/",
        element:<Start />
      },
      {
        path:"/uebermich",
        element:<About />
      },
      /*
      {
        path:"/leistungen",
        element:<Leistungen />
      },
      */
      {
        path:"/portfolio",
        element:<Portfolio />
      }
    ]
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
