import React from 'react'
import ComponentC from './ComponentC'



const ComponentB = ({dataa,name,setName}) => {
  return (
    <div>
        <div>
            <h1>ComponentB</h1>
            <button onClick={()=>{
              setInterval(() => {
                 setName("batch-27-MJ") 
              }, 2000);
                 // setName("batch-27-MJ")
            }}> click</button>
            <ComponentC dataa={dataa} name={name}/>
        </div>
    </div>
  )
}

export default ComponentB