import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


function AddStudent() {

  const[student,setstudent]=useState('');
  const[fullname,setFullname]=useState('');
  const[email,setemail]=useState('');
  const[phone,setphone]=useState('');
  const[address,setaddress]=useState('');
  const[DOB,setDOB]=useState('');
  const[gender,setgender]=useState('');
  const[classId,setCLassId]=useState('');

  const students={fullname,email,phone,address,DOB,gender,classId}

  // const handleClear=()=>{
  //     setFullname ==="" && setemail ===""&& setphone ==="" && setaddress === "" && setGender ===""
  //   }
 let navigate = useNavigate();

  const addStudentHandler = async (e)=>{
  e.preventDefault();
      if(fullname===""||email===""||phone===""||address===""||DOB===""||gender===""||classId===""){
          alert("all fields are mandatory!")
        }
      setstudent(students)
      await axios.post('url',student);
     navigate('/Students');
}

 
  return (
    <div>
      <form className=''>
                <input
                name='fullname'
                value={fullname}
                placeholder='Full Name'
                onChange={(e)=> setFullname(e.target.value)}
                className='bg-gray-200 text-center rounded-md m-2'              
                />
                <input
                name='email'
                value={email}
                placeholder='Email Address'
                onChange={(e)=> setemail(e.target.value)}
                className='bg-gray-200 text-center rounded-md m-2'              
                />
                <input
                name='phone'
                value={phone}
                placeholder='Phone No'
                onChange={(e)=> setphone(e.target.value)}
                className='bg-gray-200 text-center rounded-md m-2'              
                />
                <input
                name='address'
                value={address}
                placeholder='Address'
                onChange={(e)=> setaddress(e.target.value)}
                className='bg-gray-200 text-center rounded-md m-2'              
                />
                <input
                name='DOB'
                value={DOB}
                placeholder='Date Of Birth'
                onChange={(e)=> setDOB(e.target.value)}
                className='bg-gray-200 text-center rounded-md m-2'              
                />
                <input
                name='gender'
                value={gender}
                placeholder='Gender'
                onChange={(e)=> setgender(e.target.value)}
                className='bg-gray-200 text-center rounded-md m-2'              
                />
                <input
                name='classId'
                value={classId}
                placeholder='Class Id'
                onChange={(e)=> setCLassId(e.target.value)}
                className='bg-gray-200 text-center rounded-md m-2'              
                />
                      <button onClick={addStudentHandler} className='bg-blue-800 rounded-md p-2 m-2'>Add Student</button>

      </form> 
    </div>
  )
}

export default AddStudent
