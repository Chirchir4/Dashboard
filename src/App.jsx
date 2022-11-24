import { useEffect, useState } from 'react'
import './App.css'
import { TooltipComponent } from '@syncfusion/ej2-react-popups'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import {FiSettings} from 'react-icons/fi'

function App() {
  return (
    <div>
      <BrowserRouter>
      <div className='flex relative dark:bg-main-dark-bg'>
        <div className='fixed right-4 bottom-4' style={{zIndex:1000}}>
<TooltipComponent content="Settings" position='Top'>
  <button> <FiSettings/> </button>
</TooltipComponent>
        </div>
      </div></BrowserRouter>
      <p>lllll</p>

    </div>
  )
}

export default App
