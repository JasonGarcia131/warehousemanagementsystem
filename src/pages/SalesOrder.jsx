import React from 'react'
import Nav from '../components/Nav'
import CrudCards from '../components/CrudCards'

const SalesOrder = () => {
  return (
    <div className='flex flex-row'>
    <CrudCards 
        header='Sales Order' 
        cardTitle1='View All Sales Orders' 
        cardTitle2='Add New Sales Order' 
        cardTitle3='Update Existing Sales Order'
        cardTitle4='Delete A Sales Order' 
    />
</div>
  )
}

export default SalesOrder