import "./Sidebar.css"
import Logo from "../../imgs/logo.png"
import { SidebarData } from "../../Data/Data"
import {UilSignOutAlt,UilBars} from "@iconscout/react-unicons"
import { useState } from "react"
import {motion} from "framer-motion"

export default function Sidebar() {
const [selected, setSelected]= useState(0)
const [expanded, setExpanded]= useState(true)

const sideBarVaraints={
    true:{
        left: '0'
    },
    false:{
        left:"-60%"
    }
}
    
  return (
    <>
    <div className="bars" style={expanded?{left:'60%'}:{left:"5%"}}
    onClick={()=> setExpanded(!expanded)}
    >
            <UilBars />
            </div>
    <motion.div className="Sidebar" 
    variants={sideBarVaraints}
    animate={window.innerWidth<=768?`${expanded}`:""}
    
    >
        <div className="logo">
            <img src={Logo} alt="" />
            <span>
            Sh<span>o</span>ps    
            </span>
        </div>
        <div className="menu">
            
                {SidebarData.map((item,index)=>{
                    return(
                    <div 
                    key={index} 
                    className={selected==index?"menu-item active":'menu-item'}
                    onClick={()=> setSelected(index)}
                    >
                        <item.Icon/>
                        <span>
                            {item.heading}
                        </span>
                    </div>
                )})}
            <div className="menu-item">
                <UilSignOutAlt/>
            </div>
        </div>
    </motion.div>
    </>
  )
}
