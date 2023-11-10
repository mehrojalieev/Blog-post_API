import React, {createContext, useContext, useReducer, useState} from 'react'

export const AppContext = createContext(null)


const AppProvider = ({children}) => {
    const [token, setToken] = useState(localStorage.getItem("user-token") || "")   
  return (
    <AppContext.Provider value={{token, setToken}}>
            {children}
    </AppContext.Provider>
  )
}   

export default AppProvider