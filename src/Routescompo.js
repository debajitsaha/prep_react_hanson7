import React, { useState } from 'react'
import {BrowserRouter, NavLink, Route, Routes} from 'react-router-dom';
import Home from './Home';
import Student from './Student';
import Contact from './Contact';
import StoreData from './Store';
import AddNewStudent from './AddNewStudent';
import EditStudent from './EditStudent'
import './App.css';
function Routescompo() {
    const [studentData, setStudentData]=useState([
        {Name:"Debajit",Age:23,Course:'MERN', Batch:"Ea23"},
        {Name:"Ram",Age:22,Course:'MEAN', Batch:"EA22"},
        {Name:"Krishna",Age:24,Course:'HTML', Batch:"Ea24"},
        {Name:"Dhoni",Age:25,Course:'Javascript', Batch:"EA25"},
        {Name:"Radha",Age:26,Course:'CSS', Batch:"EA21"},
        {Name:"Rukhmuni",Age:20,Course:'Python', Batch:"EA20"}
    ])
  return (
    <div>
      <BrowserRouter>
      <div className='parent'>
      <NavLink to={'/'} className='navbar'>Home</NavLink>
      <NavLink to={'/Student'} className='navbar'>Student</NavLink>
      <NavLink to={'/Contact'} className='navbar'>Contact</NavLink>

      </div>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/Student' element={
            <StoreData.Provider value={{stuName :studentData,updateStu:setStudentData} }>
                <Student/>
            </StoreData.Provider>
        }></Route>
        <Route path='/Contact' element={<Contact/>}></Route>
        <Route path='/newStudent' element={<StoreData.Provider value={{stuName :studentData, updateStu:setStudentData} }>
                <AddNewStudent/>
            </StoreData.Provider>}></Route>
            <Route path='/editStudent' element={<StoreData.Provider value={{stuName :studentData,updateStu:setStudentData} }>
                <EditStudent/>
            </StoreData.Provider>}></Route>
      </Routes>
      
      </BrowserRouter>
      
    </div>
  )
}

export default Routescompo;
