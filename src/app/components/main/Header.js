import React from 'react';
import {Link} from 'react-router-dom';
import Welcome from './Welcome';
import NavBar from './NavBar';

export default class Header extends React.Component {
  render() {
    return(
      <div className='header-contain'>
        <Welcome name={this.props.name} />
        <NavBar />
      </div>
    )
  }
}