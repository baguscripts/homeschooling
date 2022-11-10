import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { FaEdit } from 'react-icons/fa';
import { MdDeleteForever } from 'react-icons/md';
import { Link, Navigate } from 'react-router-dom';

function Admins() {
 const[admins,setAdmins]=useState(
  [
    {
      id:"1",
      name:"manu",
      email:"manu@gmail.com",
      phone:12345677,
      address:"chergei",
      gender:"female"
    },
    {
      id:"2",
      name:"manu",
      email:"manu@gmail.com",
      phone:12345677,
      address:"chergei",
      gender:"female"
    },
    {
      id:"3",
      name:"manu",
      email:"manu@gmail.com",
      phone:12345677,
      address:"chergei",
      gender:"female"
    },
    {
      id:"4",
      name:"manu",
      email:"manu@gmail.com",
      phone:12345677,
      address:"chergei",
      gender:"female"
    },
    {
      id:"5",
      name:"manu",
      email:"manu@gmail.com",
      phone:12345677,
      address:"chergei",
      gender:"female"
    },
    {
      id:"6",
      name:"manu",
      email:"manu@gmail.com",
      phone:12345677,
      address:"chergei",
      gender:"female"
    },
    {
      id:"7",
      name:"manu",
      email:"manu@gmail.com",
      phone:12345677,
      address:"chergei",
      gender:"female"
    },
    {
      id:"8",
      name:"manu",
      email:"manu@gmail.com",
      phone:12345677,
      address:"chergei",
      gender:"female"
    },
  ]
 )


 
  useEffect(() => {
    LoadAdmins();
  }, []);

  const LoadAdmins = async () => {
    const result = await axios.get("http://localhost:8080/admin");
    setAdmins(result.data);
  };

  const deleteAdmin = async (id) => {
    await axios.delete(`http://localhost:8080/admin/delete/${id}`);
    LoadAdmins();
  }; 


  return (
    <div className=''>
     <div className='flex'>
      <h1 className='font-bold text-center flex-1 text-3xl text-gray-600 pt-4'>ADMINS</h1>
<Link to="/addteacher" ><button className='bg-blue-200 p-2 rounded-lg ftext-lg font-extrabold'>New Admin</button></Link>
      </div> 
      <table className=''>
        <thead> 
          <tr>
        <th>ID</th>
        <th>NAME</th>
        <th>EMAIL</th>
        <th>PHONE</th>
        <th>ADDRESS</th>
        <th>GENDER</th>
        <th>OPTIONS</th>
      </tr>
      </thead>
      <tbody>
          {admins.map((item,key)=>(
            <tr key={item.id}>
          <td>{item.id}</td>
          <td>{item.name}</td>
          <td>{item.email}</td>
          <td>{item.phone}</td>
          <td>{item.address}</td>
          <td>{item.gender}</td>
          <td className='flex'>
          <MdDeleteForever 
        onClick={()=> deleteAdmin(item.id)} 
        size='1.3rem' 
        />
        <Link
              className={"btn btn-outline-primary mx-2"}
              to={`/editAdmin/${item.id}`}
              >
              <FaEdit
              size='1.3rem'  
              />
             </Link>
       
                  </td>
        </tr>        
        )
        )}
       </tbody>
       </table> 
    </div>
  )
}

export default Admins
