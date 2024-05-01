import React from 'react'
import Nav from './Nav'

const Header = () => {
  return (
    <div>
        <div className="head_container">
            <h1 className="site_title">Sartre's List</h1>
            <h2 className="site_sub_title">Better Dressed People</h2>
        </div>
        <Nav navClass={'nav_header'}/>
    </div>
  )
}

export default Header