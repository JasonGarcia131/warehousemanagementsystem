import React from 'react'
import Nav from '../components/Nav'
import CrudCards from '../components/CrudCards'

const Inventory = () => {
  return (
    <div className='flex flex-row'>
            <CrudCards 
                header='Inventory' 
                cardTitle1='View All Inventory' 
                cardTitle2='Add Inventory' 
                cardTitle3='Update Inventory'
                cardTitle4='Delete Inventory' 
            />
        </div>
  )
}

export default Inventory