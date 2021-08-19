import Navbar from "./Navbar";
const Header = () => {
    return ( 
    <div id='main'>
        <Navbar/>
        <div className='name'>
            <h1><span>Launch </span>your app with us </h1>
            <p className='details'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam dolorem quod laudantium nihil molestiae sequi? Rem magnam nobis sint est placeat quo totam fugit impedit? Maxime fugiat nam cupiditate nemo? 
                </p>
            <a href="#" className='cv-btn'>Download</a>
        </div>
    </div> );
}
 
export default Header;