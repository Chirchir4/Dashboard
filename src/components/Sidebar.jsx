import React from 'react'
import{SiShopware} from 'react-icons/si'
import {MdOutlineCancel} from 'react-icons/md'
import{TooltipComponent } from '@syncfusion/ej2-react-popups'
import { Link, NavLink } from 'react-router-dom'
import {links} from '../data/dummy'
import { useState } from 'react'
import { stateContext } from '../contexts/ContextProvider'
import { useContext } from 'react'

function Sidebar() {
  const useStateContext= useContext(stateContext)
  const {activeMenu,setActiveMenu,screenSize}=useStateContext
  const activeLink= 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-blue-500 text-md m-2'
  const normalLink='flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2 '
 const handleCloseSideBar=()=>{
  if(activeMenu && screenSize <= 900 ){
    setActiveMenu(false)
  }
 }
  return (
    <div className='ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10'>
      {activeMenu &&(
        <>
        <div className='flex justify-between items-center'>
<Link to ="/" onClick={()=>{handleCloseSideBar}} className="items-center  tracking-tight mt-4 gap-3 text-xl font-extrabold  ml-3 flex  dark:text-white text-slate-900">
  <SiShopware/><span> Shoppy</span>
</Link>
<TooltipComponent content="Menu" position="BottomCenter">
  <button type='button' onClick={()=>{ setActiveMenu((prevActiveMenu)=>!prevActiveMenu)}} className="text-xl mt-4 md:hidden">  
     <MdOutlineCancel/>
   </button>
</TooltipComponent>
        </div>
        <div className='mt-10'>
          {
            links.map((items)=>(
              <div key={items.title}>
                <p className='uppercase mt-4 text-gray-600 m-3'>
                  {items.title}
                </p>
                {items.links.map((link)=>(
                  <NavLink
                  to={`/${link.name}`}
                  key={link.name}
                  onClick={handleCloseSideBar}
                  className={({isActive})=> isActive ? activeLink :normalLink}
                  >
                    {link.icon}
                    <span className='capitalize'> 
                    {link.name}</span>

                  </NavLink>
                ))}
                </div>
              )

            )
          }

        </div>
        </>
      )}
    </div>
  )
}

export default Sidebar