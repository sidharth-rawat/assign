import React, { memo } from "react";
import { Link } from "react-router-dom";

const Content = () => {
  return (
    <>
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
        <h3 className="text-2xl text-black">Choose your branch :</h3>
         <div className="mt-2 flex flex-wrap content-center text-center align-top">
          {/* <Link to="/ce"> */}
          <Link to='/ubter/ce/sems'>   <div className="hover:bg-white-100 m-4 w-60 max-w-xs rounded-lg border border-gray-200 bg-white p-6 shadow">
          <h5 className="text-gray-700 mb-2 text-left text-3xl font-bold tracking-tight ">CE/IT</h5>
         <button className="text-left text-xl font-normal text-gray-500"> Computer Science / Information Technology </button>
          </div>
          </Link>

          <div className="hover:bg-white-100 m-4 w-60 max-w-xs rounded-lg border border-gray-200 bg-white p-6 shadow">
          <h5 className="text-gray-700 mb-2 text-left text-3xl font-bold tracking-tight ">EE</h5>
          <p className="text-left text-xl font-normal text-gray-500">Electrical Enginerring</p>
          </div>
          <div className="hover:bg-white-100 m-4 w-60 max-w-xs rounded-lg border border-gray-200 bg-white p-6 shadow">
          <h5 className="text-gray-700 mb-2 text-left text-3xl font-bold tracking-tight ">CHE</h5>
          <p className="text-left text-xl font-normal text-gray-500">Chemical Enginerring</p>
          </div>
          <div className="hover:bg-white-100 m-4 w-60 max-w-xs rounded-lg border border-gray-200 bg-white p-6 shadow">
          <h5 className="text-gray-700 mb-2 text-left text-3xl font-bold tracking-tight ">ARG</h5>
          <p className="text-left text-xl font-normal text-gray-500">Agriculture Enginerring</p>
          </div>
          {/* </Link> */}
        </div>
      </div>
    </>
  );
};

export default memo(Content);
