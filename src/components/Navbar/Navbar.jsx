import React,{useState} from 'react';
import {menuitem} from './MenuItems';
import  {MdOutlineClose }from "react-icons/md";
import { FaBars } from 'react-icons/fa';
import './Navbar.css';
import logo from '../../images/logo.png'    

const Navbar = () => {
    const [clicked , setClicked] = useState(false);

    const handleClick = () => {
        setClicked(!clicked)
    }
    return (
        <nav className='NavbarItems'>
             <div className="navbar-logo"> <img src={logo} className='logo'/></div>
             <div className='header_text'>Interview Feedback From</div>
             <div className="menu-icon" onClick={handleClick}>
                 {clicked ?< MdOutlineClose className='icon_color' /> :  <FaBars className='icon_color'/>  }
            
             </div>
             <ul className={clicked ? 'nav-menu active': 'nav-menu'}>
                 {menuitem.map((item,index) =>{
                     return (
                        <li key={index}><a className={item.cName} id={item.id} href={item.url}>{item.title}</a></li>
                     )
                 })}
                 
             </ul>
        </nav>
    )
}

export default Navbar
