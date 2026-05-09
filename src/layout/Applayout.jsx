import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'
import Userstore from '../store/Userstore'
// import Userstore from '../store/Userstore'

function Applayout() {
  return (<Userstore.Provider value={{ name:"vadivel", age:"23" }}>
        <Navbar/> 
        <Outlet/>
        <Footer/>

  </Userstore.Provider>
        
  )
}

export default Applayout;