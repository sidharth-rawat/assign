import React, { memo } from 'react'

const Year = () => {
  return (
    <>
      <div>
        <div className="mx-auto w-full bg-goku">
            <div className="container mx-auto max-w-7xl py-12 px-6">
            <p className="text-lg text-slate-50">
                Previous year Question Papers,Notes & Study Guides for{" "}
            </p>
            <h1 className="text-3xl font-semibold text-slate-50">
                Uttarakhand Board of Technical Education, formerly Board of
                Technical Education (UBTER)
            </h1>

            <p className="text-lg text-slate-50">
                {" "}
                We are building a community of students across UBTER university.
                Come be a part of it! 🥳
            </p>
            </div>
        </div>
    
    
    
      <div className="container mx-auto max-w-7xl py-12 px-6">
        <h3 className="text-2xl text-black">Choose your Year :</h3>
             <div className="mt-2 flex flex-wrap content-center text-center align-top">
          {/* <Link to="/ce"> */}
              <div className="hover:bg-white-100 m-4 w-60 max-w-xs rounded-lg border border-gray-200 bg-white p-6 shadow">
              <h5 className="text-gray-700 mb-2 text-left text-3xl font-bold tracking-tight ">1st</h5>
              <p className="text-left text-xl font-normal text-gray-500">First Year </p>
            </div>
    

            <div className="hover:bg-white-100 m-4 w-60 max-w-xs rounded-lg border border-gray-200 bg-white p-6 shadow">
            <h5 className="text-gray-700 mb-2 text-left text-3xl font-bold tracking-tight ">2nd</h5>
            <p className="text-left text-xl font-normal text-gray-500">Second Year</p>
            </div>
            <div className="hover:bg-white-100 m-4 w-60 max-w-xs rounded-lg border border-gray-200 bg-white p-6 shadow">
            <h5 className="text-gray-700 mb-2 text-left text-3xl font-bold tracking-tight ">3rd</h5>
            <p className="text-left text-xl font-normal text-gray-500">Final Year </p>
            
            </div>
        </div>
        </div>
          </div>
    </>
  )

}

export default memo(Year)