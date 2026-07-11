import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import {createBrowserRouter, Link, NavLink, Outlet, RouterProvider} from "react-router";
import Home from './pages/Home'
import ContactUs from './pages/ContactUs'
import About from './pages/About'

function App() {

  // const router = createBrowserRouter([
  //   {path:"/",element:<Home/>},
  //   {path:"/pages/about",element:<About/>},
  //   {path:"/pages/contactus",element:<ContactUs/>}
  // ]);

  const myNavStyle = ({isActive}) =>({
    fontWeight: isActive ? "bold" :"normal",
    color: isActive ? "green" : "blue",
    textDecoration : "none",
  })

  return <>
  <h1>Hello from APP</h1>
  {/* <RouterProvider router={router}/> */}
  <nav>
    <NavLink to="/" style={myNavStyle}>Home</NavLink> | {" "}
    <NavLink to="/about" style={myNavStyle}>About</NavLink> | {" "}
    <NavLink to="/contactus" style={myNavStyle}>Contact</NavLink>
  </nav>
  <Outlet/>
  </>
  
}

export default App
