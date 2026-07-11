import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import ContactUs from './pages/ContactUs.jsx'
import NotFound from './pages/NotFound.jsx'
import { RedirectPage } from './pages/RedirectPage.jsx'

const router = createBrowserRouter([
    {
      path:"/",
      element:<App/>, 
      errorElement:<NotFound/>,
      children :[
      {path:"/",element:<Home/>},
      {path:"about",element:<About/>},
      {path:"contactus",element:<ContactUs/>},
      {path:"*",element:<NotFound/>},
      {path:"home",element:<RedirectPage/>},

      ]},
    
  ]);


createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>
)
