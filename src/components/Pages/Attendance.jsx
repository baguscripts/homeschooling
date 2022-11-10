import { Check, CheckBox } from '@mui/icons-material';
import React, { useState } from 'react'

function Attendance() {
  const[admin,setadmin]=useState('');
  const[fullname,setFullname]=useState('');
  const[email,setemail]=useState('');
  const[phone,setphone]=useState('');
  const[address,setaddress]=useState('');
  const[Gender,setGender]=useState('');

  const Attendance_DATA=[
    {
      id:"1",
      name:"manu",
      classId:"12",
  status:"absent"      
    },
    {
      id:"2",
      name:"manu",
      classId:"12",
  status:"absent"      
    },
    {
      id:"3",
      name:"manu",
      classId:"12",
  status:"absent"      
    },
    {
      id:"4",
      name:"manu",
      classId:"12",
  status:"absent"      
    },
    {
      id:"5",
      name:"manu",
      classId:"12",
  status:"absent"      
    },
    {
      id:"6",
      name:"manu",
      classId:"12",
  status:"absent"      
    },
    {
      id:"7",
      name:"manu",
      classId:"12",
  status:"absent"      
    },
    {
      id:"8",
      name:"manu",
      classId:"12",
  status:"absent"      
    },
  ]

  const addAdminHandler =()=>{

  }
  return (
    <div>
      <div className='flex'>
      <h1 className='font-bold text-center flex-1 text-3xl text-gray-600 pt-4'>Attendance</h1>
      </div> 
      
      <tr>
        <th>ID</th>
        <th>NAME</th>
        <th>CLASS ID</th>
        <th>STATUS</th>
      </tr>
      
          {Attendance_DATA.map((item,i)=>(
          <tr>
          <td>{item.id}</td>
          <td>{item.name}</td>
          <td>{item.classId}</td>
          <td>{item.status}</td>
        </tr>        
        )
        )}
        
    </div>
  )
}

export default Attendance
