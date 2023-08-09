import { useLocation, useNavigate } from 'react-router-dom';
import './App.css';
import React, { useContext } from 'react'
import StoreData from './Store';

function EditStudent() {
    const ContextData=useContext(StoreData);
    const IndexValue=useLocation().state.data;
    console.log(ContextData)
   const updateObj={
        Name:ContextData.stuName[IndexValue].Name,
        Age:ContextData.stuName[IndexValue].Age,
        Course:ContextData.stuName[IndexValue].Course,
        Batch:ContextData.stuName[IndexValue].Batch
    }
    const handleChange=(ev)=>{
   updateObj[ev.target.name]=[ev.target.value]
    }
    const handleClick=()=>{
        ContextData.stuName[IndexValue]=updateObj;
        Navi('/student')
    
    }
    const Navi=useNavigate();
    
    console.log(IndexValue)
    
  return (
    <div>
      <h1>Edit Student Details</h1>
      <form action=''>
      <label htmlFor="name">Name</label>
      <input type='text' id='name' placeholder={ContextData.stuName[IndexValue].Name} name="Name" onChange={handleChange}/>
      <label htmlFor='age'>Age</label>
       <input type='text' id='age' placeholder={ContextData.stuName[IndexValue].Age}  name="Age"  onChange={handleChange}/>
      <br/><label htmlFor='course'>Course</label> 
      <input type='text' id='course' placeholder={ContextData.stuName[IndexValue].Course} name="Course"  onChange={handleChange}/>
      <label htmlFor='batch'>Batch</label> 
      <input type='text' id='batch' placeholder={ContextData.stuName[IndexValue].Batch} name="Batch"  onChange={handleChange}/>
      <br/>
      <button onClick={()=>Navi('/Student')}>Cancel</button>
      <button type="button" onClick={handleClick}>Update Details</button>
      </form>
    </div>
  )
}

export default EditStudent
