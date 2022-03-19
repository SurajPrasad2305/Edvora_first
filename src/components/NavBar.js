import PropTypes from 'prop-types'
import React, { Component } from 'react'

export class NavBar extends Component {

  render() {
    let {stationnumber,name} = this.props;
    return (
      <div>
          <nav id='navbar' className="navbar navbar-expand-lg ">
         <div className="container-fluid">
           <a id='edvora' className="navbar-brand" href="/">EDVORA</a>
           <div>{stationnumber} </div>
           <div>{name}</div>
       
         </div>
       </nav>
      </div>
    )
  }
}

export default NavBar