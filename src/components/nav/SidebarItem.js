import { useState } from "react"
import * as Icon from 'react-bootstrap-icons';


export default function SidebarItem({item}){
    const [open, setOpen] = useState(true)

    
    if(item.childrens){
        return (
            <div className={open ? "sidebar-item open" : "sidebar-item"}>
                <div className="sidebar-title">
                    <span>
                        { item.icon && <i className={item.icon}></i> }
                        {item.title}    
                    </span> 
                    <Icon.ChevronDown className="toggle-btn" onClick={() => setOpen(!open)}/>
                    {/* <i className="bi-chevron-down toggle-btn" onClick={() => setOpen(!open)}></i> */}
                </div>
                <div className="sidebar-content">
                    { item.childrens.map((child, index) => <SidebarItem key={index} item={child} />) }
                </div>
            </div>
        )
    }else{
        return (
            <a href={item.path || "#"} className="sidebar-item plain">
                { item.icon && <i className={item.icon}></i> }
                {item.title}
            </a>
        )
    }
}