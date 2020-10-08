import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => (

    <nav className= "main-nav">
        <ul>
          <li>
            <NavLink to='/avocado'>Avocado</NavLink>
          </li>
          <li>
            <NavLink to='/papaya'>Papaya</NavLink>
          </li>
          <li>
            <NavLink to='/mango'>Mango</NavLink>
          </li>
        </ul>
    </nav>

)

export default Nav;