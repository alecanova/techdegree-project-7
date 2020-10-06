import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => (

    <nav className= "main-nav">
        <ul>
          <li>
            <NavLink to='/books'>Books</NavLink>
          </li>
          <li>
            <NavLink to='/movies'>Movies</NavLink>
          </li>
          <li>
            <NavLink to='/records'>Records</NavLink>
          </li>
        </ul>
    </nav>

)

export default Nav;