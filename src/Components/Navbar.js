import React, {useState} from 'react';
import './Navbar/navbar.css';
import menu from '../assets/menu.png'
import close from '../assets/close.png'

const Navbar = ({name}) => {
    const [showMenu, setShowMenu] = useState("");
    const handleMenu = () => {
        if(showMenu===""){
            setShowMenu("showmenu")
        }
        else{
            setShowMenu("")
        }
    }

    return (
    
    <nav className={`nav`}>
        <div className="nav-container">
            <a href="#main"><h1 className='nav-brand'>{name}</h1></a>
            <div className={`nav-items ${showMenu}`}>
                <a href="#education" onClick = {handleMenu} className='nav-link'>Education</a>
                <a href="#skills" onClick = {handleMenu} className='nav-link'>Skills</a>
                <a href="#projects" onClick = {handleMenu} className='nav-link'>Projects</a>
                <a href="#experience" onClick = {handleMenu} className='nav-link'>Experience</a>
                <a href="#achievements" onClick = {handleMenu} className='nav-link'>Achievements</a>
            </div>
            <div className={`menu-container`}>
                <img src={showMenu===""?menu:close} alt="menu" onClick = {handleMenu} className='menu'/>
            </div>
        </div>
    </nav>
  )
}

export default Navbar