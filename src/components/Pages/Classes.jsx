import axios, { Axios } from 'axios';
import React, { useEffect, useState } from 'react'
import { FaEdit } from 'react-icons/fa';
import { MdDeleteForever } from 'react-icons/md';
import { Link } from 'react-router-dom';

function Admins() {
  const[allclass,setAllClass]=useState(
    [
      {
        id:"1",
        name:"manu",
        classId:"12",
        
      },
      {
        id:"2",
        name:"manu",
        classId:"12",
        
      },
      {
        id:"3",
        name:"manu",
        classId:"12",
        
      },
      {
        id:"4",
        name:"manu",
        classId:"12",
        
      },
      {
        id:"5",
        name:"manu",
        classId:"12",
        
      },
      {
        id:"6",
        name:"manu",
        classId:"34",
        
      },
      {
        id:"7",
        name:"manu",
        classId:"34",
        
      },
      {
        id:"8",
        name:"manu",
        classId:"12",
        
      },
    ]
  );
  const[name,setname]=useState('');
  const[classId,setclassId]=useState('');

  const classes={name,classId}

useEffect(() => {
  loadClasses();
}, []);

const loadClasses = async () => {
  const result = await Axios.get("http://localhost:8080/class");
  setAllClass(result.data);
};

const handleDelete = async (id) => {
  await Axios.delete(`http://localhost:8080/class/delete/${id}`);
  loadClasses();
};

  const addClassHandler = async (e)=>{
    e.preventDefault();
        if(name===""||classId===""){
            alert("all fields are mandatory!")
          }
        setAllClass(classes)
        await axios.post('url',allclass);
  }
  return (
    <div className='container flex-col justify-center'>
      <div className='flex'>
      <h1 className='font-bold text-center flex-1 text-3xl text-gray-600 pt-4'>CLASSES</h1>
      </div> 
      <form className='flex'>
                <input
                name='name'
                value={name}
                placeholder='Name'
                onChange={(e)=> setname(e.target.value)}
                className='bg-gray-200 text-center rounded-md m-2'              
                />
                <input
                name='classId'
                value={classId}
                placeholder='classId'
                onChange={(e)=> setclassId(e.target.value)}
                className='bg-gray-200 text-center rounded-md m-2'              
                />
                
                    <button onClick={addClassHandler} className='bg-blue-300 rounded-md p-2 m-2'>Add Class</button>
 
      </form>  
      <table>
        <thead> 
          <tr>
        <th>ID</th>
        <th>NAME</th>
        <th>classId</th>
        <th>OPTIONS</th>
      </tr>
      </thead>
      <tbody>
          {allclass.map((item,key)=>(
            <tr key={item.id}>
          <td>{item.id}</td>
          <td>{item.name}</td>
          <td>{item.classId}</td>
          <td className='flex'>
          <MdDeleteForever 
        onClick={()=> handleDelete(item.id)} 
        size='1.3rem' 
        />
        <Link
              className={"btn btn-outline-primary mx-2"}
              to={`/editClass/${item.id}`}
              >
              <FaEdit
            onClick={()=> console.log(item.id)} 
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
