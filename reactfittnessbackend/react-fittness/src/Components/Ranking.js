import React from 'react'
import { useState } from 'react'
import '../css/ranking.css'

export default class Ranking extends React.Component {
  constructor() {
    super();
    this.state = { scale: null };
  }
  
  toggle = () => this.setState({ scale: !this.state.scale })

  renderClass = (scale) => {
    if (scale === null) return '';
    if (scale === true) return 'circle-scale-up';
    if (scale === false) return 'circle-scale-down';
  }

  render() {
    return (  
 
      <div>
      <div className="circles"></div>    
        <div className="content">
          <div id="circle" className={"circle-button " + this.renderClass(this.state.scale)}
            onClick={() => this.toggle()}>
              <div className='ranktext'>My ranking: 8th <h6>6 hours behind kylie, add image</h6></div>
            </div>
        </div>
        <div className="circles"></div>
      </div>
    );
  }
}





