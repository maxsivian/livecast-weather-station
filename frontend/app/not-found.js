"use client"
import styles from "./not-found.module.css"
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { useDispatch } from 'react-redux'
import { setRouteLoading } from '@/redux/routeSlice'

const NotFound = () => {

    const pathname = usePathname()
    const dispatch = useDispatch()

    const handleClick = (targetPath) => {
        console.log(pathname);
        if (pathname != targetPath) {
            dispatch(setRouteLoading(true))
        }
    }

    return (
        <div className={styles.container}>
            <h1>Error 404</h1>
            <div>
                <p>{pathname}</p>
                <p>This route does not exist</p>
            </div>
            <Link href={"/"} onClick={() => handleClick("/")} className={styles.button}>Return Home</Link>
        </div>
    )
}

export default NotFound