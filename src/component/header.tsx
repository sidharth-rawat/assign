import React from 'react'
import { Link } from 'react-router-dom'
export const Header = () => {
  return (
    <>
    
      
    <div className='border-2 border-b-gray-300 mr-9 justify-between '>
      <p>Research Within Reach
    <div className="float-right">
    <button className='mr-[100px] font-bold text-xl w-7 '> <Link to='/'>Home</Link> </button>
    <button className='mr-[150px] font-bold text-xl w-7'> <Link to='/disclamier'>Disclamier</Link> </button>
    <button className='mr-[100px] font-bold text-xl w-7'> <Link to='/about'>About</Link> </button>
    <button className='mr-[100px] font-bold text-xl w-7'> <Link to='/contact'>Contact</Link> </button>
    

    </div>
    </p>
  
  </div>
  </>
  )
}
