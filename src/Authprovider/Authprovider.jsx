import {  createContext, useState } from "react";

 
 export const Authcontext = createContext(null)

const Authprovider = ({children}) => {

    const [user , setUser] = useState(null)
    const [loading , setLoading] = useState(true)
    const [error , Seterror] = useState(false)
    const [login , setLogin] = useState(false)
   
    const loginWIthGoogle = (email , password , name) => {
        console.log('Login successfully !')
    }

    const logout = () => {
        console.log('logout account !')
    }

   
    const authdata = {
        login,
        logout,
        user
    }
    
    return(
        <Authcontext.Provider value={authdata}>
            {children}
        </Authcontext.Provider>
    )
    
}


export default Authprovider