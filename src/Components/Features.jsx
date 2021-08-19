import FeatureBox from './FeatureBox'
import image1 from '../images/feature_1.png'
import image2 from '../images/feature_2.png'
import image3 from '../images/feature_3.png'
const Features = () => {
    return ( 
        <div id='features'>
            <div className="a-container">
                <FeatureBox image={image1} title='Development apps'/>
                <FeatureBox image={image2} title='Money saving service'/>
                <FeatureBox image={image3} title='Usability Interface'/>

            </div>
        </div>
     );
}
 
export default Features;