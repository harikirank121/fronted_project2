import React, { Component } from 'react'

export default class Page4 extends Component {
  render() {
    return (
      <div>
        <header>
            <nav>
        <div className='logo'>My Website</div>
        <ul i="navlist">
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Contact</li>
        </ul>
        <div className='menu' onClick={()=>this.menuClick()}>&#9776;</div>
       </nav>
        </header>
        <section>
            <h1>Welcome to univeristy</h1>
            <p>this is a simple responsive webpage </p>
        </section>
        <footer>
            Copyright@2025.All rights reserved.
        </footer>
      </div>
    )
  }
}
