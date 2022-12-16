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
    const [activeMenu,setActiveMenu] = useState(true)
  const [isClicked,setIsClicked] = useState(initialState)
  const [screenSize, setScreenSize] = useState(undefined)
  const handleClick=(clicked)=>{
    setIsClicked({ ...initialState,
           [clicked]:true})
  }
  return(
    <stateContext.Provider value={{activeMenu,setActiveMenu,isClicked,setIsClicked,handleClick,screenSize,setScreenSize}}>
{children}
    </stateContext.Provider>
  )

}
// export const UseStateContext = ()=>{useContext(stateContext)}

