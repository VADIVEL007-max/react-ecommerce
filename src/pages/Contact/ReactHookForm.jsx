import React from 'react'
import { useForm } from "react-hook-form"
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod'; // or 'zod/v4'

const ReactHookForm = () => {

const schema = z.object({
  name: z.string().min(2, { message: 'Required' }),
  email: z.string().email("invalid email pls enter correct  syn").min(10),

});
   const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });


  const HandleSubData=( data)=>{
    console.log("data",data);
  }

  
  return (
  <div>
        <form  onSubmit={handleSubmit(HandleSubData)}className='p-4 h-screenflex flex-col space-y-7  lg:w-[90%] md:w-[40%] justify-center items-center'>
            <h1 className=' text-center font-bold text-2xl'> React Hook Login paeg</h1>
            <div className='flex flex-col gap-3'>
                <label htmlFor="name"> Name :</label>
                <input type="text" id='name' name='name'  className=" px-1 py-2 border-solid-12pxshadow bg-green-100 pl-1 rounded-lg"{...register("name")}
                />
                {errors.name?.message && <p>{errors.name?.message}</p>}
            </div>

            <div className='flex flex-col gap-3'>
                <label htmlFor="email"> Email :</label>
                <input type="text" id='email' name='email'  className=" px-1 py-2 border-solid-12pxshadow bg-green-100 pl-1 rounded-lg"{...register("email")}
                />
                {errors.email?.message && <p>{errors.email?.message}</p>}
            </div>

            <div className='text-center'>
                <button className='px-6 py-2  bg-green-600 rounded-lg outline-none  text-white font-bold'> Submit</button>
            </div>

            <div>
                
            </div>

        </form>
    </div>
    
  )
}

export default ReactHookForm;