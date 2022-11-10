import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function AddTeacher() {
    const[teacher,setteacher]=useState('');
    const[fullname,setFullname]=useState('');
    const[email,setemail]=useState('');
    const[phone,setphone]=useState('');
    const[address,setaddress]=useState('');
    const[Gender,setGender]=useState('');

    const teachers={fullname,email,phone,address,Gender}

    // const handleClear=()=>{
    //     setFullname ==="" && setemail ===""&& setphone ==="" && setaddress === "" && setGender ===""
    //   }

    let navigate = useNavigate();

   
    const addTeacherHandler = async(e)=>{
        e.preventDefault();
        if(fullname===""||email===""||phone===""||address===""||Gender===""){
            alert("all fields are mandatory!")
          }
        setteacher(teachers)
        await axios.post('url',teacher);
        navigate('/Teachers');     } 

  return (
    <div>
       <div className='flex'>
      <h1 className='font-bold text-center flex-1 text-3xl text-gray-600 pt-4'>TEACHERS</h1>
      </div> 
      <form className='justify-between'>
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
                name='gender'
                value={Gender}
                placeholder='Gender'
                onChange={(e)=> setGender(e.target.value)}
                className='bg-gray-200 text-center rounded-md m-2'              
                />
                    <button onClick={addTeacherHandler} className='bg-blue-300 rounded-md p-2 m-2'>Add Teacher</button>
 
      </form>  
    </div>
  )
}

export default AddTeacher
