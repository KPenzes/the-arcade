import Link from 'next/link';
import styles from './nav-menu.module.css'

export default function NavMenu() {
  return (
    <nav className={styles.navMenu}>
      <ul>
        <li>
          <Link href="/">HOME</Link>
        </li>
        <li>
          <Link href="/games">GAMES</Link>
        </li>
      </ul>
    </nav>
  )
}
