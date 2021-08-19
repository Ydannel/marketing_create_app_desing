import { useState } from 'react';
import Logo from '../images/logo.png'

const Navbar = () => {
    const [nav, setNav] = useState(false)

    const changeLogoBack =() =>{
        if (window.scrollY >= 50) {
            setNav(true)
        }
        else{
            setNav(false)
        }
    }
    window.addEventListener('scroll', changeLogoBack);

    return ( 
       <nav className={nav ? 'nav active' : 'nav'}>
        <a href="#" className='logo'>
            <img src={Logo} alt="logo" />
        </a>
        <input type="checkbox" className='menu-btn' id='menu-btn' />
        <label htmlFor="menu-btn" className='menu-icon'>
            <span className='nav-icon' ></span>
        </label>
        <ul className='menu'>
            <li> <a href="#" className='active'> Menu </a> </li>
            <li> <a href="#"> Features </a> </li>
            <li> <a href="#"> About </a> </li>
            <li> <a href="#">  UI SS</a> </li>
            <li> <a href="#">  Downloads </a> </li>
        </ul>
       </nav>
     );
}
 
export default Navbar;