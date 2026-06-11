import { createContext, useEffect, useState } from "react";

export const GlobalContext = createContext()

const GlobalProvider = ({ children }) =>{

    const [user, setUser] = useState(null)

    useEffect(()=>{
        if(localStorage.getItem("user")){
            setUser(localStorage.getItem("user"))
        }else{
            setUser(null)
        }
    },[])

    const logout = ()=>{
        setUser(null)
        localStorage.removeItem("user")
    }
    


    return(
        <GlobalContext.Provider value={{user, setUser, logout }}>
            {children}
        </GlobalContext.Provider>
    )
}

export default GlobalProvider