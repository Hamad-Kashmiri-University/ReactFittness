import React from 'react';
// import ReactMapGL from 'react-map-gl'; 
// import map library 
import '../css/map.css'
import fittnessmap from '../Assets/fittnessmap.png'

function Mappage() {
  // const [viewport, setViewport] = useState({
  //   latitude: 52.4068,
  //   longitude: 1.5197,
  //   zoom: 10,
  //   width: "1170px",
  //   height: "670px"
  // });
  // creating a state for the a variable called viewport in which we store map data, functioning but no need to use for this implementation 
  // as full functionality cant be implemented at the moment
    return (
      <div> 
        <div className="mapbg">
          <ul className="block">
            <a href="map" alt="not found"><div className="mapbutton"> 5 Mile Radius </div></a>
            <a href="map" alt="not found"><div className="mapbuttonmain"> 3 Mile Radius </div></a>
            <a href="map" alt="not found"><div className="mapbutton"> 1 Mile Radius </div></a>
            <a href="map" alt="not found">
            <div className="cbblue"></div>
            </a>
            <a href="map" alt="not found">
            <div className="cborange"></div>
            </a>
            {/* above html is for the buttons that show the different data view of the map, 5mile 3mile and 1 mile */}
            
          </ul>
          <div className="cbtext1"> Healthy Eating </div>
          <div className="cbtext"> Leisure and Exercise </div>
          
          {/* <ReactMapGL 
            {...viewport}
            mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
          > 
          </ReactMapGL> */}
          {/* ...viewport is us passing the viewport data to the map  above code functions fine, however for time purposes ill import a static version*/}
        </div>
        <img className="map" alt = "not found" src={fittnessmap}></img>
        </div>
    );
  }
  export default Mappage