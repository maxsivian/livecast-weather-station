"use client"
import styles from "./blog.module.css"
import BlogNavbar from '@/components/BlogNavbar'
import BlogContent from "@/components/BlogContent"
import { useEffect } from "react"
import { useState } from "react"
import { useDispatch } from 'react-redux'
import { setRouteLoading } from '@/redux/routeSlice'


const Blog = () => {

    const dispatch = useDispatch()
    const [isNavVisible, setIsNavVisible] = useState(false)

    useEffect(() => {
        dispatch(setRouteLoading(false))
    }, [dispatch])

    const handleOpen = () => {
        setIsNavVisible(true)
    }

    return (
        <div className={styles.container}>
            <div className={styles.blogNavbar}>
                <BlogNavbar isNavVisible={isNavVisible} setIsNavVisible={setIsNavVisible} />
            </div>
            <div className={styles.right}>
                <div className={styles.body}>
                    {!isNavVisible && (
                        <button onClick={handleOpen} className={styles.expand}>
                            <img src="/icons/expand.svg" alt="expand" className={styles.expandSvg} />
                        </button>
                    )}
                    <BlogContent />
                </div>
            </div>
        </div>
    )
}

export default Blog