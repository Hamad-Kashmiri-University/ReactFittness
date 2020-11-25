import Carousel from '../Components/Homecarousel'
import reactlogolarge from '../Assets/reactlogolarge.svg'
import '../css/home.css'
import hometext from '../Assets/hometext.png'
function Homepage() {
  return (
    <div>
      <div>
      <img className = "largelogo" src={reactlogolarge} alt="not found"></img>
      </div>
      <div>
      <img className = "text" src={hometext} alt = "not found"></img>
    </div>
    <div>
      <Carousel />
      </div>    
        </div>
  );
}
// this sets up out logo and text for the home page and calls the carousel component to render in the homepage

export default Homepage;
