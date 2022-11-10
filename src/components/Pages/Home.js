import React, { useState } from 'react'
import AdminDashBoard from '../admin/AdminDashBoard';
import ParentsDashBoard from '../parents/ParentsDashBoard';
import TeachersDashboard from '../teachers/TeachersDashboard';

function Home() {
  const[role,setRole]=useState("admin")
  return (
    <div className=''>
      {(role==="admin" )? 
       (<AdminDashBoard/> ) :(role==="teacher") ?
       (<TeachersDashboard/>) :(role==="parent") ?
       (<ParentsDashBoard/>) :(<ParentsDashBoard/>)
    }
     ()   
    </div>
  )
}

export default Home