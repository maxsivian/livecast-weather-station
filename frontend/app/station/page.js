"use client"
import styles from "./station.module.css"
import Image from 'next/image'
import Loading from '@/components/Loading'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setRouteLoading } from '@/redux/routeSlice'
import { useState } from 'react'


const Station = () => {

  const dispatch = useDispatch()
  const [imageLoading, setImageLoading] = useState(true)

  useEffect(() => {
    dispatch(setRouteLoading(false))
  }, [dispatch])

  const handleClick = () => {
    window.open('https://thingspeak.mathworks.com/', '_blank');
  }

  return (
    <div className={styles.container} onClick={handleClick}>
      <div className={styles.heading}>
        <h1>IOT STATION</h1>
        <img src="/icons/external.svg" alt="" className={styles.external} />
      </div>

      <div className={styles.imageContainer}>
        <div className={styles.loading}>
          {imageLoading && <Loading />}
        </div>
        <Image src={"/images/iot.jpg"} fill alt='iot' className={styles.image} onLoad={() => setImageLoading(false)}></Image>
      </div>
      <div className={styles.imageContainer1}>
        <Image src={"/images/thingspeak.jpg"} fill alt='thingspeak' className={styles.image1}></Image>
      </div>
    </div>
  )
}

export default Station  