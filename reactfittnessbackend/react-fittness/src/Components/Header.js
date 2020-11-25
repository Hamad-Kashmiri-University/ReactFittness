import '../css/Header.css'
import fblogo from '../Assets/fblogo.png'
import twitterlogo from '../Assets/twitterlogo.png'
import reactlogo from '../Assets/reactlogo.png'
import instalogo from '../Assets/instalogo.png'
import profilepic from '../Assets/profilepic.svg'


function Header() {
  return (
    <section>   
        <div id="header" className="header">
            <div className="logo">
                <img className="react" src={reactlogo} alt="not found" />
            </div>
            <div className="logo">
                <img className="insta"src={instalogo} alt="not found" />
            </div>
            <div className="logo">
                <img className="twitter"src={twitterlogo} alt="not found" />
            </div>
            <div className="logo">
                <img className="fb"src={fblogo} alt="not found" />
            </div>
            <nav>
                <ul>
                    <li><a href="/sign-in">Log Out</a></li>
                    <li><a href="/">About Us</a></li>
                </ul>
                <a href="profile"><img className=""src={profilepic} alt="not found" /></a>
            </nav>

        </div>
    </section>

  );
}
export default Header