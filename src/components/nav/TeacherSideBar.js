import React, { useState } from 'react'
import SidebarItem from "./SidebarItem"
import items from "../../data/teachersidebar.json"
import { FaBars } from 'react-icons/fa'

function TeacherSideBar() {
    const[role, setRole]=useState('admin');
    const[isOpen ,setIsOpen] = useState(true);
    const toggle = () => setIsOpen (!isOpen);

  return (
    <div>
        <div style={{width: isOpen ? "200px" : "50px"}} className="sidebar">
               <div className="top_section">
                   <h1 style={{display: isOpen ? "block" : "none"}} className="logo">Logo</h1>
                   <div style={{marginLeft: isOpen ? "50px" : "0px"}} className="bars">
                       <FaBars onClick={toggle}/>
                   </div>
               </div >
          { items.map((item, index) => <SidebarItem key={index} item={item} />) }
        </div>
        </div>
  )
}

export default TeacherSideBar
