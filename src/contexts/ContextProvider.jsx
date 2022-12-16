import { useContext, useState } from "react"
import { createContext } from "react"

  export const stateContext=createContext()

 const initialState={
  cart:false,
  userProfile:false,
  chat:false,
  userNotification:false

 }
 export const ContextProvider=({children})=>{
    const [activeMenu,setActiveMenu]=useState(true)
  return(
    <stateContext.Provider value={{activeMenu,setActiveMenu}}>
{children}
    </stateContext.Provider>
  )

}
// export const UseStateContext = ()=>{useContext(stateContext)}

