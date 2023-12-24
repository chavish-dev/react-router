import React from 'react'
import { useLocation} from 'react-router-dom'
const Home = () =>{
   

const getData =async ()=>{
    debugger
    const res =await fetch("https://jsonplaceholder.typicode.com/albums")
    if(res.ok)
    {
        let data = await res.json()
        console.log(data);
    }
}
    
getData()
    return(
        <>
        Home
        
        </>
    )
}
export default Home