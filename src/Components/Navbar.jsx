import Logo from '../images/logo.png'

const Navbar = () => {
    return ( 
       <nav className={}>
        <a href="#" className='logo'>
            <img src={Logo} alt="logo" />
        </a>
        <input type="checkbox" className='menu-btn' id='menu-btn' />
        <label htmlFor="menu-btn" className='menu-icon'>
            <span className='nav-icon' ></span>
        </label>
        <ul className='menu'>
            <li> <a href="#"> Menu </a> </li>
            <li> <a href="#"> Features </a> </li>
            <li> <a href="#"> About </a> </li>
            <li> <a href="#">  UI SS</a> </li>
            <li> <a href="#">  Downloads </a> </li>
        </ul>
       </nav>
     );
}
 
export default Navbar;