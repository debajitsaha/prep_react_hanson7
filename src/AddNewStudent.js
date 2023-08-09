import React, { useContext } from 'react'
import './App.css';
import StoreData from './Store';
import { useNavigate } from 'react-router-dom';
function AddNewStudent() {
  const Navi=useNavigate()
  const ContextData=useContext(StoreData)
  console.log(ContextData)
  const newStu={
    name:'',
    age:'',
    course:'',
    batch:''
  }
  const handleChange=(e)=>{
    console.log("hello")
   newStu[e.target.name]=e.target.value;
   
  }
  const handleClick=()=>{
    console.log("hi")
ContextData.stuName.push(newStu);
Navi('/student')
  }
  return (
    <div>
      <h1>New Student</h1>
      <form action=''>
      <label htmlFor="name">Name</label>
      <input type='text' id='name' placeholder='Name' name="Name" onChange={handleChange}/>
      <label htmlFor='age'>Age</label>
       <input type='text' id='age' placeholder='Age' name="Age"  onChange={handleChange}/>
     <br/> <label htmlFor='course'>Course</label> 
      <input type='text' id='course' placeholder='Course'name="Course"  onChange={handleChange}/>
      <label htmlFor='batch'>Batch</label> 
      <input type='text' id='batch' placeholder='Batch'name="Batch"  onChange={handleChange}/>
      <button type="button" onClick={handleClick}>Add New Student</button>
      <button onClick={()=>Navi('/Student')}>Cancel</button>
      </form>
       </div>
   
  )
}

export default AddNewStudent
