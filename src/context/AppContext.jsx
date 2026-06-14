import React, { createContext, useEffect, useState } from 'react';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {


    const values={
       name:"peter",
    age:"22",
    dept:"cs"
    }

    const[dataa,SetDatas]=useState([]);
    const Fetchdata= async()=>{
        try{
        
        const res= await fetch("https://react-ecommerce-backend-pb9m.onrender.com/products")
        const data=await res.json();
       SetDatas(data.data)
        
      }
      catch(error){
        console.log("Fetch error:", error);
      }
    }
    
      useEffect(()=>{
        Fetchdata();
    
      },[]);

    return (
        <AppContext.Provider value={{values},{dataa}}>
            {children}
        </AppContext.Provider>
    );
};

export default AppContext;