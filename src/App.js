import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Pages/Home';
import Students from './components/students/Students';
import AdminSideBar from './components/nav/AdminSideBar';
import AdminDashBoard from './components/admin/AdminDashBoard';
import ParentsDashBoard from './components/parents/ParentsDashBoard';
import TeachersDashboard from './components/teachers/TeachersDashboard';
import Attendance from './components/Pages/Attendance';
import Classes from './components/Pages/Classes';
import Teachers from './components/teachers/Teachers';
import Parents from './components/parents/Parents';
import Admins from './components/admin/Admins';
import NoticeBoard from './components/notice/NoticeBoard';
import Examinations from './components/Pages/Examinations';
import Users from './components/Pages/Users';
import Library from './components/Pages/Library';
import { useState } from 'react';
import Login from './components/Login';
import Signup from './components/Signup';
import VirtualClasses from './components/virtual/VirtualClasses';
import NotesApp from './components/notes/NotesApp';
import WebPage from './components/webpage/WebPage';
import Nav from './components/webpage/Nav';
import TeacherSideBar from './components/nav/TeacherSideBar';
import ParentSideBar from './components/nav/ParentSideBar';
import AddTeacher from './components/teachers/AddTeacher';
import AddParent from './components/parents/AddParent';
import AddStudent from './components/students/AddStudent';
import EditTeacher from './components/teachers/EditTeacher';
import EditParent from './components/parents/Editparent';
import EditStudent from './components/students/EditStudent';
import EditClass from './components/Pages/EditClass';
import Skills from './components/webpage/Skills';
import Contact from './components/webpage/Contact';
import EditAdmin from './components/admin/EditAdmin';



const App = () => {
  const[user, setUser]=useState(true);
  const[role, setRole]=useState("admin");

  return (
    <div >
    {user ? (
      <div className='flex'>
        <BrowserRouter>
        {(role==="admin" )? 
       (<AdminSideBar/> ) :(role==="teacher") ?
       (<TeacherSideBar/>) :(role==="parent") ?
       (<ParentSideBar/>) :(<ParentSideBar/>)
    }
      <div className='container'>
      <Routes >
        <Route path='/' exact element={<Home/>}/>
        <Route path='/students' exact element={<Students/>}/>
        <Route path='/AdminDashboard' exact element={<AdminDashBoard/>}/>
        <Route path='/ParentsDashboard' exact element={<ParentsDashBoard/>}/>
        <Route path='/TeachersDashboard' exact element={<TeachersDashboard/>}/>
        <Route path='/Attendance' exact element={<Attendance/>}/>
        <Route path='/Notes' exact element={<NotesApp/>}/>
        <Route path='/Examinations' exact element={<Examinations/>}/>
        <Route path='/Classes' exact element={<Classes/>}/>
        <Route path='/virtual' exact element={<VirtualClasses/>}/>
        <Route path='/Teachers' exact element={<Teachers/>}/>        
        <Route path='/Parents' exact element={<Parents/>}/>
        <Route path='/Admins' exact element={<Admins/>}/>
        <Route path='/addteacher' exact element={<AddTeacher/>}/>        
        <Route path='/addParent' exact element={<AddParent/>}/>
        <Route path='/addStudent' exact element={<AddStudent/>}/>
        <Route path='/editClass:/id' exact element={<EditClass/>}/>
        <Route path='/editAdmin:/id' exact element={<EditAdmin/>}/>
        <Route path='/editteacher/:id' exact element={<EditTeacher/>}/>        
        <Route path='/editParent/:id' exact element={<EditParent/>}/>
        <Route path='/editStudent/:id' exact element={<EditStudent/>}/>
        <Route path='/NoticeBoard' exact element={<NoticeBoard/>}/>
        <Route path='/users' exact element={<Users/>}/>
        <Route path='/Library' exact element={<Library/>}/>
        </Routes>  
      </div>
    </BrowserRouter>
      </div>
    
    ):(
      <div>
      <BrowserRouter>
      <Nav/>
        <Routes>
           <Route path='/' exact element={<WebPage/>}/> 
           <Route path='/skills' exact element={<Skills/>}/> 
           <Route path='/contact' exact element={<Contact/>}/> 
           <Route path='/login' exact element={<Login/>}/> 
           <Route path='/signup' exact element={<Signup/>}/>
        </Routes>         
      </BrowserRouter>
       </div> 
    )}
    </div>
    
  );
};

export default App;
