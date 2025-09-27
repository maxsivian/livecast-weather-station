import styles from "./BlogNavbar.module.css"


const BlogNavbar = ({ isNavVisible, setIsNavVisible }) => {

    const handleClose = () => {
        setIsNavVisible(false)
    }
 
    return ( 
        <div className={styles.container}> 
                <nav className={`${styles.nav} ${isNavVisible ? "" : styles.collapse} blognav`} >
                    <button onClick={handleClose} className={styles.collapseBtn}>
                        <img src="/icons/collapse.svg" alt="collapse" className={styles.expandSvg} />
                    </button>

                    <a href="#mt-searchTips">Search Tips</a>
                    <a href="#mt-weatherData">Weather Data</a>
                    <a href="#mt-airQualityData">Air Quality Data</a>
                    <a href="#mt-colorSystem">Color System</a>
                    <a href="/about/credits" target='_blank' className={styles.gray}>Credits</a>
                </nav>
        </div>
    )
}

export default BlogNavbar



// parent component

// const [isNavVisible, setIsNavVisible] = useState(true)

// const handleOpen = () => {
//     setIsNavVisible(true)
// }

// <BlogNavbar isNavVisible={isNavVisible} setIsNavVisible={setIsNavVisible} />

// {
//     !isNavVisible && (
//         <div>
//             <button onClick={handleOpen}>open</button>
//         </div>
//     )
// }





