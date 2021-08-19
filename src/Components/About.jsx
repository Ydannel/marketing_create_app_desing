const About = (props) => {
    return ( 
        <div id='about'>
            <div className='about-image'>
                <img src={props.image} alt="about" />
            </div>
            <div className='about-text'>
                <h2>{props.title} </h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab possimus eaque quam cum alias quibusdam beatae provident laboriosam odit, rerum nesciunt. Voluptatum quia labore quam mollitia illo unde minima sunt.
                </p>
                <button>{props.button} </button>
            </div>
        </div>
     );
}
 
export default About;