import React from 'react'
import Nav from './Nav'

const Footer = () => {
  return (
    <div>
        <Nav showItem1={true} showItem2={true} navClass={'nav_footer'}/>
        <p className='copy_right'>&#169; 2013 Valet Idustries, Inc</p>
    </div>
  )
}

export default Footer