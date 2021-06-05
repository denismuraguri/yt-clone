import React from 'react'
import "./_header.scss"
import { FaBars } from "react-icons/fa";
import { AiOutlineSearch } from "react-icons/ai";
import { MdNotifications, MdApps} from "react-icons/md";



export default function Header() {
    return (
        <div className="border border-dark header">
            <FaBars 
            className="header__menu"
            size={26}
            
         
            
            />
        </div>
    )
}
