// import logo from './logo.svg';
import './App.css';
// import React,{Component} from 'react';

// function App() {
//   return (
// <>
// <nav id='navbar' class="navbar navbar-expand-lg ">
//   <div class="container-fluid">
//     <a id='edvora' class="navbar-brand" href="#">EDVORA</a>
 
//   </div>
// </nav>
// </>

//   );
// }
import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import './components/News.css';

export default class App extends Component {

  render() {
    // let {title,description} = this.props;
    return (
      <div>
        {/* <NavBar/> */}
        <News/>
      </div>
    )
  }
}


// export default App;
