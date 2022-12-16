import { TooltipComponent } from '@syncfusion/ej2-react-popups'
import React, { useEffect } from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
import { BsChatLeft } from 'react-icons/bs'
import { FiShoppingCart } from 'react-icons/fi'
import { MdKeyboardArrowDown } from 'react-icons/md'
import { RiNotification3Line } from 'react-icons/ri'
import avatar from '../data/avatar.jpg'
import {Cart,Chat,Notification,UserProfile} from'.'
import { stateContext } from '../contexts/ContextProvider'
import { useContext } from 'react'


const NavButton=({title,dotColor,customFunc,icon,color})=>(
  <TooltipComponent content={title} position='BottomCenter'>
    <button type='button'
     onClick={customFunc} style={{color}} 
     className="relative text-xl rounded-full p-3 hover:bg-light-gray">
      <span style={{background:dotColor}} 
      className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2"/>
      {icon}
      
      
    </button>

  </TooltipComponent>
)


function Navbar() {
  const useStateContext=useContext(stateContext)
  const {activeMenu,setActiveMenu,handleClick,isClicked,setIsClicked,screenSize ,setScreenSize}=useStateContext
  useEffect(()=>{
    const handleResize=()=> setScreenSize(window.innerWidth)
    window.addEventListener('resize',handleResize)
    handleResize()
    return ()=>window.removeEventListener('resize',handleResize)
  }
  ,[])
  useEffect(()=>{
    if(screenSize <= 900){
      setActiveMenu(false)
    }
    else{
      setActiveMenu(true)
    }
  },[screenSize])
  return (
    <div className='flex justify-between p-2 md:mx-6 relative'>
<NavButton title='Menu' 
customFunc={()=>setActiveMenu((prevActiveMenu)=>!prevActiveMenu) } 
color='blue'
 icon={<AiOutlineMenu/>}/>
 <div className='flex'>
 <NavButton title='Cart' 
 customFunc={()=>handleClick('cart')} 
 color='blue'
 icon={<FiShoppingCart/>}/>
  <NavButton title='Chat' 
 customFunc={()=>handleClick('chat')} 
 dotColor='#03C9D7'
 color='blue'
 icon={<BsChatLeft/>}/>
  <NavButton title='Notification' 
 customFunc={()=>handleClick('notification')} 
 dotColor='#03C9D7'
 color='blue'
 icon={<RiNotification3Line/>}/>
 <TooltipComponent 
 content="Profile"
 position='BottomCenter'>
  <div className='flex items-center p-1 gap-2 cursor-pointer hover:bg-light-gray rounded-lg' 
  onClick={()=>handleClick('userProfile')
  }>
    <img 
    className='rounded-full w-8 h-8'
    src={avatar}/>
    <span className='text-gray-400 text-14'> Hi,</span>
    {''}
    <span className='text-gray-400 font-bold ml-1 text-14'>Mike</span>
  <MdKeyboardArrowDown className='text-gray-400 text-14'/>
  </div>

 </TooltipComponent>
 {isClicked.cart && <Cart/>}
 {isClicked.userProfile && <UserProfile/>}
 {isClicked.notification && <Notification/>}
 {isClicked.chat && <Chat/>}
 </div>
 
    </div>
  )
}

export default Navbar