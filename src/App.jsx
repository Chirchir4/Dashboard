import { useEffect, useState } from 'react'
import './App.css'
import { TooltipComponent } from '@syncfusion/ej2-react-popups'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import {FiSettings} from 'react-icons/fi'
import{Navbar,Footer,Sidebar,ThemeSettings} from './components'
import {Area,Bar,Financial,Line,Pie,Pyramid,Stacked ,Editor,Calendar, Ecommerce, Employees, Orders,Kanban ,ColorPicker,ColorMapping,Customers} from './pages'
import { stateContext } from './contexts/ContextProvider'
import { useContext } from 'react'


function App() {
  const useStateContext= useContext(stateContext)
  const {activeMenu}=useStateContext
  return (
    <div>
      <BrowserRouter>
      <div className='flex relative dark:bg-main-dark-bg'>
        <div className='fixed right-4 bottom-4' style={{zIndex:'1000'}}>
<TooltipComponent content="Settings" position='Top'>
  <button type="button"  style={{ background:'blue', borderRadius: '50%' }} className="text-3xl text-white p-3 hover:drop-shadow-xl hover:bg-green-900"> 
    <FiSettings />
     </button>
</TooltipComponent>
        </div>
        {
          activeMenu ?(
          <div className='w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white  '>
            <Sidebar/>
          </div>
          ):(
            <div className='w-0 dark:secondary-dark-bg'>
              <Sidebar/>
            </div>
          )
        }
        <div className=  {`dark:bg-main-bg bg-main-bg min-h-screen w-full ${  activeMenu ? 'md:ml-72':'flex-2'}`}
      >
        <div className='fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full'></div>
       <Navbar/>
        </div>
        <div>
        <Routes>
          {/* Dashboard */}
          <Route path='/' element={<Ecommerce/>}/>
          <Route path='/ecommerce' element={<Ecommerce/>}/>
          {/* Pages */}
          <Route path='/orders' element={<Orders/>}/>
          <Route path='/employees' element={<Employees/>}/>
          <Route path='/customers' element={<Customers/>}/>
          {/* Apps */}
          <Route path='/kanban' element={<Kanban/>}/>
          <Route path='/editor' element={<Editor/>}/>
          <Route path='/calendar' element={<Calendar/>}/>
          <Route path='/color-picker' element={<ColorPicker/>}/>

          {/* Charts */}
          <Route path='/line' element={<Line/>}/>
          <Route path='/area' element={<Bar/>}/>
         <Route path='/pie' element={<Pie/>}/>
         <Route path='/area' element={<Area/>}/>
          <Route path='/financial' element={<Financial/>}/>
          <Route path='/color-mapping' element={<ColorMapping/>}/>
          <Route path='/pyramid' element={<Pyramid/>}/>
          <Route path='/stacked' element={<Stacked/>}/>
        </Routes>
      </div>
      </div>
      </BrowserRouter>
    </div>
    
  )
}

export default App
