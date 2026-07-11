import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import {createBrowserRouter, Link, Outlet, RouterProvider} from "react-router";
import Home from './pages/Home'
import ContactUs from './pages/ContactUs'
import About from './pages/About'

function App() {

  // const router = createBrowserRouter([
  //   {path:"/",element:<Home/>},
  //   {path:"/pages/about",element:<About/>},
  //   {path:"/pages/contactus",element:<ContactUs/>}
  // ]);

  return <>
  <h1>Hello from APP</h1>
  {/* <RouterProvider router={router}/> */}
  <nav>
    <Link to="/home">Home</Link> | {" "}
    <Link to="/about">About</Link> | {" "}
    <Link to="/contactus">Contact</Link>
  </nav>
  <Outlet/>
  </>
  
}

export default App
