import React from 'react'
import { useState } from 'react'
import '../css/ranking.css'

export default class Ranking extends React.Component {
  constructor() {
    super();
    this.state = { scale: null };
  }
  // constructor sets scale var to none, scale var is used to expand the clicked component
  toggle = () => this.setState({ scale: !this.state.scale })
// set a toggle which switches the state of the scale 
  renderClass = (scale) => {
    if (scale === null) return '';
    if (scale === true) return 'circle-scale-up';
    if (scale === false) return 'circle-scale-down';
  }
  // if the state is null set no animation to run, if scale false run zoom out anim from css, anf if true run zoom in class from css

  render() {
    return (  
 
      <div>
      <div className="circles"></div>    
        <div className="content">
          <div id="circle" className={"circle-button " + this.renderClass(this.state.scale)}
            onClick={() => this.toggle()}>
            {/* set the onclick to run the toggle which starts the animation defined in renderclass */}
              <div className='ranktext'>My ranking: 8th <h6>6 hours behind kylie, add image</h6></div>
            </div>
        </div>
        <div className="circles"></div>
      </div>
    );
  }
}





