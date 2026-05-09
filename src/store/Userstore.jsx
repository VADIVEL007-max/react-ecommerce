import React from 'react'
import { createContext } from 'react'

const Userstore = createContext({
    name:"peter",
    age:"22",
    dept:"cs"
})
export default Userstore;