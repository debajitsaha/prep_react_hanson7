import React, { useContext } from 'react'
import StoreData from './Store'
import { Link, useNavigate } from 'react-router-dom';
import './App.css'

function Student() {
    const ContextData=useContext(StoreData);
    console.log(ContextData)
    const Navi=useNavigate()
  return (
    <div>
      <h1 className='h1'>Student Data</h1>
      <button onClick={()=>Navi('/newStudent')}>Add New Student</button>
      <table width='100%'>
        <thead className='heading'>
            <th height='40px'>Name</th>
            <th>Age</th>
            <th>Course</th>
            <th>Batch</th>
            <th>Change</th>
        </thead>
        <tbody>
            {ContextData.stuName.map((item,index)=>{
             return(
            <tr key={index}>
                <td height='50px'>{item.Name}</td>
                <td>{item.Age}</td>
                <td>{item.Course}</td>
                <td>{item.Batch}</td>
                <td><Link to='/editStudent' state={{data:index}}>Edit</Link></td>
            </tr>
            )
             })}
        </tbody>
      </table>
    </div>
  )
}

export default Student
