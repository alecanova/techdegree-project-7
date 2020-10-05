import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => (

    <nav className="main-nav">
        <ul>
          <li>
            <NavLink to='/guitar'>Guitar</NavLink>
          </li>
          <li>
            <NavLink to='/bass'>Bass</NavLink>
          </li>
          <li>
            <NavLink to='/drums'>Drums</NavLink>
          </li>
        </ul>
    </nav>

)

export default Nav;