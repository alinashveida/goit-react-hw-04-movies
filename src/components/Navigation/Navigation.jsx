import styles from './Navigation.module.css'
import { NavLink } from 'react-router-dom'

export default function Navigation() {
  return (
    <nav>
      <NavLink
        exact
        to="/"
        className={styles.link}
        activeClassName={styles.activeLink}
      >
        Home
      </NavLink>
      <NavLink
        to="/movies"
        className={styles.link}
        activeClassName={styles.activeLink}
      >
        Movies
      </NavLink>
    </nav>
  )
}
