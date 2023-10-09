import React from 'react'
import { Link } from 'react-router-dom';

const CrudCards = (props) => {

    const {header, cardTitle1, cardTitle2, cardTitle3, cardTitle4} = props;

    return (
        <div className='w-full h-[100vh] flex flex-col my-4'>
            <h1 className='text-center text-[4rem]'>{header}</h1>
            <main className='w-full m-auto flex flex-row justify-center flex-wrap gap-4 text-[2rem]'>
                <div className='flex flex-row justify-center items-center w-[40%] h-[300px] bg-red-300'>
                    <Link to='all'>{cardTitle1}</Link>
                </div>
                <div className='flex flex-row justify-center items-center w-[40%] h-[300px] bg-blue-300'>
                    <Link to='create'>{cardTitle2}</Link>
                </div>
                <div className='flex flex-row justify-center items-center w-[40%] h-[300px] bg-yellow-300'>
                    <Link to='update'>{cardTitle3}</Link>
                </div>
                <div className='flex flex-row justify-center items-center w-[40%] h-[300px] bg-orange-300'>
                    <Link to='delete'>{cardTitle4}</Link>
                </div>
            </main>

        </div>
    )
}

export default CrudCards