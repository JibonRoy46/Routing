import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Header from './Conponents/Header.jsx'
import { createBrowserRouter, Outlet } from 'react-router-dom'
import Footer from './Conponents/Footer.jsx'
import { RouterProvider } from 'react-router'
import About from './pages/About.jsx'
import Projects from './pages/Projects.jsx'
import Services from './pages/Services.jsx'
import Contact from './pages/Contact.jsx'
import Blog from './pages/Blog.jsx'

const Layout =()=>{
  return(
    <div>
      <Header/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

const router = createBrowserRouter([
  {
    path:"/",
    element:<Layout/>,
    children:[
      {
        path:"/",
        element: <App/>
      },
      {
        path:"/about",
        element: <About/>
      },
      {
        path:"/projects",
        element: <Projects/>
      },
      {
        path:"/services",
        element: <Services/>
      },
      {
        path:"/contact",
        element: <Contact/>
      },
      {
        path:"/blog",
        element: <Blog/>
      },

    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
