import React,{memo} from 'react'

const Error = () => {
  return (
    <>
    <div className="bg-goku h-screen w-screen  flex items-center justify-center ">
        <h1 className='text-gray-50 font-sans font-bold text-4xl'>404 Not Found . . .😫</h1>
    </div>
    </>
  )
}

export default memo(Error)