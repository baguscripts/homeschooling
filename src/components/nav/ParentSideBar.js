import React, { useState } from 'react'
import SidebarItem from "./SidebarItem"
import items from "../../data/parentsidebar.json"
import { FaBars } from 'react-icons/fa'

function ParentSideBar() {
    const[role, setRole]=useState('admin');
    const[isOpen ,setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);
  return (
    <div>
        <div style={{width: isOpen ? "100%" : "25%"}} className="sidebar">
               <div className="top_section">
                   <h1 style={{display: isOpen ? "block" : "none"}} className="logo">Logo</h1>
                   <div style={{marginLeft: isOpen ? "50px" : "0px"}} className="bars">
                       <FaBars onClick={toggle}/>
                   </div>
               </div >
          { items.map((item, index) =>
           <SidebarItem key={index} item={item} 
            style={{display: isOpen ? "block" : "none"}}
          />) }
          
        </div>
        </div>
  )
}

export default ParentSideBar