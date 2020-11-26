import React from 'react'
import '../css/Drawer.css'

const Drawer = () => {
  return (
    <ul id="drawer">
    <li>
    <a href="/profile"><span className="iconbg"><div className="icontext">Profile</div></span></a>
    </li>
    <li>
    <a href="/diet"><span className="iconbg2"><div className="icontext">Diet</div></span></a>
    </li>
    <li>
    <a href="/map"><span className="iconbg3"><div className="icontext">Map</div></span></a>
    </li>
    <li>
    <a href="/social"><span className="iconbg4"><div className="icontext">Ranking</div></span></a>
    </li>

    </ul>
  )
};
export default Drawer

// this is our sidebar, list component with spans representing the background ClientRectList, routed using react router dom