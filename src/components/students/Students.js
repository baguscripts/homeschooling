import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { FaEdit } from 'react-icons/fa';
import { MdDeleteForever } from 'react-icons/md';
import { Link } from 'react-router-dom';
 
function Students() {
  const[role, setRole]=useState('admin')
 const[student, setstudent]=useState(
  [
    {
      id:"1",
      name:"manu",
      email:"manu@gmail.com",
      phone:12345677,
      address:"chergei",
      dob:"09/09/2000",
      gender:"female",
      classId:"5",
    },
    {
      id:"2",
      name:"manu",
      email:"manu@gmail.com",
      phone:12345677,
      address:"chergei",
      dob:"09/09/2000",
      gender:"female",
      classId:"5",
    },
    {
      id:"3",
      name:"manu",
      email:"manu@gmail.com",
      phone:12345677,
      address:"chergei",
      dob:"09/09/2000",
      gender:"female",
      classId:"5",
    },
    {
      id:"4",
      name:"manu",
      email:"manu@gmail.com",
      phone:12345677,
      address:"chergei",
      dob:"09/09/2000",
      gender:"female",
      classId:"5",
    },
    {
      id:"5",
      name:"manu",
      email:"manu@gmail.com",
      phone:12345677,
      address:"chergei",
      dob:"09/09/2000",
      gender:"female",
      classId:"5",
    },
    {
      id:"6",
      name:"manu",
      email:"manu@gmail.com",
      phone:12345677,
      address:"chergei",
      dob:"09/09/2000",
      gender:"female",
      classId:"5",
    },
    {
      id:"7",
      name:"manu",
      email:"manu@gmail.com",
      phone:12345677,
      address:"chergei",
      dob:"09/09/2000",
      gender:"female",
      classId:"5",
    },
    {
      id:"8",
      name:"manu",
      email:"manu@gmail.com",
      phone:12345677,
      address:"chergei",
      dob:"09/09/2000",
      gender:"female",
      classId:"5",
    },
  ]
 );


  useEffect(() => {
    loadStudents();
  }, []);

  const loadStudents = async () => {
    const result = await axios.get("http://localhost:8080/Student");
    setstudent(result.data);
  };

  const deleteStudent = async (id) => {
    await axios.delete(`http://localhost:8080/Student/${id}`);
    loadStudents();
  };

  return (
    <div className='w-full md:overflow-x-hidden'>
      <div className='flex'>
      <h1 className='font-bold text-center flex-1 text-3xl text-gray-600 pt-4'>STUDENTS</h1>
      {role==='admin' ? <Link to="/addStudent" ><button className='bg-blue-200 p-2 rounded-lg text-lg font-extrabold'>New Student</button></Link> :""}

      </div> 
        
      <table>
        <thead> 
          <tr>
        <th >ID</th>
        <th>NAME</th>
        <th>EMAIL</th>
        <th>PHONE</th>
        <th>ADDRESS</th>
        <th>D.O.B</th>
        <th>GENDER</th>
        <th>CLASS ID</th>
        <th>OPTIONS</th>
      </tr>
      </thead> 
      <tbody>
      {student.map((item,key)=>(
          <tr key={item.id}>
          <td>{item.id}</td>
          <td>{item.name}</td>
          <td>{item.email}</td>
          <td>{item.phone}</td>
          <td>{item.address}</td>
          <td>{item.dob}</td>
          <td>{item.gender}</td>
          <td>{item.classId}</td>
          {role==='admin' ?<td className='flex'>
          <MdDeleteForever 
        onClick={()=> console.log(item.id)} 
        size='1.3rem' 
        />
        <Link
              className={"btn btn-outline-primary mx-2"}
              to={`/editStudent/${item.id}`}
              >
              <FaEdit
            onClick={()=> deleteStudent(item.id)} 
              size='1.3rem'  
              />
             </Link>
       
                  </td>:<td></td> 
                  }
          
        </tr>        
        )
        )}
        </tbody>
        </table> 
    </div>
  )
}

export default Students