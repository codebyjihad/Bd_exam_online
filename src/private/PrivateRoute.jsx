import React, { useContext } from 'react'
import { Authcontext } from '../Authprovider/Authprovider'
import { Navigate } from 'react-router'

const PrivateRoute = ({children}) => {
    const {login , user} = useContext(Authcontext)
    if(!login){
        return <div>Loading....</div>
    } 

    if(!user){
        return <Navigate to='/login' state={{from:location}} replace/>
    }

  return children
}

export default PrivateRoute