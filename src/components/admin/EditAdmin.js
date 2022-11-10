import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';

function EditAdmin() {
    const[admin,setadmin]=useState('');
    const[fullname,setFullname]=useState('');
    const[email,setemail]=useState('');
    const[phone,setphone]=useState('');
    const[address,setaddress]=useState('');
    const[Gender,setGender]=useState('');

    const admins={fullname,email,phone,address,Gender}


    // const handleClear=()=>{
    //     setFullname ==="" && setemail ===""&& setphone ==="" && setaddress === "" && setGender ===""
    //   }

    let navigate = useNavigate();

    const {id} = useParams();

    useEffect(() => {
      loadAdmin();
    }, []);
  
    const loadAdmin = async () => {
      const result = await axios.get(`http://localhost:8080/teachers/get/${id}`);
      setadmin(result.data);
    };

  const handleEdit = async (e) => {
    if(fullname===""||email===""||phone===""||address===""||Gender===""){
      alert("all fields are mandatory!")
    }
    e.preventDefault();
    await axios.put(`http://localhost:8080/teacher/update/${id}`, admin)
    .then((results)=>{
      setadmin(results.data)
    })
    setadmin(admins)
    navigate("/teachers")
};

  return (
    <div>
       <div className='flex'>
       <Link to='/Teachers'>
        <button className='p-2 rounded-lg bg-blue-300'>Admins List</button>
        </Link>
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
                <button onClick={handleEdit} className='bg-blue-300 rounded-md p-2 m-2'>Update Admin</button>
 
      </form>  
    </div>
  )
}

export default EditAdmin
