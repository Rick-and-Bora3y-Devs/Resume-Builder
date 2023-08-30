import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter , RouterProvider  } from 'react-router-dom'

import Test from './Test.jsx'
import ResumeBuilder from './Pages/ResumeBuilder.jsx'
import Home from './Pages/Home.jsx'
import Resumes from './Pages/Resumes.jsx'
import Error from './Error.jsx'


const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Home />,
      errorElement: <Error/>
    },
    {
      path: '/maker',
      element: <ResumeBuilder/>,
    },
    {
      path: '/resumes',
      element: <Resumes/>
    },
    {
      path: '/test',
      element: <Test/>
    }
  ]
)



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
)
