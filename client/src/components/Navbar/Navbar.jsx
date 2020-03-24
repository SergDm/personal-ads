import React from 'react'
import classes from './Navbar.module.css'
import { NavLink } from 'react-router-dom';

const Navbar = (props) => {
  const state = [
    { link: '/', name: 'Main' },
    { link: '/profile', name: 'Profile' }
  ]

  const menuTop = state.map((item, i) => {
    return (
      <li key={i}>
        <NavLink to={item.link} activeClassName={classes.activ}>{item.name}</NavLink>
        {item.bottom
          ? <ul key={i}>{item.bottom.map((item, i) => <li key={i}><a href={item.link}>{item.name}</a></li>)}</ul>
          : null}
      </li>
    )
  }
  )

  return (
    <div >
      <div>
        <nav className={classes.nav}>
          <nav id={classes.menuVertical}>
            <ul>
              {menuTop}
            </ul>
          </nav>
        </nav>
      </div>
    </div>
  )
}

export default Navbar