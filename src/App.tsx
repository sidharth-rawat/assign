// import logo from './logo.svg';
// import './App.css';
import React, { Suspense } from 'react';
import {Header} from './component/header';
import  Footer  from './component/footer';

import {Content , Home , Disclamir , About,Contact  } from './views'
import Loading from '../src/component/loading'
import Error from './component/error';
import { BrowserRouter ,Route, Routes } from 'react-router-dom';
function App() {
  return (
    <>
    <BrowserRouter>

    <Header/>
    <Suspense fallback={<Loading/>}>
    <Routes>
      <Route path='/ubter' element={<Content/>}/>
      <Route path='/' element={<Home/>} />
      <Route path='/disclamier' element={<Disclamir/>}/>
      <Route path='/*' element={<Error/>}/>
      {/* <Route path='/ubter/ce/year' element={<Year/>}/> */}
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>

    </Routes>
    <Footer/>
    </Suspense>
    </BrowserRouter>
    </>
  );
}

export default App;
