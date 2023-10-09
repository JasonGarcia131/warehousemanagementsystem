import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
    return (
        <nav className=' px-4 h-[100vh] w-[20%] bg-blue-500 text-white'>
            <div className='h-[70%] mt-14 flex flex-col justify-between'>
              <p className='w-full border-b-2 self-start'>Dashboard</p>
            <div className='flex flex-col h-[70%] justify-between text-[2rem]'>
                <Link to='/customers'>Customers</Link>
                <Link to='/salesorders'>Sales Orders</Link>
                <Link>Active Barcodes</Link>
                <Link to='/inventory'>Inventory</Link>
            </div>  
            </div>
            
        </nav>
    )
}

export default Nav