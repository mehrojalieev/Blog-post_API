import { createContext, useReducer, useContext } from "react";


const AppContext = createContext()

export const AppProvider = ({ children }) => {
    return (
        <AppContext.Provider value={useReducer(reduucer, {})}>
            {children}
        </AppContext.Provider>
    )
}


export const useValue = () => useContext(AppContext)