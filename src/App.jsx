import  {RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css'
import Home from './components/Home';
import About from './components/About';
import Productions from './components/Productions';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import React from 'react';
import Footer from './components/Footer';


const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <div>
        <Navbar/>
        <Home/>
        <Productions/>
        <About/>
        <Contact/>
        <Footer/>
      </div>
    },

    {
      path: '/about',
      element: <div>
      <Navbar/>
      <About/>
      <Footer/>
      </div>
    },

    {
      path: '/productions',
      element: <div>
      <Navbar/>
      <Productions/>
      <Footer/>
      </div>
    },

    {
      path: '/contact',
      element: <div>
        <Navbar/>
        <Contact/>
        <Footer/>
      </div>
    }
  ]
)

function App() {
  
  return (
    <>
       
    <div>
    <RouterProvider router = {router}/>
    </div>
      
    </>
  )
}

export default App;
