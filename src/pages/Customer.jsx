import React from 'react'
import Nav from '../components/Nav'
import CrudCards from '../components/CrudCards'

const Customer = () => {
    return (
        <div className='flex flex-row'>
            <CrudCards 
                header='Customers' 
                cardTitle1='View All Customers' 
                cardTitle2='Add New Customer' 
                cardTitle3='Update Existing Customer'
                cardTitle4='Delete A Customer' 
            />
        </div>
    )
}

export default Customer