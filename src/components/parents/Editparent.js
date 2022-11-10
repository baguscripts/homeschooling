import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link, useNavigate, useParams } from 'react-router-dom';

function EditParent() {
    const[parent,setparent]=useState({
      fullname:"",
      studentId:"",
      email:"",
      phone:"",
      address:"",
      Proffession:""
    
    });

    const {fullname,studentId,email,phone,address,Proffession}=parent;

    const onInputChange = e =>{
      setparent({...parent,[e.target.name]:e.target.value})
    }

    let navigate = useNavigate();

    const {id} = useParams();

    useEffect(() => {
      loadParents();
    }, []);
  
    const loadParents = async () => {
      const result = await axios.get(`http://localhost:8080/parents/get/${id}`);
      setparent(result.data);
    };

  const handleEdit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:8080/parent/${id}`, parent)
    .then((results)=>{
      setparent(results.data)
    })
    setparent(parent)
    navigate("/Parents")
};

  return (
    <div className=''>
      <Link to='/Parents'>
        <button className='p-2 rounded-lg bg-blue-300'>parents List</button>
        </Link>
        <div className='cont'>
        <form className='justify-between'>
                <input
                name='fullname'
                value={fullname}
                placeholder='Full Name'
                onChange={(e)=> onInputChange(e)}
                className='bg-gray-200 text-center rounded-md m-2'              
                />
                <input
                name='studentId'
                value={studentId}
                placeholder='Student Id'
                onChange={(e)=> onInputChange(e)}
                className='bg-gray-200 text-center rounded-md m-2'              
                />
                <input
                name='email'
                value={email}
                placeholder='Email Address'
                onChange={(e)=> onInputChange(e)}
                className='bg-gray-200 text-center rounded-md m-2'              
                />
                <input
                name='phone'
                value={phone}
                placeholder='Phone No'
                onChange={(e)=> onInputChange(e)}
                className='bg-gray-200 text-center rounded-md m-2'              
                />
                <input
                name='address'
                value={address}
                placeholder='Address'
                onChange={(e)=> onInputChange(e)}
                className='bg-gray-200 text-center rounded-md m-2'              
                />
               
                <input
                name='Proffession'
                value={Proffession}
                placeholder='Proffession'
                onChange={(e)=> onInputChange(e)}
                className='bg-gray-200 text-center rounded-md m-2'              
                />
                <button onClick={handleEdit} className='bg-blue-300 rounded-md p-2 m-2'>Update Parent</button>
 
      </form> 
        </div>
    </div>
  )
}

export default EditParent