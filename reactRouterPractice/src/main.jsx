import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import ContactUs from './pages/ContactUs.jsx'

const router = createBrowserRouter([
    {
      path:"/",
      element:<App/>, 
      children :[
      {path:"home",element:<Home/>},
      {path:"about",element:<About/>},
      {path:"contactus",element:<ContactUs/>},
      {path :"*",element : <h1>Not Found</h1>}

      ]},
    
  ]);


createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>
)
