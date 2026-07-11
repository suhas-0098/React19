import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import {createBrowserRouter, RouterProvider} from "react-router";
import Home from './pages/Home'
import ContactUs from './pages/ContactUs'

function App() {

  const router = createBrowserRouter([
    {path:"/pages/home",element:<Home/>},
    {path:"/pages/contactus",element:<ContactUs/>}
  ]);

  return <>
  <h1>Hello from APP</h1>
  <RouterProvider router={router}/>
  </>
  
}

export default App
