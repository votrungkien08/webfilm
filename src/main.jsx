import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
// import App from './App.jsx'
import './index.css'
import Login from './pages/Login';
import Dashboard from './pages/Dashboard'
import Aside from './components/Aside';
import Layout from './components/Layout';
import CreateMovie from './components/CreateMovie';
// const router = createBrowserRouter([
//   {
//     path: "/admin",
//     element: <Login/>,
//   },
//   {
//     path: "/",
//     element: <Layout/>,
//     children: [

//       { 
//         path: "/dashboard",element: <Dashboard />
//       },
//       {
//         path: "/createMovie", 
//         element: <CreateMovie/>,
//       },
//       {
//         path: "/aside",
//         element: <Aside/>,
//       },
//     ]
//   },

// ]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <RouterProvider router={router} /> */}
    <App></App>
    
  </StrictMode>,
)
