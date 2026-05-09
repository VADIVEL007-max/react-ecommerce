import React, { useState } from 'react'
import ComponentB from './ComponentB'


const ComponentA = () => {
    const dataa="MJ"
const[name,setName]=useState("batch 26");

  return (
    <div>
        <div>
           <h1>ComponentA {dataa}{name}</h1>
            <ComponentB dataa={dataa} setName={setName} name={name}/>
        </div>
    </div>
  )
}

export default ComponentA