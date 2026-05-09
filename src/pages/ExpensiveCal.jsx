import React, { useState } from 'react'
import { useMemo } from 'react';

const ExpensiveCal = () => {
    const[count,setCount]=useState(0);
    console.log(count);
    const [text,setText]=useState("");




    // const Expensivecall=()=>{
    //     let total=0;
    //     for (let i = 0; i<200000; i++) {
    //         total+=count;    
    //     }
    //     return total;
    // }

    const ExpensiveCall=useMemo(()=>{
        const Expensivecall=()=>{
        let total=0;
        for (let i = 0; i<200000; i++) {
            total+=count;    
        }
        return total;
    }

    },[count])
    

  return (
    <div>Count {count}
    <button onClick={()=>{
        setCount(count+1)
    }}>add</button>


    <div><h1>result:${ExpensiveCall}</h1></div>
    <div>
    <input type="text" id='name' name='name' className=' bg-slate-200' onChange={(e)=>{
        setText(e.target.value)
        console.log(text);
        

    }} />
    </div>
    
    
    
    </div>


    
  )
}

export default ExpensiveCal