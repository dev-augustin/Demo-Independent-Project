import React, { useEffect } from 'react'
import { Navigate } from 'react-router-dom'
import { useState } from 'react'

const ProtectedRoute = ({children})=>{
    // if(!user){
    //     return <Navigate to ="/"/>
    // }
    // return children;
    if(localStorage.getItem("token")){
return children;
    }
    return <Navigate to ="/"/>

// const [currentuser, setCurrentUser] = useState(undefined)

// useEffect(()=>{
//     setTimeout()=>{
//         if(localStorage)
//     }
// })
}

export default ProtectedRoute