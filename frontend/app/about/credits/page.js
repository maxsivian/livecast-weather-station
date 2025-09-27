"use client"
import styles from "./credits.module.css"


const Credits = () => {
  
  return (
    <div className={styles.container}>
      <a className={styles.card} href='https://github.com/maxsivian' target='_blank'>
        <img src="/icons/github.jpg" alt="" className={styles.githubImage} />
        <span>
          @maxsivian
        </span>
      </a>
      <div className={styles.links}>
        <a className="report" href='/docs/LWS_REPORT.pdf' download>
          <span>REPORT</span>
          <img src="/icons/download.svg" alt="download" className={styles.downloadSvg} />
        </a>
        <a className="ppt" href='/docs/LWS_PPT.pdf' download>
          <span>PRESENTATION</span>
          <img src="/icons/download.svg" alt="download" className={styles.downloadSvg} />
        </a>
      </div>
    </div>
  )
}

export default Credits