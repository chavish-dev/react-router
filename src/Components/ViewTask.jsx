import React from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
const ViewTask = () =>{
 
    
    const {id} = useParams()
    if(id == "2")
     return <Navigate to="/" state={`from ViewTask ${id}`}/>

    return(
        <>
        Task {id}
        </>
    )
}
export default ViewTask