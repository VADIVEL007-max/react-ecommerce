import React, { useState } from 'react'
 
function Counter() {

    // var value=3;
    var [val,setval]=useState(0);

    var[name,setName]=useState("peter🙋‍♂️❤️❤️");

    var [valid,setValid]=useState(false)

  return <>

  {/* number in usestaete */}
   <div className=' p-10 '>
        <div className=' p-4 rounded-lg w-[22%] flex flex-col gap-6  border bg-slate-200'>
            <h1 className='font-bold text-blue-500'> Counter </h1>
            <div>
                <h1 className='font-bold text-5xl'>{val}</h1>
            </div>
            <div className=' flex justify-start gap-6'>
                <button className='px-5 py-2 rounded-lg bg-green-600 border outline-none' onClick={()=>{
                // value= value+1;
                // console.log("value",val);
                setval(val+1);
                
                }}> +</button>
                <button className='px-5 py-2 rounded-lg bg-red-700 border outline-none' onClick={()=>{
                    setval(val-1);
                }}>-</button>

                <button className='px-5 py-2 rounded-lg bg-blue-700 border outline-none' onClick={()=>{
                    setval(val=0);
                }}>reset</button>
            </div>
        </div>
    </div>
{/* string in local state varible // */}
     <div className=' p-10 '>
        <div className=' p-4 rounded-lg w-[22%] flex flex-col gap-6  border bg-slate-200'>
            <h1 className='font-bold text-blue-500'> string </h1>
            <div>
                <h1 className='font-bold text-5xl'>{name}</h1>
            </div>
            <div className=' flex justify-start gap-6'>
                <button className='px-5 py-2 rounded-lg bg-green-600 border outline-none'onClick={()=>{
                    setName("M-j❤️❤️")
                }}
                >change</button>

                <button className='px-5 py-2 rounded-lg bg-red-700 border outline-none'
                >-</button>


{/* 
                <button className='px-5 py-2 rounded-lg bg-blue-700 border outline-none' onClick={()=>{
                   
                }}>reset</button> */}
            </div>
        </div>
    </div>

    {/* boolean */}
    <div className=' p-10 '>
        <div className=' p-4 rounded-lg w-[22%] flex flex-col gap-6  border bg-slate-200'>
            <h1 className='font-bold text-4xl text-blue-500'> Boolean </h1>
            <div>
                <h1 className='font-bold text-5xl'>{valid?"lights on":"light off"}</h1>
            </div>
            <div className=' flex justify-start gap-6'> 
                <button className={`px-5 py-2 rounded-lg ${valid?"bg bg-green-500":"bg bg-red-600 "} border outline-none`}onClick={()=>{
                    setValid(!valid);
                }}
                >{valid?"off": "on"}</button>

                <button className='px-5 py-2 rounded-lg bg-red-700 border outline-none'
                >-</button>


{/* 
                <button className='px-5 py-2 rounded-lg bg-blue-700 border outline-none' onClick={()=>{
                   
                }}>reset</button> */}
            </div>
        </div>
    </div>
  
  </>
   
}

export default Counter;