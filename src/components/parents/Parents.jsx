
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { FaEdit } from 'react-icons/fa';
import { MdDeleteForever } from 'react-icons/md';
import { Link } from 'react-router-dom';

function Parents() {
  const[role,setRole]=useState('admin');
 const[Parents, setparent]=useState(
  [
    {
      id:"1",
      name:"manu",
      studentId:"123",
      email:"manu@gmail.com",
      phone:12345677,
      address:"chergei",
      Proffession:"programmer"
    },
    {
      id:"2",
      name:"manu",
      studentId:"123",
      email:"manu@gmail.com",
      phone:12345677,
      address:"chergei",
      Proffession:"programmer"
    },
    {
      id:"3",
      name:"manu",
      studentId:"123",
      email:"manu@gmail.com",
      phone:12345677,
      address:"chergei",
      Proffession:"programmer"
    },
    {
      id:"4",
      name:"manu",
      studentId:"123",
      email:"manu@gmail.com",
      phone:12345677,
      address:"chergei",
      Proffession:"programmer"
    },
    {
      id:"5",
      name:"manu",
      studentId:"123",
      email:"manu@gmail.com",
      phone:12345677,
      address:"chergei",
      Proffession:"programmer"
    },
    {
      id:"6",
      name:"manu",
      studentId:"123",
      email:"manu@gmail.com",
      phone:12345677,
      address:"chergei",
      Proffession:"programmer"
    },
    {
      id:"7",
      name:"manu",
      studentId:"123",
      email:"manu@gmail.com",
      phone:12345677,
      address:"chergei",
      Proffession:"programmer"
    },
    {
      id:"8",
      name:"manu",
      studentId:"123",
      email:"manu@gmail.com",
      phone:12345677,
      address:"chergei",
      Proffession:"programmer"
    },
  ]

 );

  useEffect(() => {
    loadParents();
  }, []);

  const loadParents = async () => {
    const result = await axios.get("http://localhost:8080/parents");
    setparent(result.data);
  };

  const deleteparents = async (id) => {
    await axios.delete(`http://localhost:8080/parents/${id}`);
    loadParents();
  };

 
  return (
    <div className=''>
      <div className='flex'>
      <h1 className='font-bold text-center flex-1 text-3xl text-gray-600 pt-4'>PARENTS</h1>
<Link to="/addParent" ><button className='bg-blue-200 p-2 rounded-lg text-lg font-extrabold'>New Parent</button></Link>
      </div> 
      
      <table>
        <thead> 
          <tr>
        <th>ID</th>
        <th>NAME</th>
        <th>STUDENT ID</th>
        <th>EMAIL</th>
        <th>PHONE</th>
        <th>ADDRESS</th>
        <th>PREFESSION</th>
        <th>OPTIONS</th>
      </tr>
      </thead>
      <tbody>
          {Parents.map((item,key)=>(
            <tr key={item.id}>
          <td>{item.id}</td>
          <td>{item.name}</td>
          <td>{item.studentId}</td>
          <td>{item.email}</td>
          <td>{item.phone}</td>
          <td>{item.address}</td>
          <td>{item.Proffession}</td>
          {role==='admin' ?<td className='flex'>
          <MdDeleteForever 
        onClick={()=> deleteparents(item.id)} 
        size='1.3rem' 
        />
        <Link
              className={"btn btn-outline-primary mx-2"}
              to={`/editparent/${item.id}`}
              >
              <FaEdit
              size='1.3rem'  
              />
             </Link>
       
                  </td> :<td></td>}
          
        </tr>        
        )
        )}
        </tbody>
        </table>
    </div>
  )
}

export default Parents
