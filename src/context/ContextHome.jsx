import React, { createContext } from 'react'

export const contextHome = createContext()
const ContextHome = ({ children }) => {
    
    return (
        <contextHome.Provider
            value={{
                
            }}
        >
            {children}
        </contextHome.Provider>
    )
}

export default ContextHome
