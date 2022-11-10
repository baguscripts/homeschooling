// import axios from 'axios';
// import React, { useEffect, useState } from 'react'
// import { Link, useNavigate, useParams } from 'react-router-dom';

// function EditClass() {
//     const[allclass,setAllClass]=useState();
//     const[name,setname]=useState('');
//     const[classId,setclassId]=useState('');

//     let navigate = useNavigate();

//     const {id} = useParams();

//     useEffect(() => {
//       loadClass();
//     }, []);
  
//     const loadClass = async () => {
//       const result = await axios.get(`http://localhost:8080/class/get/${id}`);
//       setAllClass(result.data);
//     };

//   const handleEdit = async (e) => {
//     e.preventDefault();
//     await axios.put(`http://localhost:8080/class/delete/${id}`, allclass)
//     .then((results)=>{
//       setAllClass(results.data)
//     })
//     setAllClass(allclass)
//     navigate("/Classes")
// };
//   return (
//     <div>
//         <Link to='/Classes'>
//         <button className='bg-blue-300 rounded-lg p-2'>Classes List</button>
//         </Link>
//       <form className='flex'>
//                 <input
//                 name='name'
//                 value={name}
//                 placeholder='Name'
//                 onChange={(e)=> setname(e.target.value)}
//                 className='bg-gray-200 text-center rounded-md m-2'              
//                 />
//                 <input
//                 name='classId'
//                 value={classId}
//                 placeholder='classId'
//                 onChange={(e)=> setclassId(e.target.value)}
//                 className='bg-gray-200 text-center rounded-md m-2'              
//                 />
                
//               <button onClick={handleEdit} className='bg-blue-300 rounded-md p-2 m-2'>Update Class</button>
 
//       </form>  
//     </div>
//   )
// }

// export default EditClass
