import React, { useState } from 'react'

function Comment() {

    // var [name,setName]=useState("");
    // var[Comment,setComment]=useState("");


    var [userdata,setUserData]=useState({
        name:"",
        Comment:"",

    })

    const [data,setData]=useState([]);
        console.log("data",data);
    

  return <>
  <div >
    <div className="flex flex-col gap-7">
        <h1 className='flex justify-center font-semibold text-4xl'> Comment:</h1>
        <div className='flex justify-center flex-col max-w-[90%]  lg:w-[75%] p-4 mx-auto gap-4'>
            <label htmlFor="name" className='text-1xl font-bold'>Name:</label>
            <input type="text" name="name" id="name"  className="border shadow bg-green-100 pl-1" placeholder="enter your name"
            onChange={(e)=>{
                // setName(e.target.value);
                // setUserData({name:e.target.value})
                setUserData((prev)=>{
                    return{
                      ...prev,name:e.target.value
                    }
                })
            }}/>
        </div>
        <div className='flex justify-center flex-col max-w-[90%] lg:w-[75%] p-4 mx-auto gap-4'>
           <label htmlFor="name" className='text-1xl font-bold'>Comment:</label>
            <input type="text" name="Comment" id="Comment"  className="border shadow bg-green-100 pl-2" placeholder='Enter your Comment' onChange={(e)=>{
                // setUserData({Comment:e.target.value});

                 setUserData((prev)=>{
                    return{
                      ...prev,Comment:e.target.value
                    }
                })
            }}/>

        </div>
        <div className=' flex justify-center py-3 text-1xl lg:w-[75%] font-bold'>
        <button className='py-2 px-6 rounded-lg bg-green-500 shadow hover:bg-green-300'
         onClick={()=> 
            // setData( ...prev,[userdata])
            setData((prev)=>{
                return [...prev,userdata]

            })
    }> Submit</button>
        </div>
        <div className=' flex  gap-6 pb-4 bg-blue-300'>
            {
                data.map((item,index)=>{
                    return <div key={index}>
                        <h1> {item.name}</h1>
                        <p>{item.Comment}</p>

                    </div>
                    
                })
            }

            {/* {JSON.stringify(userdata)} */}
        </div>
    </div>
  </div>
  </>        
    
  
}

export default Comment;