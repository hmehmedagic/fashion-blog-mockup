import React from 'react'

const Nav = ({showItem1, showItem2, navClass}) => {
  return (
    <div>
        <nav aria-label="Main Navigation" role="navigation" className={navClass}>
            <ul className='ul'>
                <li className={showItem1 ? 'visible' : 'hidden'}><a href="...">Home</a></li>
                <li><a href="...">Women's</a></li>
                <li><a href="...">Men's</a></li>
                <li><a href="...">On The Street</a></li>
                <li><a href="...">The Catwalk</a></li>
                <li><a href="...">AdWatch</a></li>
                <li><a href="...">About</a></li>
                <li className={showItem2 ? 'visible' : 'hidden'}><a href="...">Tip's</a></li>
            </ul>
        </nav>
    </div>
  )
}

export default Nav