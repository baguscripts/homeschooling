import React, { useState } from 'react'
import SidebarItem from "./SidebarItem"
import items from "../../data/sidebar.json"
import { FaBars } from 'react-icons/fa'

function Sidebar() {
    const[role, setRole]=useState('admin');
    const[isOpen ,setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);
  return (
    <div>
      <div>
      <div style={{marginLeft: isOpen ? "50px" : "0px"}} className="bars ">
                       <FaBars onClick={toggle} size={24} className='bg-blue-300 rounded-full'/>
                   </div>
      </div>
        <div style={{width: isOpen ? "200px" : "0px"}} className="sidebar">
               <div className="top_section">
                   <h1 style={{display: isOpen ? "block" : "none"}} className="logo">Logo</h1>
                  
                  </div >
          { items.map((item, index) =>
           <SidebarItem onClick={toggle}  key={index} item={item} 
            style={{display: isOpen ? "block" : "none"}}
          />) }
          
        </div>
        </div>
  )
}

export default Sidebar
