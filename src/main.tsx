import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Infosrosa from "./Infosrosa.tsx"
import Infosfem from "./Infosfem.tsx"
import Infosprinc from "./Infosprinc.tsx"
import CompraFinalizada from "./comprafinalizada.tsx"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    },   
    {
    path : "Infosrosa",
    element: <Infosrosa/>,
  },
  {
    path : "Infosfem",
    element: <Infosfem/>
  },
  {
    path : "Infosprinc",
    element: <Infosprinc/>
  },
  {
    path : "CompraFinalizada",
    element: <CompraFinalizada/>
  }
]);


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
