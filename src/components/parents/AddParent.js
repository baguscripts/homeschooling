import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function AddParent() {
  const[parent,setparent]=useState('');
  const[fullname,setFullname]=useState('');
  const[studentId,setstudentId]=useState('');
  const[email,setemail]=useState('');
  const[phone,setphone]=useState('');
  const[address,setaddress]=useState('');
  const[Proffession,setProffession]=useState('');

  const parents={fullname,studentId,email,phone,address,Proffession}

    // const handleClear=()=>{
    //     setFullname ==="" && setemail ===""&& setphone ==="" && setaddress === "" && setGender ===""
    //   }

    let navigate = useNavigate();


  const addParentHandler = async (e)=>{
    e.preventDefault();
        if(fullname===""||studentId||email===""||phone===""||address===""||Proffession===""){
            alert("all fields are mandatory!")
          }
        setparent(parents)
        await axios.post('url',parent);
        navigate('/Parents'); 
      }

  return (
    <div>
      <form className='justify-between'>
                <input
                name='fullname'
                value={fullname}
                placeholder='Full Name'
                onChange={(e)=> setFullname(e.target.value)}
                className='bg-gray-200 text-center rounded-md m-2'              
                />
                <input
                name='studentId'
                value={studentId}
                placeholder='Student Id'
                onChange={(e)=> setstudentId(e.target.value)}
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
                name='Proffession'
                value={Proffession}
                placeholder='Proffession'
                onChange={(e)=> setProffession(e.target.value)}
                className='bg-gray-200 text-center rounded-md m-2'              
                />
                <button onClick={addParentHandler} className='bg-blue-800 rounded-md p-2 m-2'>Add Parent</button>
 
      </form>  
    </div>
  )
}

export default AddParent
