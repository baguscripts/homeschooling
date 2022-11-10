import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link, useNavigate, useParams } from 'react-router-dom';

function EditStudent() {
    const[student,setstudent]=useState('');
    const[fullname,setFullname]=useState('');
    const[email,setemail]=useState('');
    const[phone,setphone]=useState('');
    const[address,setaddress]=useState('');
    const[DOB,setDOB]=useState('');
    const[gender,setgender]=useState('');
    const[classId,setCLassId]=useState('');

    let navigate = useNavigate();

    const {id} = useParams();

    const students={fullname,email,phone,address,DOB,gender,classId}


    useEffect(() => {
      loadStudents();
    }, []);
  
    const loadStudents = async () => {
      const result = await axios.get(`http://localhost:8080/student/get/${id}`);
      setstudent(result.data);
    };

  const handleEdit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:8080/Student/${id}`, student)
    .then((results)=>{
      setstudent(results.data)
    })
    setstudent(students)
    navigate("/Students")
};

  return (
    <div className='contai'>
      <Link to='/Students'>
        <button className='bg-blue-300 rounded-lg p-2'>student List</button>
        </Link>
        <div className='cont'>
        <form className=''>
                <input
                name='fullname'
                value={fullname}
                placeholder='Full Name'
                onChange={(e)=> setFullname(e.target.value)}
                className='bg-gray-200 text-center  m-2 w-full'              
                />
                <input
                name='email'
                value={email}
                placeholder='Email Address'
                onChange={(e)=> setemail(e.target.value)}
                className='bg-gray-200 text-center  m-2'              
                />
                <input
                name='phone'
                value={phone}
                placeholder='Phone No'
                onChange={(e)=> setphone(e.target.value)}
                className='bg-gray-200 text-center  m-2'              
                />
                <input
                name='address'
                value={address}
                placeholder='Address'
                onChange={(e)=> setaddress(e.target.value)}
                className='bg-gray-200 text-center  m-2'              
                />
                <input
                name='DOB'
                value={DOB}
                placeholder='Date Of Birth'
                onChange={(e)=> setDOB(e.target.value)}
                className='bg-gray-200 text-center  m-2'              
                />
                <input
                name='gender'
                value={gender}
                placeholder='Gender'
                onChange={(e)=> setgender(e.target.value)}
                className='bg-gray-200 text-center  m-2'              
                />
                <input
                name='classId'
                value={classId}
                placeholder='Class Id'
                onChange={(e)=> setCLassId(e.target.value)}
                className='bg-gray-200 text-center  m-2'              
                />
              <button onClick={handleEdit} className='bg-blue-300  p-2 m-2'>Update Student</button>

      </form>  
        </div>
    </div>
  )
}

export default EditStudent