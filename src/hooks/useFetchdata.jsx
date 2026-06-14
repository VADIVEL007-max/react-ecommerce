import React, { useEffect, useState } from 'react'

const useFetchdata = () => {

const [ProductData,setProductData]=useState([]);
const[isLoading,setisLoading]=useState(false);
  const Fetchdata= async()=>{
    try{
    setisLoading(true)
    const res= await fetch("https://react-ecommerce-backend-pb9m.onrender.com/products")
    const data=await res.json();
    setProductData(data.data)
    setisLoading(false)
    // console.log(ProductData);
    
  }
  catch(error){
    console.log("Fetch error:", error);
  }
}

  useEffect(()=>{
    Fetchdata();

  },[]);
  return {ProductData,isLoading}
    
  
}

export default useFetchdata