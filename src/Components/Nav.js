import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = ( {handleLoadingState} ) => (

    <nav className="main-nav">
        <ul>
          <li>
            <NavLink to='/search/guitar' onClick={handleLoadingState} >Guitar</NavLink>
          </li>
          <li>
            <NavLink to='/search/bass' onClick={handleLoadingState} >Bass</NavLink>
          </li>
          <li>
            <NavLink to='/search/drums' onClick={handleLoadingState} >Drums</NavLink>
          </li>
        </ul>
    </nav>

)

export default Nav;