import React from 'react'
// import Ranking from '../Components/Ranking'
import '../css/rankingcontainer.css'
import rank1 from '../Assets/rank1.svg'
import rank2 from '../Assets/rank2.svg'
import rank3 from '../Assets/rank3.svg'
import person1 from '../Assets/person1.png'
import person2 from '../Assets/person2.png'
import person3 from '../Assets/person3.png'
import rankheader from '../Assets/rankheader.png'
import Ranking from '../Components/Ranking'
import leaderboard from '../Assets/leaderboard.svg'

// this is the html that sets up the rank page , it consists of html with css classes to define the layout and the hover animation for rank 1 on the leaderboard image
function RankingContainer() {
    return (
      <div className= "container"> 
      <ul className="leftside">
      <div className="rankcontainer">
            <li>
                    <img className="rankheader" src={rankheader} alt="not found"></img>
            </li>
            </div>
            <li>
                <div className="blockbg"></div>
                <Ranking />
            </li>        
      </ul>
      <ul className="rightside">
      <div className="facecontainer">
            <li>
            <div>
                <img src={rank2} alt="notfound"></img>
                <img  className = "siderank"src={person2} alt="notfound"></img>
            </div>
            <div>
                <img className = "rank1" src={rank1} alt="notfound"></img>
                <div className= "avatar">
                    <img src={person1} alt="notfound"></img>
                </div>
            </div>
            <div className="siderank">
                <img className = "" src={rank3} alt="notfound"></img>
                <img className = "siderank" src={person3} alt="notfound"></img>
            </div>
            </li>
        </div>     
        <li>
            <div className="blockbg">
                <img className="leaderboard" src={leaderboard} alt= "not found"></img>
            </div>
            {/* <Ranking /> */}
             
        </li>       
      </ul> 
            
        </div>
    );
  }
  export default RankingContainer