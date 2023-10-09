import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';

const Get = ({ endpoint }) => {

    const [data, setData] = useState([" "]);

    useEffect(() => {
        fetchData()
    }, []);

    const fetchData = async () => {
        const response = await axios.get(`http://localhost:5000/${endpoint}`)
        setData(response.data[endpoint]);
    }

    let keys = Object.keys(data[0]);

    const mappedTableColumns = keys?.map((column, index) => (
        <td key={index}>{column}</td>
    ))

    const mappedTableData = data?.map((item, index) => (
        <tr key={index} className='border border-black-800'>
            {Object.values(item).map((val) => (
                <td>{val}</td>
            ))}
        </tr>
    ))

    return (
        <div className='w-full'>
            <table className='table-auto'>
                <thead>
                    <tr className='border border-black-800'>
                        {mappedTableColumns}
                    </tr>
                </thead>
                <tbody>
                    {mappedTableData}
                </tbody>
            </table>
        </div>

    )
}

export default Get