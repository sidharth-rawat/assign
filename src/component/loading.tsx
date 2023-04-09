import React from 'react'
import { Loader } from './icon'

const Loading = ():JSX.Element => {
  return (
    <>
    <div className="bg-goku h-screen w-screen  flex items-center justify-center ">
    <Loader/>
    </div>
    </>
    
  )
}

export default Loading