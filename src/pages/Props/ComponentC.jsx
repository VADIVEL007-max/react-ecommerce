import React, { useContext } from 'react'
import Userstore from '../../store/Userstore'



const ComponentC = () => {
 const data=useContext(Userstore)
 console.log("data",data);
 
  
  return (
    <div><h1>ComponentC{data.name}{data.age}{data.dept}</h1>   
    </div>
  )
}

export default ComponentC