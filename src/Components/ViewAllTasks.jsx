import React from 'react'
import { Link } from 'react-router-dom'
const ViewAllTasks = () =>{
    const arr = [1, 2, 3]
    return(
        <>
         {
                arr.map((item) => {
                    return (
                        <>
                            <div>
                                {/* task {item}<br/> */}
                                <Link to={`/tasks/${item}`}>task {item}</Link>
                            </div>
                        </>
                    )
                })
            }
        </>
    )
}
export default ViewAllTasks