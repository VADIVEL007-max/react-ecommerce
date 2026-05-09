import React, { useState } from 'react'

const NormalForm = () => {

    const[name,setName]=useState("");
    const[email,setEmail]=useState("");
    console.log("name",name);
     console.log("email",email);
    
  return (
    <div>
        <div className='p-4 h-screenflex flex-col space-y-7  lg:w-[90%] md:w-[40%] justify-center items-center'>
            <h1 className=' text-center font-bold text-2xl'> Login pages</h1>
            <div className='flex flex-col gap-3'>
                <label htmlFor="name"> Name :</label>
                <input type="text" id='name' name='name'  className=" px-1 py-2 border-solid-12pxshadow bg-green-100 pl-1 rounded-lg" onChange={(e)=>{
                    setName(e.target.value);
               
                }}
                />
            </div>
            <div className='flex flex-col gap-3'>
                <label htmlFor="email"> Email :</label>
                <input type="text" id='email' name='email'  className=" px-1 py-2 border-solid-12pxshadow bg-green-100 pl-1 rounded-lg"
                onChange={(e)=>{
                    setEmail(e.target.value)
                }} />
            </div>
            <div className='text-center'>
                <button className='px-6 py-2  bg-green-600 rounded-lg outline-none  text-white font-bold'> Submit</button>
            </div>

        </div>
    </div>
  )
}

export default NormalForm