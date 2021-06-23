import React from 'react'
import Link from 'next/link'
import styles from '../styles/Navbar.module.css'
const Navbar = () => {
    return(
        <nav className={styles.navBar}>
            <div className={styles.navItem}>
                <Link href="/teams">Teams</Link>
            </div>
            <div className={styles.navItem} >
                <Link href="/players">Players</Link>
            </div>
        </nav>
    )    
}
export default Navbar;