import React from 'react'
import { useNavigate } from 'react-router-dom'
const NewTask = () =>{
    const navigate = useNavigate()
    navigate('/')
    return(
        <>
       שם משימה: <input/><br/>
       זמן: <input/>
        </>
    )
}
export default NewTask