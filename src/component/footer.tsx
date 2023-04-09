import React, {memo} from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
    <div className="border-t border-gray-300 py-8 text-center text-sm">

     Powered by Kanchan 🔅.
    <div className="text-black">
      <button> <Link to='/'>Home</Link> </button>
      <button className='ml-2'> <Link to='/disclamier'>Disclamier</Link> </button>
      <button className='ml-2'> <Link to='/contact'>Contact</Link> </button>
      <button className='ml-2'> <Link to='/about'>About</Link> </button>
    </div>
    </div>
    
    </>
  )
}

export default memo(Footer)