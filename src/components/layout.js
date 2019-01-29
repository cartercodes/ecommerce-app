import React, { Component } from 'react';

import Header from './headernavbar/header';
import Navbar from './headernavbar/navbar';
// import SignUp from './auth/signup';

class Layout extends Component {
  render() {
    return (
      <div className='layout'>
        {this.props.children}
        <Header/>
        <Navbar/>
        {/* <SignUp/> */}
      </div>
    );
  }
}

export default Layout;