import React from 'react'
import { Link, Outlet } from 'react-router-dom'
const Tasks = () => {
  
    return (
        <>
            <Link to={'/tasks/new'}>new</Link><br />
           
            <br />
            <Outlet />
        </>
    )
}
export default Tasks