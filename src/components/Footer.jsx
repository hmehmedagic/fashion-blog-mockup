import React from 'react'
import Nav from './Nav'

const Footer = () => {
  return (
    <div className='app_footer'>
        <Nav navClass={'nav_footer'}/>
        <p className='copy_right'>&#169; 2013 Valet Idustries, Inc</p>
    </div>
  )
}

export default Footer