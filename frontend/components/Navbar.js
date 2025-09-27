"use client"
import React from 'react'
import styles from "./Navbar.module.css"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useDispatch } from 'react-redux'
import { setRouteLoading } from '@/redux/routeSlice'
import Settings from './Settings'

const Navbar = () => {
  const dispatch = useDispatch()
  const pathname = usePathname()

  const handleClick = (targetPath) => {
    console.log(pathname);
    if (pathname != targetPath) {
      dispatch(setRouteLoading(true))
    }
  }

  return (
    <header className={styles.header}>
      <Link href="/" onClick={() => handleClick("/")} className={styles.logoAnchor}>
        <img src="/logo.webp" alt="" className={styles.logo1} />
      </Link>
      <nav className={styles.nav}>
        <div className={styles.left}>
          <div className={styles.logoContainer}>
            <h1>
              <span>
                LIVECAST
              </span>
              <span>
                WEATHER
              </span>
              <span>
                STATION
              </span>
            </h1>
          </div>
        </div>
        <div className={styles.middle}>
        </div>
        <div className={styles.right}>
          <ul>
            <li>
              <Link href="/" className={pathname === "/forecast/" ? styles.active : ""} onClick={() => handleClick("/forecast/")}>FORECAST</Link>
            </li>
            <li>
              <Link href="/station" className={pathname === "/station/" ? styles.active : ""} onClick={() => handleClick("/station/")}>STATION</Link>
            </li>
            <li>
              <Link href="/about" className={pathname === "/about/" ? styles.active : ""} onClick={() => handleClick("/about/")}>ABOUT</Link>
            </li>
            <li className={styles.settings}>
                <Settings />
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}


export default Navbar