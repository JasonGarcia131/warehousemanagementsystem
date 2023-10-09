import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {Route, RouterProvider } from 'react-router-dom'
import { createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Customer from './pages/Customer.jsx'
import Inventory from './pages/Inventory.jsx'
import SalesOrder from './pages/SalesOrder.jsx'
import Get from './components/Get.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
      <Route path='/' element={<App/>}>

        <Route exact path='/customers'>
          <Route path='' element={<Customer />} />
          <Route path='all' element={<Get endpoint='customers' />} />
          {/* <Route path='create' element={<Get endpoint='customer/'/>}/>
            <Route path='update' element={<Get endpoint='customer'/>}/>
            <Route path='delete' element={<Get endpoint='customer'/>}/> */}
        </Route>

        <Route exact path='/inventory' >
          <Route path='' element={<Inventory />} />
          <Route path='all' element={<Get endpoint='inventory' />} />
          {/* <Route path='create' element={<Get endpoint='customer/'/>}/>
            <Route path='update' element={<Get endpoint='customer'/>}/>
            <Route path='delete' element={<Get endpoint='customer'/>}/> */}
        </Route>

        <Route exact path='/salesorders'>
          <Route path='' element={<SalesOrder />} />
          <Route path='all' element={<Get endpoint='salesorders' />} />
          {/* <Route path='create' element={<Get endpoint='customer/'/>}/>
            <Route path='update' element={<Get endpoint='customer'/>}/>
            <Route path='delete' element={<Get endpoint='customer'/>}/> */}
        </Route>

      </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
